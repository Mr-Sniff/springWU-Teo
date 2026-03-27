let menuToggle = document.querySelector("#menu-toggle")
let navPane = document.querySelector("#nav-pane")
let mobileNav = document.querySelector("#mobile-nav")
let portfolioPhoto = document.querySelectorAll('.portfolio_photo')
let topButton = document.getElementById("back-to-top-button");


menuToggle.addEventListener('click', show)
portfolioPhoto.forEach(img => {
  img.addEventListener('click', fullscreen_photo)
});

function show() {
  navPane.classList.toggle('active')
};

window.addEventListener('scroll', show_button)
function show_button() {
  if (window.scrollY > 250) {
    topButton.classList.add('show')
  } else {
    topButton.classList.remove('show')
  }
};

function fullscreen_photo() {
  this.classList.toggle('fullscreen')
};

//tagen från w3schools.com
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
