
const dropzoneHandlers = async () => {

    //let pagination_code = get_pagination_code()

    Dropzone.autoDiscover = false;

    let exhibitions = await fetchImg() 
    //await initAllDropzone(images, pagination_code)

    await (async () => exhibitions.forEach((current_exhibition) => initOneDropzone(current_exhibition.id)))()


}

const initOneDropzone = async (exhibition_id) => {

    /* let field_index = 0
    if (current_image != null) {
        field_index = current_image.id
    }
    let idDropzone  = `#my-dropzone-${pagination_code}${field_index}` */

    let idDropzone = `#my-dropzone-${exhibition_id}`

    console.log(idDropzone)

    new Dropzone(idDropzone, {

        acceptedFiles: "image/*",
        //maxFiles: 1,

        init: function () {
            this.on("sending", (file, xhr, formData) => {
                formData.append("exhibition_id", exhibition_id)
                //formData.append("field_index", field_index)
            })
            /* this.on("addedfile", (file) => {
                if (!(file.initThumbnail) && (this.files[1] != null)) {
                    this.removeFile(this.files[0]);
                }
            })
            this.on("success", () => location.reload())
            if (current_image != null) {
                execThumbnail(this, current_image)
            } */
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

//const initAllDropzone = async (exhibitions) => {

  //  exhibitions.forEach((current_exhibition) => initOneDropzone(current_exhibition.id))
    //initeOneDropzone(pagination_code)

//}