const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const body = document.body;

// Toggle mobile menu visibility when the open button is clicked
menuOpenButton.addEventListener("click", () => {
  body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
const swiper = new Swiper('.testimonials-swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  },
});
