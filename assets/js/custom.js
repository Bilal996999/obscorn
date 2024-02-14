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

jQuery('.tabs-slider').slick({
  infinite: true,
  centerMode: true,
  variableWidth:true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button type="button" class="slick-prev"> < </button>',
  nextArrow:'<button type="button" class="slick-next"> > </button>',
});


window.onscroll = function () {
  var header = document.querySelector("header");
  if (window.pageYOffset > 30) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

jQuery('.portfolio-slider').slick({
  infinite: true,
  centerMode: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<button type="button" class="slick-prev"> < </button>',
  nextArrow:'<button type="button" class="slick-next"> > </button>',
});

