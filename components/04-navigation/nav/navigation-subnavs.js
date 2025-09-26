((Drupal, once) => {
  Drupal.skeleton_subnavs = Drupal.skeleton_subnavs || {};

  /**
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach}
   **/
  Drupal.behaviors.skeleton_subnavs = {

    attach(context) {

      // Find each occurance of the nav component
      once('.nav', context).forEach((nav) => {

        // Find each subnav toggle button within the nav
        const menuItemDropdownToggles = nav.querySelectorAll('.nav__subnav-toggle');

        menuItemDropdownToggles.forEach(function(dropdownToggle) {

          // Add both click and focus keydown events
          ['mousedown', 'focus.keydown'].forEach(event => dropdownToggle.addEventListener(event, showHideDropdown));

          // Find the subnav the button opens
          let subNav = dropdownToggle.nextElementSibling;

          // Toggle click/keydown event
          function showHideDropdown(event) {
            event.preventDefault();
            console.log('dropdown clicked');

            // Reveal the subnav
            dropdownToggle.parentNode.classList.toggle('nav__item--open');

            // toggle aria-expanded on the button
            if (dropdownToggle.getAttribute('aria-expanded') === 'true') {
              dropdownToggle.setAttribute('aria-expanded', 'false');
            } else {
              // if it's false, make it true
              dropdownToggle.setAttribute('aria-expanded', 'true');
            }

            // toggle aria-expanded on the subnav
            if (subNav.getAttribute('aria-hidden') === 'true') {
              subNav.setAttribute('aria-hidden', 'false');
            } else {
              // if it's false, make it true
              subNav.setAttribute('aria-hidden', 'true');
            }
          }
        });

      });
    },
  };

})(Drupal, once);