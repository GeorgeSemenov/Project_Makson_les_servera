import Swiper from '../../vendor/swiperJS/swiper-bundle.js';
const scrollTo = require('../../JS-components/scrollTo.js');
$(document).ready(function(){
  //приделываем свайпер
  const swiper = new Swiper('.swiper', {
    loop: true,
    // slidesPerView: 4,
    spaceBetween: 39,
     autoplay: {
       delay: 2500,
     },

    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

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
      1199: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
      },
    }
  });

  //Приделываем отброс в понос к форме обратной связи
  scrollTo('.prices-screen .price-card__btn',".contact-us",1000);
})
