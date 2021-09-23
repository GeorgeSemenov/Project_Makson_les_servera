let headerVisiblePartlHeight = '59px';
let header                   = $('.header');
let headerFullHeight;
$(document).ready(function(){
  initialize();
  window.addEventListener('resize', function(event) {
    initialize();
  });

  //При нажатии на кнопку сэндвича
  $(".header__sandwich-button").click(function(){
    header.toggleClass('header_expanded')
    if ($(window).width() < 1199) {

      if(header.hasClass('header_expanded') ){
        header.css({'height': headerFullHeight})
      }
      else{
        header.css({'height': headerVisiblePartlHeight});
      }

    }//Конец условия для широт меньше XL
  })
})

function initialize(){
  let headerContent     = $('.header__content');
  headerFullHeight      = getFullNodeHeight(headerContent);

  if ($(window).width() < 1199) {
    if ($(window).width() < 768){headerVisiblePartlHeight = '52px';}
    header.next().children().first().css({'padding-top': headerVisiblePartlHeight});
    if (header.hasClass('header_expanded')){
      header.css({'height': headerFullHeight});
    }else{
      header.css({'height': headerVisiblePartlHeight});
    }
  }else{
    headerVisiblePartlHeight = 'auto';
    header.next().children().first().css({'padding-top': header.css('height')});
  }

}
function getFullNodeHeight(node){
  let height        = parseInt(node.css('height'),10);
  let marginTop     = parseInt(node.css('margin-top'),10);
  let marginBottom  = parseInt(node.css('margin-bottom'),10);
  let paddingTop    = parseInt(node.css('padding-top'),10);
  let paddingBottom = parseInt(node.css('padding-bottom'),10);
  let borderTop     = parseInt(node.css('border-top'),10);
  let borderBottom  = parseInt(node.css('border-bottom'),10);
  console.log(`height=${height}`);
  console.log(`marginTop = ${marginTop}`);
  console.log(`marginBottom = ${marginBottom}`);
  console.log(`paddingTop = ${paddingTop}`);
  console.log(`paddingBottom = ${paddingBottom}`);
  console.log(`borderTop = ${borderTop}`);
  console.log(`borderBottom = ${borderBottom}`);
  return (height + marginTop + marginBottom + paddingTop + 
    paddingBottom + borderBottom + borderTop);
}