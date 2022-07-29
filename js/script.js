'use strict';

// Nav Hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach((a) => {
  a.addEventListener('click', () => {
    navCollapse.classList.remove('show');
  });
});
