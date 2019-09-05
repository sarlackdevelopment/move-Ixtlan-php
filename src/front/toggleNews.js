import { 
    newsAreaIsHidden, 
    hideNews, 
    showNewsOnSM, 
    showNewsOnLG,
    hideNewsAsync,
    showNewsOnSMAsync, 
    showNewsOnLGAsync 
} from './utils/common.js'

let $mainArea = $("#mainArea")

export const toggleNewsInit = () => {

    let container = $('#switchContainer')
    
    container.click(() => {
        if (container.hasClass("switchOn")) {
            container.removeClass("switchOn").addClass('switchOff')
        } else {
            container.removeClass("switchOff").addClass('switchOn')
        }
    })

    if (document.location.href.search('/comments') != -1) {
        hideNews()
        $('#switchContainer').removeClass("switchOff").addClass('switchOn')
        $mainArea.attr("isPushed", "1")            
    } else {
        if (window.matchMedia('(max-width: 768px)').matches) {
            showNewsOnSM()  
        } else {
            showNewsOnLG()   
        }
        container.removeClass("switchOn").addClass('switchOff')
        $mainArea.attr("isPushed", "0")       
    }

}

export const toggleNews = async () => {

    let newsIsHidden = newsAreaIsHidden()

    if (window.matchMedia('(max-width: 768px)').matches) {

        if (!newsIsHidden) {
            await hideNewsAsync()
            $mainArea.attr("isPushed", "1")
        } else {
            await showNewsOnSMAsync()
            $mainArea.attr("isPushed", "0")
        }
    
    } else {

        if (!newsIsHidden) {
            await hideNewsAsync()
            $mainArea.attr("isPushed", "1")
        } else {
            await showNewsOnLGAsync()
            $mainArea.attr("isPushed", "0")
        }
    
    }

}