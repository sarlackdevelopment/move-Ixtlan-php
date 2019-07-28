const dropzoneHandlers = async (tableName) => {

    Dropzone.autoDiscover = false

    const apply_init = async items => 
        items.forEach(current => 
            initOneDropzone(current.kitty_id, current.periods_id))
        
 
    await apply_init(await fetchImg(tableName))

}

const initOneDropzone = async (kitty_id, periods_id) => {

    let idDropzone = `#my-dropzone-i${kitty_id}-i${periods_id}`

    new Dropzone(idDropzone, {

        acceptedFiles: "image/*",

        init: function () {
            this.on("sending", (file, xhr, formData) => {
                formData.append("kitty_id", kitty_id);
                formData.append("period_id", periods_id);
            })
        }

    })

}

const fetchImg = async (tableName) => {
    
    let current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
    let current_inf = { tableName }
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    return images

}

export default dropzoneHandlers