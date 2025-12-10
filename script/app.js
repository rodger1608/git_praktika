$(function () {
    console.log('test');
});

$(function(){
    const $burger = $('.header__burger');
    const $nav = $('.nav');
    const $overlay = $('.overlay');

    function toggleMenu() {
        $burger.toggleClass('active');
        $nav.toggleClass('active');
        $overlay.toggleClass('active');
        $('body').toggleClass('lock');

        const expanded = $burger.hasClass('active');
        $burger.attr('aria-expanded', expanded);
        $nav.attr('aria-hidden', !expanded);
        $overlay.attr('aria-hidden', !expanded);
    }

    $burger.on('click keypress', function() {
            toggleMenu();
    });

    $('.nav__link').on('click', function() {
            if ($nav.hasClass('active')) toggleMenu();
    });

    $overlay.on('click', toggleMenu);
});

$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});