/**
 * @author: Nikhil Gupta (B.Tech CSE, 2019-2023)
 * @see: https://linkedin.com/in/theninza
 * @description: This file contains implementation for the carousel.
 */

// variables
class Carousel {
  constructor() {
    this.initVariables();
    this.initElements();
    this.updateClasses();
    this.initEventListeners();
  }

  initVariables() {
    this.carouselContainer = document.querySelector(".carousel-container");
    this.carouselBackground = document.querySelector(
      ".carousel-background-overlay"
    );
    this.carouselControlLeft = document.querySelector(".carousel-control-left");
    this.carouselControlRight = document.querySelector(
      ".carousel-control-right"
    );

    this.isAnimating = false;
    this.animationIdx = 0;
    this.animationFrame = null;

    this.images = [
      "/assets/people/2.webp",
      "/assets/people/3.webp",
      "/assets/people/4.webp",
      "/assets/people/5.webp",
    ];

    this.totalImages = this.images.length + 1;

    this.currentImageIndex = 0;
    this.leftImageIndex = this.getActualImageIndex(this.currentImageIndex - 1);
    this.rightImageIndex = this.getActualImageIndex(this.currentImageIndex + 1);
  }

  initElements() {
    this.images.forEach((image) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("carousel-image-container");
      imageContainer.classList.add("hidden");

      const imageElement = document.createElement("img");
      imageElement.classList.add("carousel-image");
      imageElement.setAttribute("src", image);
      imageElement.setAttribute("alt", "carousel-image");

      imageContainer.appendChild(imageElement);
      this.carouselContainer.appendChild(imageContainer);
    });

    this.carouselImages = document.querySelectorAll(
      ".carousel-image-container"
    );

    this.images = [
      this.carouselImages[0].querySelector("img").src,
      ...this.images,
    ];
  }

  updateClasses(currIdx = 0) {
    this.currentImageIndex = currIdx;
    this.leftImageIndex = this.getActualImageIndex(this.currentImageIndex - 1);
    this.rightImageIndex = this.getActualImageIndex(this.currentImageIndex + 1);
    this.carouselBackground.src = this.images[this.currentImageIndex];

    this.carouselImages.forEach((image, index) => {
      if (index === this.leftImageIndex) {
        image.classList.add("left");
        image.classList.remove("right");
        image.classList.remove("hidden");
      } else if (index === this.rightImageIndex) {
        image.classList.add("right");
        image.classList.remove("left");
        image.classList.remove("hidden");
      } else if (index === this.currentImageIndex) {
        image.classList.remove("left");
        image.classList.remove("right");
        image.classList.remove("hidden");
      } else {
        image.classList.remove("left");
        image.classList.remove("right");
        image.classList.add("hidden");
      }
    });
  }

  initEventListeners() {
    this.carouselControlLeft.addEventListener(
      "click",
      this.onLeftClick.bind(this)
    );
    this.carouselControlRight.addEventListener(
      "click",
      this.onRightClick.bind(this)
    );

    this.carouselImages.forEach((image, index) => {
      image.addEventListener("transitionend", () => {
        this.animationIdx++;
        if (this.animationIdx === 2) {
          this.animationIdx = 0;
          this.isAnimating = false;
        }
      });
    });
  }

  onLeftClick() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.updateClasses(this.leftImageIndex);
  }

  onRightClick() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.updateClasses(this.rightImageIndex);
  }

  getActualImageIndex(index) {
    if (index < 0) {
      return this.totalImages - 1;
    } else if (index >= this.totalImages) {
      return 0;
    } else {
      return index;
    }
  }
}

const carousel = new Carousel();
