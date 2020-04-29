$(document).ready(function () {
    initCarousel();
    runNumbersAnimation();
    effectAware();

});


function initCarousel() {
    $(".slide-one").owlCarousel({
        items: 3,
        loop: true,
        margin: 80,
        nav: false,
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}

function runNumbersAnimation() {
    $(".Statistics__block-number").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function effectAware() {
    $('.contacts__form-button')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        });
    $('[href=#]').click(function () {
        return false
    });
}