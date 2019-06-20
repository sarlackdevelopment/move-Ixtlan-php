import { get_pagination_code } from './utils/common.js'

const deleteComment = async () => {

    let current_url = 'src/DB/comment_CRUD/comment_delete.php'; 
    let current_inf = { 'pagination_code' : get_pagination_code() }
    let headers     = { 'Content-Type': 'application/json' }

    await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })

    $('#modalDeleteComment').modal('hide')
    
}

export default deleteComment