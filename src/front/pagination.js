import { count_table_records } from './utils/common_server.js'
import { get_pagination_code } from './utils/common.js'

/* for (let field_index = 1; field_index <= 3; field_index++) {

    let caption_id = `${pagination_code}_${field_index}`

    $(`#addCaption${caption_id}`).click(() => {

        let current_inf = { 
            'pagination_code' : pagination_code, 
            'field_index'     : field_index,
            'caption_text'    : $(`#caption_text${caption_id}`).val()
        }

        $.post('src/DB/comment_CRUD/caption_CRUD/caption_add.php', current_inf)

    })

} */

/* let url_for_common = '/Ixtlan-php/src/DB/utilsDB/common.php'
let data           = { 'goal': 'countTable', 'tableName': 'comments' }
let headers        = { 'Content-Type': 'application/json' }

const count = async () => {

    let result = await (await fetch(url_for_common, { 
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: headers 
    })).json()

    return result.countTable

} 

(async() => {

    //let countItems = await count();
    let countItems = await countTableRecords()

    $('#alt-style-pagination').pagination({
        items: countItems,
        displayedPages: 1,
        currentPage: pagination_code,
        prevText: '<span>&laquo;</span>',
        nextText: '<span>&raquo;</span>',
        hrefTextPrefix: '?p=',
        ellipsePageSet: false
    })

})()  */

const init_pagination = async () => {

    let countItems = await count_table_records('comments')
    let pagination_code = get_pagination_code()

    $('#alt-style-pagination').pagination({
        items: countItems,
        displayedPages: 1,
        currentPage: pagination_code,
        prevText: '<span>&laquo;</span>',
        nextText: '<span>&raquo;</span>',
        hrefTextPrefix: '?p=',
        ellipsePageSet: false
    })

} 

export default init_pagination