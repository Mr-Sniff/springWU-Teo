let menuToggle = document.querySelector("#menu-toggle")
let navPane = document.querySelector("#nav-pane")
let mobileNav = document.querySelector("#mobile-nav")

menuToggle.addEventListener('click', show)

function show() {
  navPane.classList.toggle('active')
};
