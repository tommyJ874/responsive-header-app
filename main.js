const button = document.querySelector('.navbar_toggleButton');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_socialIcons');

button.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
