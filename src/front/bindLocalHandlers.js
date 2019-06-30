import toggleNews from './toggleNews.js'
import execute_toast from './toast.js'
//import { execute_toast, execute_toast_test } from './toast.js'
import { newsAreaIsHidden } from './utils/common.js'

const bindLocalHandlers = () => {

    $('.toggleNews').click(() => toggleNews(newsAreaIsHidden()))

    let taostTargets = ['.addTextButton', '.addCaptionButton']
    taostTargets.forEach(current_class => {

        switch(current_class) {

            case '.addTextButton':

                //let url          = '/Ixtlan-php/src/DB/comment_CRUD/text_CRUD/text_add.php'
                //let container_id = '#addTextArea' 
                $(current_class).click(event => execute_toast(
                        event, 
                        '/Ixtlan-php/src/DB/comment_CRUD/text_CRUD/text_add.php', 
                        '#addTextArea'))  

                break

            case '.addCaptionButton':
    
                //let url          = 'src/DB/comment_CRUD/caption_CRUD/caption_add.php' 
                //let container_id = '#addCaptionInput'  
                //$(current_class).click(event => execute_toast(event, url, container_id)) 
                $(current_class).click(event => execute_toast(
                    event, 
                    '/Ixtlan-php/src/DB/comment_CRUD/caption_CRUD/caption_add.php', 
                    '#addCaptionInput'))
    
                break
    
        }  

    })

    //$('.addTextButton, .addCaptionButton').click((event) => execute_toast(event))
    //$('.addTextButton, .addCaptionButton').click(() => console.log('got it'))


    //$('.addTextButton').click((event) => execute_toast(event))
    //$('.addCaptionButton').click((event) => execute_toast_test(event))
}

export default bindLocalHandlers