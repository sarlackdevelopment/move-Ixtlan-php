let mainArea = $("#mainArea")

const prepare_toast = async(toastWindow) => {

    if($('#toastWindow').length !== 0) {
        $('#toastWindow').remove()   
    }

    mainArea.append(toastWindow)
    $('#toastWindow').toast('show') 

}

const start_toast = async (current_inf, headers) => {

    let url_get_toast = '/Ixtlan-php/src/DB/utilsDB/toast.php'

    let response = await (await fetch(url_get_toast, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    await prepare_toast(response.toastWindow)

}

export const execute_toast = async (event)  => {

    let url_for_add   = '/Ixtlan-php/src/DB/comment_CRUD/text_CRUD/text_add.php'

    let pagination_code = event.target.getAttribute('pagination_code')
    let field_index     = event.target.getAttribute('field_index')

    let button_id    = pagination_code + '_' + field_index
    let current_text = $('#addTextArea' + button_id).val()

    let current_inf = { pagination_code, field_index, current_text }

    let headers = { 'Content-Type': 'application/json' }

    try {
        if (current_text.trim() == '') {
            await start_toast(current_inf, headers)   
        } else {

            await fetch(url_for_add, { 
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

export const execute_toast_test = async (event)  => {

    let url_for_add   = 'src/DB/comment_CRUD/caption_CRUD/caption_add.php'

    let pagination_code = event.target.getAttribute('pagination_code')
    let field_index     = event.target.getAttribute('field_index')

    let button_id    = pagination_code + '_' + field_index
    let current_text = $('#addCaptionInput' + button_id).val()

    let current_inf = { pagination_code, field_index, current_text }

    let headers = { 'Content-Type': 'application/json' }

    try {
        if (current_text.trim() == '') {
            await start_toast(current_inf, headers)   
        } else {

            await fetch(url_for_add, { 
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

// export default execute_toast