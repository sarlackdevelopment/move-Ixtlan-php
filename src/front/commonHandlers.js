import MyResize from './adaptiveSize'
import { toggleNewsInit } from './toggleNews'
import commonHadlersConfirmations from './utils/confirmations_delete'
import initAddLanguage from './local/add_language'
import initDeleteLanguage from './local/delete_language'
import { toggleAddLanguage } from './local/choiceLang'

const ready_JQuery_handler = () => {

    MyResize()

    toggleNewsInit()

    toggleAddLanguage()

    initAddLanguage()

    initDeleteLanguage()
    
    commonHadlersConfirmations()

    if (document.location.href.search('/kitty') != -1) {
        $('[data-toggle="popover"]').popover({ animation: true, trigger: 'focus' })
    }

    if (document.location.href.search('/index') != -1) {    
        $('#banner_kitty').modal('show')
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