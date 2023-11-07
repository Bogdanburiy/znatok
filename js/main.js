// Scroll to section
// Scroll to section
$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    var $toggle = $('#hamb-toggle');
    var $menu = $('#overlay');

    $('body').removeClass('hamb-opened');
    $menu.attr('aria-hidden', 'true');
    $toggle.attr('aria-expanded', 'faremove');
    $toggle.removeClass('active');
    $('#overlay').removeClass('open');

    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 20
    }, 500, 'linear');
});

// Open hamb menu
$('#hamb-toggle').click(function() {
    var $toggle = $(this);
    var $menu = $('#' + $(this).attr('aria-controls'));

    if ($menu.attr('aria-hidden') == 'true') {
        $('body').addClass('hamb-opened');
        $('#overlay').addClass('open');
        $menu.attr('aria-hidden', 'false');
        $toggle.toggleClass('active');
        $toggle.attr('aria-expanded', 'true');
    } else if ($menu.attr('aria-hidden') == 'false') {
        $('body').removeClass('hamb-opened');
        $menu.attr('aria-hidden', 'true');
        $toggle.attr('aria-expanded', 'faremove');
        $toggle.removeClass('active');
        $('#overlay').removeClass('open');
    }
});

// Clients
$('.clients-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $('.clients-nav__prev'),
    nextArrow: $('.clients-nav__next'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        },
    ]
});