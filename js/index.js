$(document).ready(function () {
    initCarousel();
    runNumbersAnimation();
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