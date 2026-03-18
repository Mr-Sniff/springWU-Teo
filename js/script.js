let menuToggle = document.querySelector("#menu-toggle")
let navPane = document.querySelector("#nav-pane")
let mobileNav = document.querySelector("#mobile-nav")
let portfolioPhoto = document.querySelector('.portfolio_photo')

menuToggle.addEventListener('click', show)
portfolioPhoto.addEventListener('click', fullscreen_photo)

function show() {
  navPane.classList.toggle('active')
};

function fullscreen_photo() {
  portfolioPhoto.classList.toggle('fullscreen')
}
