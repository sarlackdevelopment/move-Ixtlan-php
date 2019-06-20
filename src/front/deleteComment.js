import { get_pagination_code } from './utils/common.js'

const deleteComment = () => {

    let current_url = 'src/DB/comment_CRUD/comment_delete.php'; 
    let current_inf = { 'pagination_code' : get_pagination_code() }

    $.post( current_url, current_inf, () => $('#modalDeleteComment').modal('hide'))
    
}

export default deleteComment