const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeBtn = document.querySelector("#close-btn");
const header = document.querySelector("#header");
const navLinks = document.querySelectorAll(".nav-link");

hamburgerBtn.addEventListener("click", () => {
  toggleClasses();
});

closeBtn.addEventListener("click", () => {
  toggleClasses();
});

function toggleClasses() {
  hamburgerBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  header.classList.toggle("fullscreen");
  navLinks.forEach((e) => e.classList.toggle("show"));
}
