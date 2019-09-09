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

    let container       = $('#switchContainer')
    let news_panel_show = $('#caption_news_panel_show')
    let news_panel_hide = $('#caption_news_panel_hide')
    
    container.click(async () => {

        let param;

        if (container.hasClass("switchOn")) {
            container.removeClass("switchOn").addClass('switchOff')
            news_panel_show.hide()
            news_panel_hide.show()
            param = { name: 'showNews', value: 'on' }
        } else {
            container.removeClass("switchOff").addClass('switchOn')
            news_panel_show.show()
            news_panel_hide.hide()
            param = { name: 'showNews', value: 'off' }
        }

        await fetch('src/users_settings.php', { 
            method: 'POST', 
            body: JSON.stringify(param), 
            headers: { 'Content-Type': 'application/json' } 
        })

    })

    if (document.location.href.search('/comments') != -1) {
        hideNews()
        container.removeClass("switchOff").addClass('switchOn')
        news_panel_show.show()
        news_panel_hide.hide()
        $mainArea.attr("isPushed", "1")            
    } else {
        if (window.matchMedia('(max-width: 768px)').matches) {
            showNewsOnSM()  
        } else {
            showNewsOnLG()   
        }
        news_panel_show.hide()
        news_panel_hide.show()
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