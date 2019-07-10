require('babel-polyfill')

import { newsAreaIsHidden } from './utils/common.js'

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

            await $newsArea.fadeOut("slow")
            await $newsAreaBottom.fadeOut("slow")
            await $mainNews.fadeOut("slow")

            $mainArea.attr("isPushed", "1")

        } else {

            await $newsArea.fadeOut("slow")
            await $newsAreaBottom.fadeIn("slow")
            await $mainNews.fadeIn("slow")

            $mainArea.attr("isPushed", "0")
        }
    
    } else {

        if (!newsAreaIsHidden()) {

            await $newsArea.fadeOut("slow")
            await $newsAreaBottom.fadeOut("slow")
            await $mainNews.fadeOut("slow")

            $mainArea.attr("isPushed", "1")
        } else {

            await $newsArea.fadeIn("slow")
            await $newsAreaBottom.fadeOut("slow")
            await $mainNews.fadeOut("slow")

            $mainArea.attr("isPushed", "0")
        }
    
    }

}