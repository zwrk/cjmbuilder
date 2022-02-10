$(function () {

    $('input[type="tel"]').mask('+7 (999) 999-9999');

    var cardsSlider = new Swiper('.cards-slider', {
        slidesPerView: 1,
        spaceBetween: 8,
        speed: 600,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            992: {
                spaceBetween: 32,
                slidesPerView: 'auto',
            },
            1200: {
                spaceBetween: 32,
                slidesPerView: 'auto',
            },
        }
    });
    
    $('.btn-link').on('click', function () {
        $(this).toggleClass('active');
    });

});
