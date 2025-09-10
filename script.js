
  const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.getElementById('burger-button');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
});