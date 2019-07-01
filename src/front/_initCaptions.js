/*import { get_pagination_code } from './utils/common.js'

const initCaptions = () => {

    let pagination_code = get_pagination_code()

    for (let field_index = 1; field_index <= 3; field_index++) {

        let caption_id = `${pagination_code}_${field_index}`

        $(`#addCaption${caption_id}`).click(() => {

            let current_url = 'src/DB/comment_CRUD/caption_CRUD/caption_add.php';

            let current_inf = { 
                'pagination_code' : pagination_code, 
                'field_index'     : field_index,
                'caption_text'    : $(`#caption_text${caption_id}`).val()
            }

            let headers = { 'Content-Type': 'application/json' }

            fetch(current_url, {
                method: 'POST', 
                body: JSON.stringify(current_inf), 
                headers: headers
            })

        })

    }

} 

export default initCaptions */