import MyResize from './adaptiveSize'
import { toggleNewsInit, initNewsToggle } from './toggleNews'
import commonHadlersConfirmations from './utils/confirmations_delete'
import initAddLanguage from './local/add_language'

const ready_JQuery_handler = () => {

    MyResize()

    initNewsToggle()

    toggleNewsInit()

    initAddLanguage()
    
    commonHadlersConfirmations()

    if (document.location.href.search('/kitty') != -1) {
        $('[data-toggle="popover"]').popover({ animation: true, trigger: 'focus' })
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