$(document).ready(function() {
  //Sticky navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.hero').height()) {
      $('.nav').addClass("navscrolled");
    }
    else {
      $('.nav').removeClass("navscrolled");
    }
  });

});
