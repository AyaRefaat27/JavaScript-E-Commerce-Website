/************** SHOW MENU ***************/
/************** MENU SHOW ***************/
/************** HIDE SHOW ***************/
/************** IMAGE GALLERY ***************/

/************** SWIPER CATEGORIES ***************/
var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,

  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/************** SWIPER PRODUCTS ***************/
var swiperProducts = new Swiper(".newArrivals__container", {
  spaceBetween: 24,

  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/**************  PRODUCTS TABS  ***************/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active__tab");
    });
    target.classList.add("active__tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active__tab");
    });
    tab.classList.add("active__tab");
  });
});
