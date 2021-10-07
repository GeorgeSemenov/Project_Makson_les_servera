const scrollTo = function (nodeStart,nodeFinish, timeScrolling=2000){
  $(nodeStart).click(function(){
    $('html, body').animate({
      scrollTop: $(nodeFinish).offset().top
    }, timeScrolling);
  })  
};

module.exports = scrollTo;