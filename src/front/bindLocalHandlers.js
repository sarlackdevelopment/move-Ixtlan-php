import { toggleNews } from './toggleNews.js'
import execute_toast from './toast.js'

const bindLocalHandlers = () => {

    $('#switchContainer').click(() => toggleNews())
    $('#switchContainerLang').click(() => $('#collapse_add_lang').collapse('toggle'))

    let toastTargets = ['.addTextButton', '.addCaptionButton']
    toastTargets.forEach(current_class => {

        switch(current_class) {

            case '.addTextButton':

                $(current_class).click(event => execute_toast(
                        event, 
                        'src/DB/comment_CRUD/text_CRUD/text_add.php', 
                        '#addTextArea'))  

                break

            case '.addCaptionButton':
    
                $(current_class).click(event => execute_toast(
                    event, 
                    'src/DB/comment_CRUD/caption_CRUD/caption_add.php', 
                    '#addCaptionInput'))
    
                break
    
        }  

    })

}

export default bindLocalHandlers