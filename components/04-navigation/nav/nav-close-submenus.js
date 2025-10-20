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


      // FIRST - if main content is clicked, close all subnavs
      // Find each occurrence of the nav component
      once('.nav--collapsible', context).forEach((nav) => {
        document.getElementById('main-content').addEventListener('mousedown', function(event) {
          event.preventDefault();
          hideDropdown();
        });

        // find all dropdowns and close them when main area is clicked
        let menuItems = nav.querySelectorAll('details');

        function hideDropdown(event) {
          console.log('main clicked');

          menuItems.forEach(function(item) {
            if (item.open = true) {
              item.open = false;
            } else {
              // do nothing
            }
          });
        };
        // End main clock subnavs closer

        // SECOND - close subnavs when another subnav is opened
        // When a details is open, close all other details.
        function handleDetailToggle(event) {
          // We are only interested in details being opened.
          // Also, without the guard below, we'd run into an infinite loop.
          if (!event.target.open) return;
          for (let details of menuItems) {
            details.open = details === event.target;
          }
        }

        // Add toggle listeners.
        for (let details of menuItems) {
          details.addEventListener("toggle", handleDetailToggle);
        }

      });
    },
  };

})(Drupal, once);