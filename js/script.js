$('.btn__menu, .nav__link').on('click', function () {
  if ($(window).innerWidth() <= 1000) {
    $('.nav, .btn__menu, body').toggleClass('is__active');
  }
})
$('.competitions-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  mobileFirst: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: "unslick",
    }
  ]
});