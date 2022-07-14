'use strict';

const hamburgerContainer = document.querySelector('.hamburger__container');
const hamburger = document.querySelectorAll('.hamburger');

hamburgerContainer.addEventListener('mouseenter', () => {
  hamburgerContainer.classList.add('active--color');
});

hamburgerContainer.addEventListener('click', () => {
  hamburgerContainer.classList.remove('active--cross');
});

window.addEventListener('click', e => console.log(e.target))
