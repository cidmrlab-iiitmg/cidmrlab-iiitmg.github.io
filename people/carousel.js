/**
 * @author: Nikhil Gupta (B.Tech CSE, 2019-2023)
 * @see: https://linkedin.com/in/theninza
 * @description: This file contains implementation for the carousel.
 */

// images
const imagesToAdd = [
  "/assets/people/2.webp",
  "/assets/people/3.webp",
  "/assets/people/4.webp",
  "/assets/people/5.webp",
];

// variables

const overlayImage = document.querySelector(".carousel-background-overlay");
const alreadyPresentImageSrc = overlayImage.src;
const imagesContainer = document.querySelector(".carousel-image-container");

const overlays = [alreadyPresentImageSrc, ...imagesToAdd];

// add images to the carousel
imagesToAdd.forEach((image) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("swiper-slide");

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.classList.add("carousel-image");
  imageElement.setAttribute("alt", "carousel-image");
  imageElement.setAttribute("height", "400");
  imageElement.setAttribute("width", "400");

  wrapperElement.appendChild(imageElement);
  imagesContainer.appendChild(wrapperElement);
});

// initialize swiper
const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".carousel-control-right",
    prevEl: ".carousel-control-left",
  },
  loop: true,
});

// change overlay image
swiper.on("slideChange", () => {
  overlayImage.src = overlays[swiper.realIndex];
});
