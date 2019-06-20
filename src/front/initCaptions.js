import { get_pagination_code } from './utils/common.js'

const initCaptions = () => {

    let pagination_code = get_pagination_code()

    for (let field_index = 1; field_index <= 3; field_index++) {

        let caption_id = `${pagination_code}_${field_index}`

        $(`#addCaption${caption_id}`).click(() => {

            let current_inf = { 
                'pagination_code' : pagination_code, 
                'field_index'     : field_index,
                'caption_text'    : $(`#caption_text${caption_id}`).val()
            }

            $.post('src/DB/comment_CRUD/caption_CRUD/caption_add.php', current_inf)

        })

    }

} 

export default initCaptions