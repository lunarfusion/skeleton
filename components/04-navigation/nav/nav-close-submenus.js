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

      // Find each occurrence of the nav component
      once('.nav--collapsible', context).forEach((nav) => {

        //let menuItems = nav.querySelectorAll('details').open = true;

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
        // End subnavs closer

      });
    },
  };

})(Drupal, once);