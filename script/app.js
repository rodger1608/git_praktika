$(function () {
    console.log('test');
});

$(function(){
    const $header__burger = $('.header__burger');
    const $nav = $('.nav');

    $header__burger.on('click', function() {
        $(this).toggleClass('active');
        $nav.toggleClass('active');
    });

    $('.nav__link').on('click', function() {
        if ($(window).width() <= 768) {
            $header__burger.removeClass('active');
            $nav.removeClass('active');
        }
    })
})

$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
});