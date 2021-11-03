const navToggle = document.querySelector(".nav__nav-toggle");
const navMenu = document.querySelector(".nav__menu");


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("navVisible");

  
  
  if (navMenu.classList.contains("navVisible")) {
    navToggle.setAttribute("aria-label", "Cerrar menu");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menu");
  }
});

