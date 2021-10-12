let headerVisiblePartlHeight = '59px';
let header                   = $('.header');
let logo                     = $('.header__logo');
let navigation               = $('.header__navigation');
let socials                  = $('.header__socials');
let headerFullHeight = 0;

import '../navigation/navigation.js';

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
  let headerContent            = $('.header__content');
  let contentPaddingBottom     = parseInt(headerContent.css('padding-bottom'),10);

  if ($(window).width() < 1199) {
    let contentPaddingTop        = parseInt(headerContent.css('padding-top'),10);
    headerFullHeight         = getFullNodeHeight([logo,navigation]) 
                               + contentPaddingTop;
    headerVisiblePartlHeight = '59px';
    if ($(window).width() < 768){
      let contentPaddingTop        = parseInt(headerContent.css('padding-top'),10);
      headerVisiblePartlHeight = '52px';
      headerFullHeight         = getFullNodeHeight([logo,navigation,socials]);
    }
    header.next().children().first().css({'padding-top': headerVisiblePartlHeight});
  }else{
    let contentPaddingTop        = parseInt(headerContent.css('padding-top'),10);
    headerFullHeight         = getFullNodeHeight([logo]) 
                               + contentPaddingTop
                               + contentPaddingBottom;
    headerVisiblePartlHeight = 'auto';
    header.next().children().first().css({'padding-top': header.css('height')});
  }
  if (header.hasClass('header_expanded')){header.css({'height': headerFullHeight});}
  else{header.css({'height': headerVisiblePartlHeight});}
}

function getFullNodeHeight(nodeArr){
  let totalSum=0;
  nodeArr.forEach(function(node,i,arr){
    let height        = propToNumb('height',node);
    let marginTop     = propToNumb('margin-top',node);
    let marginBottom  = propToNumb('margin-bottom',node);
    let paddingTop    = propToNumb('padding-top',node);
    let paddingBottom = propToNumb('padding-bottom',node);
    let borderTop     = propToNumb('border-top',node);
    let borderBottom  = propToNumb('border-bottom',node);
    let sum           = (height + marginTop + marginBottom + paddingTop + 
                         paddingBottom + borderBottom + borderTop);
    totalSum += sum;
  })
  // console.log(`height=${height}`);
    // console.log(`marginTop = ${marginTop}`);
    // console.log(`marginBottom = ${marginBottom}`);
    // console.log(`paddingTop = ${paddingTop}`);
    // console.log(`paddingBottom = ${paddingBottom}`);
    // console.log(`borderTop = ${borderTop}`);
    // console.log(`borderBottom = ${borderBottom}`);
  return totalSum;
  // return (height + marginTop + marginBottom + paddingTop + 
  //   paddingBottom + borderBottom + borderTop);
}

function propToNumb (property , node){
  let result = parseInt(node.css(property),10);
  result = isNaN(result) ? 0 : result;
  return result;
}