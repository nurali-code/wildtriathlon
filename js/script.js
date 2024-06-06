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
          breakpoint: 1024,
          settings: "unslick",
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});