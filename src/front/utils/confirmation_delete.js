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

const deleteConfirmations = (modalWindow, targetButton, url, id_field_name) => {

    targetButton.click(() => deleteById(modalWindow, url, id_field_name))

    modalWindow.on('shown.bs.modal',
        event => targetButton.attr(id_field_name, event.relatedTarget.getAttribute(id_field_name)))

}

export default deleteConfirmations