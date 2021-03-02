const btn = document.querySelector(".menu-btn");
const btnIcon = document.querySelector(".menu-btn__icon");
const nav = document.querySelector(".nav-menu-wrapper");

function toggleMenu() {
  // Mobile navigation menu toggle
  nav.classList.toggle("nav--hidden");
  document.body.classList.toggle("disable-scroll");

  // Switch menu button icon on nav toggle
  if (nav.classList.contains("nav--hidden")) {
    btn.setAttribute("aria-expanded", "false");
    btnIcon.src = "./images/icon-hamburger.svg";
  } else {
    btnIcon.src = "./images/icon-close.svg";
    btn.setAttribute("aria-expanded", "true");
  }
}

btn.addEventListener("click", toggleMenu);
