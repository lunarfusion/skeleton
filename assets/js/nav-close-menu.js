((Drupal, once) => {
  Drupal.behaviors.skeleton_mobilenav = {

    attach(context) {

      // Create open/close toggle button
      const menuTrigger = once('menu-toggle', '#menu-toggle', context);

      menuTrigger.forEach((trigger) => {
        const mainMenu = document.getElementById('main-menu');
        if (!mainMenu) return;

        // find menu links
        let menuLinks = mainMenu.querySelectorAll('.nav__link');

        // Add aria controls to the button
        trigger.setAttribute('aria-controls', 'main-menu');
        trigger.setAttribute('aria-expanded', 'false');

        const showHideMenu = (event) => {
          if (event.type === 'keydown') {
            if (event.key !== 'Enter' && event.key !== '') return;
            event.preventDefault();
          }
          // open or close the menu
          const isOpen = mainMenu.classList.toggle('is-open');

          // update aria-expanded
          trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");

          // toggle focusability of links
          menuLinks.forEach((link) => {
            link.setAttribute('tabindex', isOpen ? '0' : '-1');
          });
        };

        // close menu on Escape key
        const handleEscape = (event) => {
          if (event.key === 'Escape' && mainMenu.classList.contains('is-open')) {
            // close menu
            mainMenu.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');

            // make links unfocusable again
            menuLinks.forEach((link) => {
              link.setAttribute('tabindex', '-1');
            });

            // optional: return focus to the trigger button
            trigger.focus();
          }
        };

        // attach event to toggle button
        trigger.addEventListener('click', showHideMenu);
        trigger.addEventListener('keydown', showHideMenu);

        // attach Escape listener once per behavior attach
        document.addEventListener('keydown', handleEscape);
      });

    },
  };
})(Drupal, once);