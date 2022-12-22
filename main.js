'use strict';

/**
 * add active class
 */  

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-item');
const menuItemDropdown = document.querySelectorAll('.dropdown-item');
const menuLength = menuItem.length;
const menuLengthDropdown = menuItemDropdown.length;
const menuDropdownParent = document.querySelector('.dropdown-toggle'); 

for ( let i = 0; i < menuLength; i++ ){
  if ( menuItem[i].href === currentLocation ) {
    menuItem[i].classList.add('active')
  }
};

// add active class to dropdown links
for ( let j = 0; j < menuLengthDropdown; j++ ) {
  if (menuItemDropdown[j].href === currentLocation ) {
    menuItemDropdown[j].classList.add('active');
    menuDropdownParent.classList.add('active'); // add active class to dropdown menu
  }
};
