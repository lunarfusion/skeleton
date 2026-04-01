((Drupal, once) => {
  Drupal.skeleton_mobilenav =
    Drupal.skeleton_mobilenav || {};

  // TODO - Drupal wants this to be in the main theme library rather than nav component
  // Because the toggle button is in a different region than the navigation?
  // Integrate toggle button into nav component?

  /**
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach}
   **/
  Drupal.behaviors.skeleton_mobilenav = {

    attach(context) {

      // Create open/close toggle button
      const menuTrigger = document.getElementById("menu-toggle");

      // Create a variable for the menu
      const mainMenu = document.getElementById("main-menu");

      // Drupal needs this once function
      once('.button--menu-toggle', context).forEach((nav) => {
        // add both click and keyboard events
        ['click', 'focus.keydown'].forEach(event => menuTrigger.addEventListener(event, showHideMenu));
      });


      function showHideMenu(event) {

        mainMenu.classList.toggle("is-open");
        // WIP - needs aria-hidden true/false swap
        // how to add aria-hidden=true to menu only on mobile?

      };
    },
  };
})(Drupal, once);