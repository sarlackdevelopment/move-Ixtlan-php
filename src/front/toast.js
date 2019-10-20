let mainArea = $("#mainArea")

const prepare_toast = async(toastWindow) => {

    if($('#toastWindow').length !== 0) {
        $('#toastWindow').remove()   
    }

    mainArea.append(toastWindow)
    $('#toastWindow').toast('show') 

}

const start_toast = async (current_inf, headers) => {

    let url_get_toast = 'src/DB/utilsDB/toast.php'

    let response = await (await fetch(url_get_toast, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    await prepare_toast(response.toastWindow)

}

const execute_toast = async (event, url, container_id)  => {

    let pagination_code = event.target.getAttribute('pagination_code')
    let field_index     = event.target.getAttribute('field_index')

    let button_id    = pagination_code + '_' + field_index
    let current_text = $(`${container_id}${button_id}`).val()

    let current_inf = { pagination_code, field_index, current_text }

    let headers = { 'Content-Type': 'application/json' }

    try {
        if (current_text.trim() == '') {
            await start_toast(current_inf, headers)   
        } else {
 
            await fetch(url, { 
                method: 'POST', 
                body: JSON.stringify(current_inf), 
                headers: headers 
            })

            await start_toast(current_inf, headers)

        }
    } catch {
        throw new Error('Не удалось получить данные от сервера')
    }

}

export default execute_toast