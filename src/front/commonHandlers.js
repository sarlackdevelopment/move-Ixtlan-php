$(() => {

    MyResize();

    if (document.location.href.search('/comments/')) {
        toggleNews(true);
    }     

});

$(window).on('load', () => {

    let $preloader = $('#p_prldr');
    let $svg_anm   = $preloader.find('.svg_anm');

    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow', () => $preloader.removeClass("d-flex bd-highlight"));
    
});