$(document).ready(function () {
    $('#down').on('click', function () {
        var posicion = $('#menu2').offset().top;

        $('body, html').animate({
            scrollTop: posicion + "px"
        }, 2000);
    })
})
