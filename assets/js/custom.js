// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

jQuery(window).scroll(function() {
  if ( jQuery(window).scrollTop() > amountScrolled ) {
    jQuery('button.back-to-top').addClass('show');
  } else {
    jQuery('button.back-to-top').removeClass('show');
  }
});

jQuery('button.back-to-top').click(function() {
  jQuery('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});