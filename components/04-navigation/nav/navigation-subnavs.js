((Drupal, once) => {
  Drupal.skeleton_subnavs =
    Drupal.skeleton_subnavs || {};

  /**
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach}
   **/
  Drupal.behaviors.skeleton_subnavs = {

    attach(context) {

      // HELP WANTED - this JS needs expert review, accessibility improvements

      // Find each occurance of the nav component
      once('.nav', context).forEach((nav) => {

        // Set all first level links be focusable
        let navItems = nav.querySelectorAll('.nav__link');

        navItems.forEach(function(navItem) {
          navItem.setAttribute("tabindex", "0");
        });

        //Set all subnav links to unfocusable until subnav is open
        let subnavLinks = nav.querySelectorAll('.nav__subnav-wrapper .nav__link');

        subnavLinks.forEach(function(subnavlink) {
          subnavlink.setAttribute("tabindex", "-1");
        });

        // Find each subnav toggle button within the nav
        const menuItemDropdownToggles = nav.querySelectorAll('.nav__subnav-toggle');

        // Make button focusable
        menuItemDropdownToggles.forEach(function(dropdownToggle) {

          dropdownToggle.setAttribute("tabindex", "0");

          // Create Event Listener for both keydown and click events
          ["mousedown", "keydown"].forEach(
            (event) => dropdownToggle.addEventListener(event, detectKey)
          );

          // Check which event it is
          function detectKey(event) {
            // If event is keydown
            if (event.detail === 0) {

              // and keydown is Enter or Space key
              if (
                event.key === "Enter" ||
                event.key === " " ||
                event.keyCode === 13 ||
                event.keyCode === 32
              ) {
                showDropdown(event);
              } else {
                console.log("tab focus");
              };

              // Event is mousedown
            } else {
              showDropdown(event);
            }
          };

          // EVENT CALLER - close all mouse event
          // When main content area is clicked, all navs close
          document.getElementById('main-content').addEventListener('mousedown', function(event) {
            event.preventDefault();
            hideDropdown();
          }); // END CLOSE mouse event


          // WIP - add keyboard event trigger to close
          // Detect focus leave on last item in the subnav?

          // EVENT TO CALL - Toggle subnav closed
          function hideDropdown(event) {
            allSubmenusHidden = document.querySelectorAll('.nav__subnav-wrapper');

            // close all dropdown menus
            allSubmenusHidden.forEach(item => {
              item.classList.remove('nav__subnav-wrapper--open');
              item.setAttribute('aria-expanded', 'false');

              // Return subnav links to reduced index order
              let allSubmenuLinks = item.querySelectorAll('.nav__link');

              allSubmenuLinks.forEach(link => {
                link.setAttribute("tabindex", "-1");
              });
            });
          };

          // EVENT TO CALL - Toggle subnav open
          function showDropdown(event) {
            event.preventDefault();

            // Button open state
            dropdownToggle.classList.toggle('nav__subnav-toggle--open');

            // toggle aria-expanded on the button
            if (dropdownToggle.getAttribute('aria-expanded') === 'true') {
              dropdownToggle.setAttribute('aria-expanded', 'false');
            } else {
              // if it's false, make it true
              dropdownToggle.setAttribute('aria-expanded', 'true');
            };

            //////////////// SUBNAV CONTENTS
            // Find the subnav the button opens
            let subNav = dropdownToggle.nextElementSibling;

            // Visually reveal the subnav
            subNav.classList.toggle('nav__subnav-wrapper--open');

            // toggle aria-expanded on the subnav
            if (subNav.getAttribute('aria-hidden') === 'true') {
              subNav.setAttribute('aria-hidden', 'false');
            } else {
              // if it's false, make it true
              subNav.setAttribute('aria-hidden', 'true');
            };

            // Make subnav links focusable
            let activeSubNavLinks = subNav.querySelectorAll('.nav__link');

            activeSubNavLinks.forEach(function(link) {
              if (link.getAttribute('tabindex') === '-1') {
                link.setAttribute('tabindex', '0');
              } else {
                link.setAttribute('tabindex', '-1');
              };
            });

          }; // END EVENT

        }); // END DROPDOWN TOGGLES

      });
    },
  };

})(Drupal, once);