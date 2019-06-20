import MyResize from './adaptiveSize'
import toggleNews from './toggleNews'

const ready_JQuery_handler = () => {

    MyResize()
   
    if (document.location.href.search('/comments/')) {
        toggleNews(true)
    }      

}

const load_Native_handler = () => {

    let preloader = $('#p_prldr')
    let svg_anm   = preloader.find('.svg_anm')

    svg_anm.fadeOut()
    preloader.delay(500).fadeOut('slow', () => preloader.removeClass("d-flex bd-highlight"))

}

const bindGlobalHandlers = () => {

   $(() => ready_JQuery_handler())

   $(window).on('resize', () => MyResize())

   $(window).on('load', () => load_Native_handler())

}

export default bindGlobalHandlers