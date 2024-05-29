const burgerButton = document.querySelector('.burger');
const closeButton = document.querySelector('.menu-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

// Закрытие меню при клике на кнопку бургер
burgerButton.addEventListener('click', () => {
  mobileMenu.classList.add('menu-active');
});

// Закрытие меню при клике на кнопку закрытия
closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-active');
});

// Закрытие меню при клике вне меню
document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !burgerButton.contains(event.target)) {
    mobileMenu.classList.remove('menu-active');
  }
});