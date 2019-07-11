require('babel-polyfill')

import { 
    newsAreaIsHidden, 
    hideNews, 
    showNewsOnSM, 
    showNewsOnLG,
    hideNewsAsync,
    showNewsOnSMAsync, 
    showNewsOnLGAsync 
} from './utils/common.js'


/* let $newsArea       = $("#newsArea")
let $newsAreaBottom = $("#newsAreaBottom")
let $mainNews       = $("#mainNews")
let $mainArea       = $("#mainArea")



export const hideNewsAsync = async () => {
    await $newsArea.fadeOut("slow")
    await $newsAreaBottom.fadeOut("slow")
    await $mainNews.fadeOut("slow")
}

export const showNewsOnSMAsync = async () => {
    await $newsArea.fadeOut("slow")
    await $newsAreaBottom.fadeIn("slow")
    await $mainNews.fadeIn("slow")
}

export const showNewsOnLGAsync = async () => {
    await $newsArea.fadeIn("slow")
    await $newsAreaBottom.fadeOut("slow")
    await $mainNews.fadeOut("slow")
} */
let $mainArea = $("#mainArea")

export const toggleNewsInit = () => {

    if (document.location.href.search('/comments') != -1) {

        //$newsArea.hide()
        //$newsAreaBottom.hide()
        //$mainNews.hide()
        hideNews()
        $mainArea.attr("isPushed", "1")
        
    } else {

        if (window.matchMedia('(max-width: 768px)').matches) {

            showNewsOnSM()
            //$newsArea.hide()
            //$newsAreaBottom.show()
            //$mainNews.show()
    
        } else {

            showNewsOnLG()
    
            //$newsArea.show()
            //$newsAreaBottom.hide()
            //$mainNews.hide()
    
        }
        $mainArea.attr("isPushed", "0")
        
    }

}

export const toggleNews = async () => {

    let newsIsHidden = newsAreaIsHidden()

    if (window.matchMedia('(max-width: 768px)').matches) {

        if (!newsIsHidden) {

            //await $newsArea.fadeOut("slow")
            //await $newsAreaBottom.fadeOut("slow")
            //await $mainNews.fadeOut("slow")
            await hideNewsAsync()
            $mainArea.attr("isPushed", "1")

        } else {

            //await $newsArea.fadeOut("slow")
            //await $newsAreaBottom.fadeIn("slow")
            //await $mainNews.fadeIn("slow")
            await showNewsOnSMAsync()
            $mainArea.attr("isPushed", "0")
        }
    
    } else {

        if (!newsIsHidden) {

            //await $newsArea.fadeOut("slow")
            //await $newsAreaBottom.fadeOut("slow")
            //await $mainNews.fadeOut("slow")

            await hideNewsAsync()
            $mainArea.attr("isPushed", "1")

        } else {

            //await $newsArea.fadeIn("slow")
            //await $newsAreaBottom.fadeOut("slow")
            //await $mainNews.fadeOut("slow")
            await showNewsOnLGAsync()
            $mainArea.attr("isPushed", "0")
        }
    
    }

}