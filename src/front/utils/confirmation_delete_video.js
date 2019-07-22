const deleteVideo = () => {
    $('#delete_video').click(() => mainHandler()) 
}

const mainHandler = async () => {

    await fetchDeleteVideo(await getCheckVideo())   
    await (async () => $('#modalDeleteVideo').modal('hide'))()

}

const getCheckVideo = async () => {
    
    let result = [];

    $(`input[this_video = true]`).each((index, item) => {
        let currentItemJQ = $(item)
        if (currentItemJQ.prop("checked"))
            result.push(currentItemJQ.val())
    })

    return result

}

const fetchDeleteVideo = async (checks) => {
    
    let current_url = '/Ixtlan-php/src/DB/video_CRUD/video_delete_group.php'
    let current_inf = { checks }
    let headers     = { 'Content-Type': 'application/json' }

    fetch(current_url, { method: 'POST', body: JSON.stringify(current_inf), headers: headers })

}

export default deleteVideo