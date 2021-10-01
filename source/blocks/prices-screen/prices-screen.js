import Swiper from '../../vendor/swiperJS/swiper-bundle.js';
$(document).ready(function(){
  const swiper = new Swiper('.swiper', {
    loop: true,
    // slidesPerView: 4,
    spaceBetween: 39,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 750px
      750: {
        slidesPerView: 2,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    }
  });
})
