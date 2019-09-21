const dropzoneHandlersLangThumbnail = async (lang_id) => {

    Dropzone.autoDiscover = false
        
    await initOneDropzone(lang_id, await fetchImg(lang_id))

}

const initOneDropzone = async (lang_id, current) => {

    const idDropzone = `#my-dropzone-flag`

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
                if ((current != null) && (current.url != null)) {
                    execThumbnail(this, current)
                }
            }

        })

    }

}

const fetchImg = async (lang_id) => {

    const imageThumbnail = await (await fetch('src/local/img_get_lang.php', { 
        method: 'POST',
        body: JSON.stringify({ lang_id }), 
        headers: { 'Content-Type': 'application/json' } 
    })).json()

    return imageThumbnail[0]

}

// DRY - перенести в утилиты
const execThumbnail = (context, current_image) => {

    let currentFile = {
        name: current_image.name,
        size: current_image.size,
        accepted: true,
        kind: 'image',
        upload: {
            filename: current_image.name,
        },
        dataURL: current_image.url,
    };
                
    context.files.push(currentFile);
    context.emit("addedfile", currentFile);
    context.createThumbnailFromUrl(
        currentFile,
        context.options.thumbnailWidth,
        context.options.thumbnailHeight,
        context.options.thumbnailMethod,
        context,
        thumbnail => {
            context.emit('thumbnail', currentFile, thumbnail);
            context.emit("complete", currentFile);
        }
    )

}

export default dropzoneHandlersLangThumbnail