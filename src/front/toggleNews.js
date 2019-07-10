require('babel-polyfill')

import { newsAreaIsHidden } from './utils/common.js'

//let $main       = $('main')
//let $mainArea   = $("#mainArea")

/* const toggleLeftBottom = async () => {

    $mainArea.removeClass('col-8')
    $mainArea.addClass('col-12')
    $mainArea.attr("isPushed", "0")

}

const toggleRight = async () => {

    $mainArea.removeClass('col-12')
    $mainArea.addClass('col-8')
    $mainArea.attr("isPushed", "1")

}

const toggleTop = async () => {

    $mainArea.removeClass('col-8')
    $mainArea.addClass('col-12')
    $mainArea.attr("isPushed", "1")

}

const newsesStateManager = async ($direction) => {

    switch($direction) {

        case 'left':

            toggleLeftBottom()

            break
      
        case 'right':

            toggleRight()

            break

        case 'bottom':

            toggleLeftBottom()

            break
      
        case 'top':

            toggleTop()

            break

    }

}

const toggleNews = async ($newsAreaIsHidden, $firstPageLoad = false) => {

    let $mainNews         = $("#mainNews")
    let $newsAreaBottom   = $("#newsAreaBottom")
    let $newsArea         = $("#newsArea")
    let $delay            = 350

    if ($newsAreaIsHidden) {

        if (window.matchMedia('(max-width: 768px)').matches) {

            await $newsAreaBottom.animate({bottom: 'toggle', opacity: "toggle"}, $delay)
            await newsesStateManager('bottom')
            await (async () => $mainNews.hide())()

        } else {

            await $newsArea.animate({left: 'toggle', opacity: "toggle"}, $delay)
            await newsesStateManager('left')

        }

    } else {

        if (window.matchMedia('(max-width: 768px)').matches) {

            await $newsAreaBottom.animate({top: 'toggle', opacity: "toggle"}, $delay)
            await newsesStateManager('top')
            await (async () => $mainNews.show())()

        } else {

            if (!$firstPageLoad) {
                await $newsArea.animate({right: 'toggle', opacity: "toggle"}, $delay)
                await newsesStateManager('right')
            }

        }

    }

} */

let $newsArea       = $("#newsArea")
let $newsAreaBottom = $("#newsAreaBottom")
let $mainNews       = $("#mainNews")
let $mainArea       = $("#mainArea")

export const toggleNewsInit = () => {

    if (document.location.href.search('/comments') == -1) {
        if (window.matchMedia('(max-width: 768px)').matches) {

            $newsArea.hide()
            $newsAreaBottom.show()
            $mainNews.show()
    
        } else {
    
            $newsArea.show()
            $newsAreaBottom.hide()
            $mainNews.hide()
    
        }
        $mainArea.attr("isPushed", "0")
    } else {
        $newsArea.hide()
        $newsAreaBottom.hide()
        $mainNews.hide()
        $mainArea.attr("isPushed", "1")
    }

}

export const toggleNews = async () => {

    if (window.matchMedia('(max-width: 768px)').matches) {

        if (!newsAreaIsHidden()) {
            //$newsArea.hide()
            //$newsAreaBottom.hide()
            //$mainNews.hide()
            //$newsArea.fadeOut("slow", () => $newsAreaBottom.fadeOut("slow", () => $mainNews.fadeOut("slow")));

            await $newsArea.fadeOut("slow")
            await $newsAreaBottom.fadeOut("slow")
            await $mainNews.fadeOut("slow")

            $mainArea.attr("isPushed", "1")
        } else {
            //$newsArea.hide()
            //$newsAreaBottom.show()
            //$mainNews.show()
            //$newsArea.fadeOut("slow", () => $newsAreaBottom.fadeIn("slow", () => $mainNews.fadeIn("slow")));

            await $newsArea.fadeOut("slow")
            await $newsAreaBottom.fadeIn("slow")
            await $mainNews.fadeIn("slow")

            $mainArea.attr("isPushed", "0")
        }
    
    } else {

        if (!newsAreaIsHidden()) {
            //$newsArea.hide()
            //$newsAreaBottom.hide()
            //$mainNews.hide()
            //$newsArea.fadeOut("slow", () => $newsAreaBottom.fadeOut("slow", () => $mainNews.fadeOut("slow")));

            await $newsArea.fadeOut("slow")
            await $newsAreaBottom.fadeOut("slow")
            await $mainNews.fadeOut("slow")

            $mainArea.attr("isPushed", "1")
        } else {
            //$newsArea.show()
            //$newsAreaBottom.hide()
            //$mainNews.hide()
            //$newsArea.fadeIn("slow", () => $newsAreaBottom.fadeOut("slow", () => $mainNews.fadeOut("slow")));

            await $newsArea.fadeIn("slow")
            await $newsAreaBottom.fadeOut("slow")
            await $mainNews.fadeOut("slow")

            $mainArea.attr("isPushed", "0")
        }
    
    }

}

//export default toggleNews