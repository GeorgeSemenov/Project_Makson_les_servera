$(document).ready(function(){
  $(".navigation__item").click(function(){
    let target = $(this).data("target");
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1500);
  })
})