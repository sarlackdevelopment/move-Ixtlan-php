import { count_table_records } from './utils/common_server.js'
import { get_pagination_code } from './utils/common.js'

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