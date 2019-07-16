const deleteNews = async () => {

    let news_index = event.target.getAttribute('news_index')

    let headers     = { 'Content-Type': 'application/json' }
    let current_inf = { news_index }
    let url         = '/Ixtlan-php/src/DB/news_CRUD/news_delete.php'

    try {

        await fetch(url, { 
            method: 'POST', 
            body: JSON.stringify(current_inf), 
            headers: headers 
        })

        await (async () => {
            $('#modalDelete').modal('hide')
            location.reload()
        })() 

    } catch {
        throw new Error('Не удалось получить данные от сервера')
    }
}

const deleteConfirmations = () => {

    $('#delete_news').click((event) => deleteNews(event))

    $('#modalDelete').on('shown.bs.modal', 
        event => $('#delete_news').attr('news_index', event.relatedTarget.getAttribute('news_index')))

}

export default deleteConfirmations