const btn = document.querySelector(".menu-btn");
const btnIcon = document.querySelector(".menu-btn__icon");
const nav = document.querySelector(".nav");

function toggleMenu() {
  // Mobile navigation menu toggle
  nav.classList.toggle("nav--hidden");
  document.body.classList.toggle("disable-scroll");

  // Switch menu button icon on nav toggle
  if (nav.classList.contains("nav--hidden")) {
    btnIcon.src = "./images/icon-hamburger.svg";
  } else {
    btnIcon.src = "./images/icon-close.svg";
  }
}

btn.addEventListener("click", toggleMenu);
