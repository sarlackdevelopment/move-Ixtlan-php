
let currentButton = $('#delete_img')

const deleteImg = () => {

    $('#modalDeleteImg').on('shown.bs.modal', 
        event => currentButton.attr('exhibition_id', 
            event.relatedTarget.getAttribute('exhibition_id')))

    currentButton.click(event => mainHandler(event)) 

}

const mainHandler = async () => {
    await fetchDeleteImgs(await getCheckImgs(event.target.getAttribute('exhibition_id')))
    await (async () => $('#modalDeleteImg').modal('hide'))()
}

const getCheckImgs = async (exhibition_id) => {
    
    let result = [];

    $(`input[exhibition_id = ${exhibition_id}]`).each((index, item) => {
        let currentItemJQ = $(item)
        if (currentItemJQ.prop("checked"))
            result.push(currentItemJQ.val())
    })

    return result;

}

const fetchDeleteImgs = async (checks) => {
    
    let current_url = '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php';
    let current_inf = { checks }
    let headers     = { 'Content-Type': 'application/json' }

    fetch(current_url, { method: 'POST', body: JSON.stringify(current_inf), headers: headers })

}

export default deleteImg