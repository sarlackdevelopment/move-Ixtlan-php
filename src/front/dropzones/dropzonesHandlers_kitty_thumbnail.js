const dropzoneHandlersCommonThumbnail = async () => {

    Dropzone.autoDiscover = false

    const apply_init = async items => items.forEach(current => initOneDropzone(current))
        
    await apply_init(await fetchImg())

}

const initOneDropzone = async (current) => {

    let idDropzone = `#my-dropzone-${current.id}`

    if ($(idDropzone).length !== 0) {

        new Dropzone(idDropzone, {

            acceptedFiles: "image/*",
            maxFiles: 1,

            init: function () {
                this.on("sending", (file, xhr, formData) => {
                    formData.append("kitty_id", current.id);
                    formData.append("brood_id", current.brood_id);
                })
                this.on("addedfile", (file) => {
                    if (!(file.initThumbnail) && (this.files[1] != null)) {
                        this.removeFile(this.files[0]);
                    }
                })
                //this.on("success", () => location.reload()) На боевом сервере в связи с задержкой - сбоит
                if ((current != null) && (current.url != null)) {
                    execThumbnail(this, current)
                }
            }

        })

    }

}

const fetchImg = async () => {
    
    let current_url = 'src/DB/kitty_CRUD/img_CRUD/img_get_main.php';
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST',  
        headers: headers 
    })).json()

    return images

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

export default dropzoneHandlersCommonThumbnail