$(document).ready(function(){
    $('.products-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
    });
  });