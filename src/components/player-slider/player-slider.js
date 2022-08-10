$(".player-slider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  draggable: true,
  swipeToSlide: true,
  slidesToShow: 9,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
