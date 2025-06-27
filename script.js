// Toggle mobile navigation
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('#sidebar .nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
