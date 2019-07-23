const deleteImg = (modalWindow, button, id_field_name, url) => {

    modalWindow.on('shown.bs.modal', 
        event => button.attr(id_field_name, 
            event.relatedTarget.getAttribute(id_field_name)))

    button.click(event => mainHandler(event, url, id_field_name, modalWindow)) 

}

const mainHandler = async (prev_event, url, id_field_name, modalWindow) => {
    let checks = await getCheckImgs(prev_event.target.getAttribute(id_field_name), id_field_name)
    await fetchDeleteImgs(checks, url)
    await (async () => modalWindow.modal('hide'))()
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

const fetchDeleteImgs = async (checks, url) => {
    
    let current_inf = { checks }
    let headers     = { 'Content-Type': 'application/json' }

    fetch(url, { method: 'POST', body: JSON.stringify(current_inf), headers: headers })

}

export default deleteImg