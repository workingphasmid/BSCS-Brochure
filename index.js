const header = document.querySelector("header");
const nav = document.querySelector("nav");

const button = document.querySelector(".navbar-toggler");
const navlinks = document.querySelectorAll(".nav-link");

const logo = document.querySelector("#logo-sti");

window.onscroll = function () {
  if (window.scrollY != 0) {
    header.classList.add("bg");
    nav.dataset.bsTheme = "light";
    navlinks.forEach((nav) => {
      nav.classList.remove("text-white");
    });
    logo.setAttribute("src", "./icons/logo-sti-black.png");
  } else {
    header.classList.remove("bg");
    nav.dataset.bsTheme = "dark";
    navlinks.forEach((nav) => {
      nav.classList.add("text-white");
    });
    logo.setAttribute("src", "./icons/logo-sti.png");
  }
};
