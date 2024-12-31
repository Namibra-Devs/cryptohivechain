// Hamburger menu
const hamburger = document.getElementById('hamburger-button');
const navMenu = document.getElementById('navmenu');
const navLinks = document.querySelectorAll('.nav-link');
const open = document.querySelector('.open');
const close = document.querySelector('.close');


hamburger.addEventListener('click', () => {

  if (navMenu.classList.contains("scale-y-0")) {
    navMenu.classList.remove("scale-y-0", "opacity-0");
    navMenu.classList.add("scale-y-100", "opacity-100");
    open.classList.add("hidden");
    close.classList.remove("hidden");
      // rotate hamburger button
  } else {
    navMenu.classList.add("scale-y-0", "opacity-0");
    navMenu.classList.remove("scale-y-100", "opacity-100");
    open.classList.remove("hidden");
    close.classList.add("hidden");
  }
});