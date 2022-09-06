/**
 * @author: Nikhil Gupta (B.Tech CSE, 2019-2023)
 * @see: https://linkedin.com/in/theninza
 * @description: This file contains the global javascript for the website.
 */

// variables
const navLinks = document.querySelectorAll("nav a");
const scrollToTop = document.querySelector(".scroll-to-top");

/** manage nav link styles based on current page */
// remove underline from all navlinks
navLinks.forEach((link) => {
  link.classList.remove("underline");
});

const currentPage = window.location.pathname.split("/")[1];

// if root, underline about
if (currentPage === "") {
  navLinks[0].classList.add("underline");
} else {
  // else, underline current page
  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("underline");
    }
  });
}

/** Event Listneres */
const onScrollToTopClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const onWindowScroll = () => {
  if (window.scrollY > 100) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
};

// adding event listeners
scrollToTop.addEventListener("click", onScrollToTopClick);
window.addEventListener("scroll", onWindowScroll);

// clear previous console logs

console.clear();

// show developer info
console.info(
  `%cHi there! 👋 Looks like you are trying to explore something on this site. 🤔
  
If you are a developer, you can find the source code for this website at:
https://github.com/cidmrlab-iiitmg/cidmrlab-iiitmg.github.io

Made with ❤️ by Nikhil Gupta (B.Tech CSE, 2019-2023) 🤓.

https://theninza.me
https://linkedin.com/in/theninza
`,
  "font-weight: bold;"
);
