const deleteImg = (table_name) => {

    let modalWindow   = $('#modalDeleteImg')
    let button        = $('#delete_img')
    let id_field_name = 'group_id'
    let url           ='/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php'

    // DRY - проброс с кнопки запуска модалки на кнопку удаления вынести в утилиты
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

// DRY - соотносится с удалением периода
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