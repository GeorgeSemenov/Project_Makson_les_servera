$(document).ready(function(){
  alert('loh');
  $(".navigationItem").click(function(){
    console.log($(this).data("id"));
  })
})