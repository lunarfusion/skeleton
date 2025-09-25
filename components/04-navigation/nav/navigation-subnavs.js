((Drupal, once) => {
	const menuItemDropdownToggles = document.querySelectorAll('.nav__subnav-toggle');
	// alert('Hello! I am an alert box!!');

	// TOGGLE ATTRIBUTES - find each toggle object
	menuItemDropdownToggles.forEach(function(dropdownToggle) {
		// TOGGLE ACTIONS - Add both click and focus keydown events
		['mousedown', 'focus.keydown'].forEach(event => dropdownToggle.addEventListener(event, showHideDropdown));

		// Toggle click/keydown event
		function showHideDropdown(event) {
			event.preventDefault();
			console.log('dropdown clicked');
			dropdownToggle.parentNode.classList.toggle('nav__item--open');

			// toggle aria-expanded
			if (dropdownToggle.getAttribute('aria-expanded') === 'true') {
				dropdownToggle.setAttribute('aria-expanded', 'false');
			} else {
				// otherwise if it's false, make it true
				dropdownToggle.setAttribute('aria-expanded', 'true');
			}
		}
	});
})(Drupal, once);
