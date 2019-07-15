
const dropzoneHandlers = async () => {

    Dropzone.autoDiscover = false;

    let exhibitions = await fetchImg() 

    await (async () => exhibitions.forEach((current_exhibition) => initOneDropzone(current_exhibition.id)))()

}

const initOneDropzone = async (exhibition_id) => {

    let idDropzone = `#my-dropzone-${exhibition_id}`

    new Dropzone(idDropzone, {

        acceptedFiles: "image/*",

        init: function () {
            this.on("sending", (file, xhr, formData) => {
                formData.append("exhibition_id", exhibition_id)
            })
        }

    })

}

const fetchImg = async () => {
    
    let current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
    let current_inf = {}
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    return images

}

export default dropzoneHandlers