$(function() {
    var $gallery = $('.gallery a').simpleLightbox();
});

$('.main-slider').owlCarousel({
    dots: true,
    loop: true,
    margin: 16,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})