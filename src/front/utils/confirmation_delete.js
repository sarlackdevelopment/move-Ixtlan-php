const deleteById = async (modalWindow, url, id_field_name) => {

    let id = event.target.getAttribute(id_field_name)

    try {

        await fetch(url, { 
            method: 'POST',  
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' }
        })

        await (async () => modalWindow.modal('hide'))()

    } catch {
        throw new Error('Не удалось получить данные от сервера')
    }
}

const getCheckImgs = async (id, id_field_name) => {
    
    let result = [];

    $(`input[${id_field_name} = ${id}]`).each((index, item) => {
        let currentItemJQ = $(item)
        if (currentItemJQ.prop("checked"))
            result.push(currentItemJQ.val())
    })

    return result;

}

export const deleteConfirmations = (modalWindow, targetButton, url, id_field_name) => {

    targetButton.click(() => deleteById(modalWindow, url, id_field_name))

    modalWindow.on('shown.bs.modal',
        event => targetButton.attr(id_field_name, event.relatedTarget.getAttribute(id_field_name)))

}

export const deleteConfirmationsStates = () => {

    let modalWindow   = $('#modalDeleteState')
    let button        = $('#delete_state')
    let id_field_name = 'state_id'
    let url           = 'src/DB/kitty_CRUD/state_CRUD/state_delete_group.php'

    const fetchDeleteImgs = async (checks) => {
    
        let current_inf = { checks }
        let headers     = { 'Content-Type': 'application/json' }
                    
        fetch(url, { method: 'POST', body: JSON.stringify(current_inf), headers: headers })
                    
    }

    const mainHandler = async () => {
        let checks = await getCheckImgs('true', id_field_name)

        await fetchDeleteImgs(checks)
        await (async () => modalWindow.modal('hide'))()
    }

    button.click(event => mainHandler(event))

}

export const deleteConfirmationsPeriod = () => {

    let modalWindow   = $('#modalDeletePeriod')
    let button        = $('#delete_period')
    let id_field_name = 'brood_id'
    let url           = 'src/DB/kitty_CRUD/period_CRUD/period_delete_group.php'

    // DRY - проброс с кнопки запуска модалки на кнопку удаления вынести в утилиты
    modalWindow.on('shown.bs.modal', 
        event => button.attr(id_field_name, 
            event.relatedTarget.getAttribute(id_field_name)))

    const fetchDeleteImgs = async (checks, id) => {
    
        let current_inf = { checks, id }
        let headers     = { 'Content-Type': 'application/json' }
            
        fetch(url, { method: 'POST', body: JSON.stringify(current_inf), headers: headers })
            
    }

    const mainHandler = async event => {
        let id     = event.target.getAttribute(id_field_name)
        let checks = await getCheckImgs(id, id_field_name)

        await fetchDeleteImgs(checks, id)
        await (async () => modalWindow.modal('hide'))()
    }

    button.click(event => mainHandler(event))

}