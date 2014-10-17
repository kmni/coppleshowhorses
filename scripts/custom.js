$(document).ready(function() {

// mobile menu
// ====================================

$(".mobile_header__handler").click(function(){
    $(".mobile_menu").toggle();
    return false;
});


// fancybox
// ====================================

$(".fancybox").fancybox({
    'transitionIn'  :   'elastic',
    'transitionOut' :   'elastic',
    'speedIn'       :   600,
    'speedOut'      :   200,
    'overlayShow'   :   false,
    'padding'       :   4
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
        'swf'           :   { 'wmode': 'transparent', 'allowfullscreen': 'true' },
        'padding'       :   4
    });
    return false;
});

 $(".fancybox-pedigree").fancybox({
    'href'   : '#pedigree',
    'titleShow'  : false,
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'padding'       :   4

});

// slider na titulni strance
// ====================================

if( $(".js-carousel").length > 0 ){
    $('.js-carousel').jcarousel({
        wrap: 'circular'
    });
    $('.js-carousel').jcarouselAutoscroll({
        interval: 4000
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

// submenu
// ====================================

$(".menu__item.has-submenu").hover(
    function(){
        //$(this).find(".submenu").addClass("is-visible");
        $(this).find(".submenu").fadeIn(200);
    },
    function(){
        //$(".submenu").removeClass("is-visible");
        $(".submenu").fadeOut(200);
    }
);


});
