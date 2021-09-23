$(document).ready(function(){
  $(".main-screen__arrow").click(function(){
    $('html, body').animate({
      scrollTop: $(".advantages-screen").offset().top
    }, 2000);
  })
})
