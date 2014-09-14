$(document).ready(function() {

// fancybox
// ====================================

$(".fancybox").fancybox({
    'transitionIn'  :   'elastic',
    'transitionOut' :   'elastic',
    'speedIn'       :   600,
    'speedOut'      :   200,
    'overlayShow'   :   false,
    'padding'       :   0
});

$(".fancybox-video").click(function() {
    $.fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600,
        'speedOut'      :   200,
        'overlayShow'   :   false,
        'width'         :   640,
        'height'        :   385,
        'href'          :  this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        'type'          :   'swf',
        'swf'           :   { 'wmode': 'transparent', 'allowfullscreen': 'true' }
    });
    return false;
});

 $(".fancybox-pedigree").fancybox({
    'href'   : '#pedigree',
    'titleShow'  : false,
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic'
});

// slider na titulni strance
// ====================================

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

$(".horses__item").hover(
    function(){
        $(this).addClass("is-hover");
    },
    function(){
        $(".horses__item").removeClass("is-hover");
    }
);

$(".horses__item").click(function(){
    var thisLink = $(this).find(".horses__item__link").attr("href");
    window.location.href = thisLink;
});

});
