const deleteById = async (modalWindow, url, id_field_name) => {

    //let news_index = event.target.getAttribute('news_index')

    let id = event.target.getAttribute(id_field_name)

    //let headers     = { 'Content-Type': 'application/json' }
    //let current_inf = { id }
    //let url         = '/Ixtlan-php/src/DB/news_CRUD/news_delete.php'

    try {

        await fetch(url, { 
            method: 'POST', 
            //body: JSON.stringify(current_inf), 
            body: JSON.stringify({ id }),
            //headers: headers 
            headers: { 'Content-Type': 'application/json' }
        })

        /* await (async () => {
            $('#modalDelete').modal('hide')
            location.reload()
        })() */
        await (async () => {
            modalWindow.modal('hide')
            //location.reload()
        })()

    } catch {
        throw new Error('Не удалось получить данные от сервера')
    }
}

const deleteConfirmations = (modalWindow, targetButton, url, id_field_name) => {

    //$('#delete_news').click(() => deleteById(modalWindow, url, id_field_name))
    targetButton.click(() => deleteById(modalWindow, url, id_field_name))

    //$('#modalDelete').on('shown.bs.modal', 
        //event => $('#delete_news').attr('news_index', event.relatedTarget.getAttribute('news_index')))

    modalWindow.on('shown.bs.modal',
        event => targetButton.attr(id_field_name, event.relatedTarget.getAttribute(id_field_name)))

}

export default deleteConfirmations