/* navigation bar */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__links");
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

/* Visit Website button mouse event */
const portfolioEnter = document.querySelectorAll(".portfolio__item");
portfolioEnter.forEach((port) => {
  port.addEventListener("mouseover", () => {
    port.classList.add("port-enter");
  });
  port.addEventListener("mouseleave", () => {
    port.classList.remove("port-enter");
  });
});

/* add margin to header when resize */
function checkSizeChange() {
  const width = window.innerWidth;
  const header = document.querySelector("header");
  const headerOffSet = header.offsetHeight;
  if (width >= 800) {
    document.body.style.paddingTop = headerOffSet + "px";
  } else document.body.style.paddingTop = "0px";
}
checkSizeChange();
window.addEventListener("resize", () => checkSizeChange());

/*fade slide-in animation */
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
