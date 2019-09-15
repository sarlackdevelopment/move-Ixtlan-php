export const dropzoneHandlersLangThumbnail = async () => {

    Dropzone.autoDiscover = false

    const apply_init = async items => items.forEach(current => initOneDropzone(current))
        
    await apply_init(await fetchImg())

}

export const initOneDropzone = async (current, lang_id) => {

    Dropzone.autoDiscover = false

    let idDropzone = `#my-dropzone-flag`

    if ($(idDropzone).length !== 0) {

        new Dropzone(idDropzone, {

            acceptedFiles: "image/*",
            maxFiles: 1,

            init: function () {
                this.on("sending", (file, xhr, formData) => {
                    formData.append("lang_id", lang_id)
                })
                this.on("addedfile", (file) => {
                    if (!(file.initThumbnail) && (this.files[1] != null)) {
                        this.removeFile(this.files[0])
                    }
                })
                this.on("success", () => {
                    $(`#icon_lang_${lang_id}`).empty().append(`<img src="images/lang/${this.files[0].name}" style="width: 1.5em; heigth: 1.5em;">`)
                    $('#modalEditIconLanguage').modal('hide')
                })
                /* this.on("success", () => location.reload())
                if ((current != null) && (current.url != null)) {
                    execThumbnail(this, current)
                } */
            }

        })

    }

}

const fetchImg = async () => {
    
    let current_url = 'src/local/img_get_lang.php';
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST',  
        headers: headers 
    })).json()

    return images

}