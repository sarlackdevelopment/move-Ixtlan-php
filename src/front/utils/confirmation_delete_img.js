const deleteImg = (modalWindow, button, id_field_name, url, table_name) => {

    modalWindow.on('shown.bs.modal', 
        event => button.attr(id_field_name, 
            event.relatedTarget.getAttribute(id_field_name)))

    const mainHandler = async event => {
        let id     = event.target.getAttribute(id_field_name)
        let checks = await getCheckImgs(id, id_field_name)

        await fetchDeleteImgs(checks, url, table_name)
        await (async () => modalWindow.modal('hide'))()
    }

    button.click(event => mainHandler(event)) 

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

const fetchDeleteImgs = async (checks, url, table_name) => {
    
    let current_inf = { checks, table_name }
    let headers     = { 'Content-Type': 'application/json' }

    fetch(url, { method: 'POST', body: JSON.stringify(current_inf), headers: headers })

}

export default deleteImg