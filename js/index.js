$(document).ready(function () {
    initCarousel();
    runNumbersAnimation();
    effectAware();
    animateLabel();
    scrollAnchor();
    animateLabelButton();

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
    $(".Contacts__row-button")
        .on("mouseenter", function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({top: relY, left: relX})
        })
        .on("mouseout", function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({top: relY, left: relX})
        });
    $("[href=#]").click(function () {
        return false
    });
}

function animateLabel() {
    const inputs = document.getElementsByClassName("Contacts__row-input");

    for (let input of inputs) {
        input.addEventListener("blur", function() {
            const classMethod = input.value ? "add" : "remove";
            input.classList[classMethod]("active");
        });
    }
}

function animateLabelButton() {
    const textareas = document.getElementsByClassName("Contacts__row-message");

    for (let textarea of textareas) {
        textarea.addEventListener("blur", function() {
            const classMethod = textarea.value ? "add" : "remove";
            textarea.classList[classMethod]("active");
        });
    }
}

function scrollAnchor() {
    const anchors = document.querySelectorAll("button[data-href]");

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute("data-href").substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
}