$(document).ready(function(){
  let header = $('.header')
  let navigation = $('.header__navigation');
  let headerVisiblePartlHeight = '51px';
  let headerHeight;
  //для планшетных и мобильных экранов убираем навигацию нафиг
  if ($(window).width() < 1199){
    headerHeight = header.css('height');
    header.css({'height': headerVisiblePartlHeight});
    header.siblings('main').css({'padding-top': headerVisiblePartlHeight});
  }

  window.addEventListener('resize', function(event) {
    console.log("shut up");
  });

  //При нажатии на кнопку сэндвича
  $(".header__sandwich-button").click(function(){
    header.toggleClass('header_expanded')
    if ($(window).width() < 1199) {

      if(header.hasClass('header_expanded') ){
        header.css({'height': headerHeight})
      }
      else{
        header.css({'height': headerVisiblePartlHeight});
      }

    }//Конец условия для широт меньше XL
  })
})
