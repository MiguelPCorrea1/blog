$(document).ready(function(){
  $('.post-wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 0,
    autoplay: false,
    dots: false,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });
});
