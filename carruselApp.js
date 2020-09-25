window.addEventListener('load', function () {
    new Glider(document.querySelector('.carrusel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 3,
        draggable: true,
        dots: '.carrusel__indicadores',
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        }
    });
});