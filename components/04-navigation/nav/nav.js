(function(Drupal, once) {
  'use strict';

  // Adjust this selector if your markup structure changes. It targets the
  // <details> element that is a direct child of a collapsible nav item.
  var NAV_DETAILS_SELECTOR = '.nav__item--has-children > details';

  /**
   * Gets all currently open nav <details> elements on the page.
   *
   * @return {Array<HTMLDetailsElement>}
   */
  function getOpenNavDetails() {
    return Array.prototype.slice.call(
      document.querySelectorAll(NAV_DETAILS_SELECTOR + '[open]')
    );
  }

  /**
   * Closes every open nav item except the one passed in.
   *
   * @param {HTMLDetailsElement} currentDetails
   *   The <details> element that was just opened and should stay open.
   */
  function closeOtherNavItems(currentDetails) {
    getOpenNavDetails().forEach(function(details) {
      if (details !== currentDetails) {
        details.removeAttribute('open');
      }
    });
  }

  /**
   * Closes every open nav item.
   */
  function closeAllNavItems() {
    getOpenNavDetails().forEach(function(details) {
      details.removeAttribute('open');
    });
  }

  /**
   * Closes all open nav items if the interaction occurred outside of them.
   *
   * Used for both `click` and `focusin` events so it works for mouse and
   * keyboard navigation alike (e.g. tabbing focus into #main-content).
   *
   * @param {Event} event
   */
  function handleOutsideInteraction(event) {
    var openDetails = getOpenNavDetails();

    if (openDetails.length === 0) {
      return;
    }

    var interactionInsideOpenItem = openDetails.some(function(details) {
      return details.contains(event.target);
    });

    if (!interactionInsideOpenItem) {
      closeAllNavItems();
    }
  }

  Drupal.behaviors.collapsibleNav = {
    attach: function(context) {

      let main = document.getElementById('main-content')
      // Bind the toggle behavior to each collapsible nav item once.
      once('collapsible-nav-toggle', NAV_DETAILS_SELECTOR, context).forEach(
        function(details) {
          details.addEventListener('toggle', function() {
            if (details.open) {
              closeOtherNavItems(details);
            }
          });
        }
      );

      // Bind the outside click/focus listeners to the document a single
      // time, regardless of how many times Drupal behaviors are attached
      // (e.g. after an AJAX update replaces part of the page).

      once('collapsible-nav-outside-interaction', 'main', context).forEach(
        function() {
          document.addEventListener('click', handleOutsideInteraction);
          document.addEventListener('focusin', handleOutsideInteraction);
        }
      );
    },

    detach: function(context, settings, trigger) {
      if (trigger === 'unload') {
        document.removeEventListener('click', handleOutsideInteraction);
        document.removeEventListener('focusin', handleOutsideInteraction);
      }
    }
  };
})(Drupal, once);