$(document).ready(function(){
  $(".main-mobile-nav").hide();

  $("#menu-icon").click(function(){
    $(this).toggleClass("open");
    $(".main-mobile-nav").slideToggle();
  });


});
