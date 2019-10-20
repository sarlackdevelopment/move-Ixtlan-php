import { get_pagination_code } from './common.js'

const deleteSlide = async () => {

    let field_index     = event.target.getAttribute('field_index')
    let pagination_code = get_pagination_code()

    let headers     = { 'Content-Type': 'application/json' }
    let current_inf = { pagination_code, field_index }
    let url         = 'src/DB/comment_CRUD/slide_CRUD/slide_delete.php'

    try {

        await fetch(url, { 
            method: 'POST', 
            body: JSON.stringify(current_inf), 
            headers: headers 
        })

        await (async () => {
            $('#modalDeleteOneSlide').modal('hide')
            location.reload()
        })() 

    } catch {
        throw new Error('Не удалось получить данные от сервера')
    }
}

const commonHadlersConfirmations = () => {

    $('#delete_slide').click((event) => deleteSlide(event))

    $('#modalDeleteOneSlide').on('shown.bs.modal', 
        event => $('#delete_slide').attr('field_index', event.relatedTarget.getAttribute('field_index')))

}

export default commonHadlersConfirmations