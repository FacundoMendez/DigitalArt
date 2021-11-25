

const navToggle = document.querySelector(".nav__nav-toggle");
const navMenu = document.querySelector(".nav__menu");
const navVisible = document.querySelector(".navVisible")


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("navVisible");

  if (navMenu.classList.contains("navVisible")) {
    navToggle.setAttribute("aria-label", "Cerrar menu");
    navVisible.style.left= "0%";

  } 
  else {
    navToggle.setAttribute("aria-label", "Abrir menu");
    navVisible.style.left= "100%";

  }
});
