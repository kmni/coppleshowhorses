$(document).ready(function() {

if( $(".js-carousel").length > 0 ){
    $('.js-carousel').jcarousel({
        wrap: 'circular'
    });
    $('.js-carousel').jcarouselAutoscroll({
        interval: 5000
    });
    $('.js-carousel-pager')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('is-active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('is-active');
    })
    .jcarouselPagination({
        item: function(page) {
            return '<a class="slider-pager__item" href="#' + page + '">' + page + '</a>';
        }
    });
}

});