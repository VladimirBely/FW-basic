$(document).ready(function () {
    $("#a-carousel").owlCarousel({
        items: 2,
        margin: 15,
        slideBy: 2,
        autoplay: true,
        loop: true,
        smartSpeed: 300,
        autoplayTimeout: 3000,
        responsiveRefreshRate: 60,
        responsive: {
            1024: {
                items: 3,
                slideBy: 3
            },
            1440: {
                items: 4,
                slideBy: 4
            }
        }
    });
});