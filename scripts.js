$(document).ready(function(){
  $('.post-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });
});
