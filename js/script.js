let menuToggle = document.querySelector("#menu-toggle")
let navPane = document.querySelector("#nav-pane")
let mobileNav = document.querySelector("#mobile-nav")
let portfolioPhoto = document.querySelectorAll('.portfolio_photo')

menuToggle.addEventListener('click', show)
portfolioPhoto.forEach(img => {
  img.addEventListener('click', fullscreen_photo)
});

function show() {
  navPane.classList.toggle('active')
};

function fullscreen_photo() {
  this.classList.toggle('fullscreen')
};
