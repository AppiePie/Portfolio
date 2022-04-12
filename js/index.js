const navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelectorAll(".nav__links");
/* navigation bar */
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
/* Visit Website */
const portfolioEnter = document.querySelectorAll(".portfolio__item");
portfolioEnter.forEach((port) => {
  port.addEventListener("mouseover", () => {
    port.classList.add("port-enter");
  });
  port.addEventListener("mouseleave", () => {
    port.classList.remove("port-enter");
  });
});
/* Make whole div clickable outside a link */
