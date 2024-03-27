$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass("header-bg");
        }
        else {
            $('.header').removeClass("header-bg");
        }
    });
    
});
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.header').toggleClass('header-bg2');
    });
});