$(document).ready(() => {
    const url = window.location.pathname;
    let item = url.split('/');

    $('.nav-item')
        .find('a')
        .each(function () {
            if ($(this).attr('href') === url.split('/')[item.length - 1]) {
                $(".navbar-nav").find(".active").removeClass("active");
                $(this).parent().addClass("active");
            }
        });
});
