// Collapsible
const collapsible = document.querySelectorAll(".collapsible");
M.Collapsible.init(collapsible, {});
$("[data-click]").on("click", function (e) {
    $($(this).attr("href")).trigger("click");
});

// Modal
const modal = document.querySelector(".modal");
M.Modal.init(modal, {});

$(document).ready(function () {

    // Parallax
    $('.parallax').parallax();

    // Slider
    $('.slider').slider({
        indicators: false,
        height: 675,
        // transition: 500,
        // interval: 10000,
    });

    // ScrollSpy
    $('.scrollspy').scrollSpy({ scrollOffset: 70, });

    // SideNav
    $('.sidenav').sidenav({ onOpenStart: true, });

    // Carousel

    // 1. Oximeter Carousel
    // changes slide number when the button is clicked
    document.getElementById('carousel_prev_oximeter').onclick = function () {
        $('.oximeter').carousel('prev');
    };
    document.getElementById('carousel_next_oximeter').onclick = function () {
        $('.oximeter').carousel('next');
    };

    $('.oximeter').carousel({
        indicators: true,
        onCycleTo: function (data) {
            if (data.id == "#one_t") {
                $("div.one_t").show();
                $("div.two_t").hide();
                $("div.three_t").hide();
                $("div.four_t").hide();
            } else if (data.id == "#two_t") {
                $("div.one_t").hide();
                $("div.two_t").show();
                $("div.three_t").hide();
                $("div.four_t").hide();
            } else if (data.id == "#three_t") {
                $("div.one_t").hide();
                $("div.two_t").hide();
                $("div.three_t").show();
                $("div.four_t").hide();
            } else {
                $("div.one_t").hide();
                $("div.two_t").hide();
                $("div.three_t").hide();
                $("div.four_t").show();
            }
        },
        noWrap: true,
        fullWidth: true,
        numVisible: 1,
    });

    // 2. Alerts Carousel
    $('.alert').carousel({
        noWrap: true,
        fullWidth: true,
        numVisible: 1,
    })
});