import { get_pagination_code } from './utils/common.js'

const dropzoneHandlers = async () => {

    let pagination_code = get_pagination_code()
    //let images = await fetchImg(pagination_code)
     //qwe(pagination_code)

    //console.log(images)
    //Dropzone.autoDiscover = false;

    //await (async () => $.post( 'src/DB/comment_CRUD/img_CRUD/get_comment_photo.php', { pagination_code }))()

    Dropzone.autoDiscover = false;

    let images = await fetchImg(pagination_code) 
    await initAllDropzone(images, pagination_code)

}

const initAllDropzone = async (images, pagination_code) => {

    images.forEach((current_image, index) => {

        let field_index = index + 1;
        let idDropzone = `#my-dropzone-${pagination_code}${field_index}` 

        new Dropzone(idDropzone, {

            acceptedFiles: "image/*",
            maxFiles: 1,

            init: function () {
                this.on("success", () => {
                    $(`#modalAddCaption${pagination_code}_${field_index}`).modal("show")
                })
                this.on("sending", (file, xhr, formData) => {
                    formData.append("pagination_code", pagination_code)
                    formData.append("field_index", field_index)
                })
                this.on("addedfile", (file) => {
                    if (!(file.initThumbnail) && (this.files[1] != null)) {
                        this.removeFile(this.files[0]);
                    }
                })
                execThumbnail(this, current_image)
            }

        })

    })


    //images.forEach((item, index) => initOneDropzone(pagination_code, index + 1))

    //initOneDropzone(pagination_code, 1)

    /* new Dropzone("form#my-dropzone-11", {

        acceptedFiles: "image/*",
        maxFiles: 1,

        init: function () {
            this.on("success", () => {
                $(`#modalAddCaption${pagination_code}_${field_index}`).modal("show")
            })
            this.on("sending", (file, xhr, formData) => {
                formData.append("pagination_code", pagination_code)
                formData.append("field_index", field_index)
            })
            this.on("addedfile", (file) => {
                if (!(file.initThumbnail) && (this.files[1] != null)) {
                    this.removeFile(this.files[0]);
                }
            })
            execThumbnail(this)
        }

    }) */

}

/* const initOneDropzone = async (pagination_code, field_index) => {

    let idDropzone = `#my-dropzone-${pagination_code}${field_index}` 
    new Dropzone(idDropzone, {

        acceptedFiles: "image/*",
        maxFiles: 1,

        init: function () {
            this.on("success", () => {
                $(`#modalAddCaption${pagination_code}_${field_index}`).modal("show")
            })
            this.on("sending", (file, xhr, formData) => {
                formData.append("pagination_code", pagination_code)
                formData.append("field_index", field_index)
            })
            this.on("addedfile", (file) => {
                if (!(file.initThumbnail) && (this.files[1] != null)) {
                    this.removeFile(this.files[0]);
                }
            })
            execThumbnail(this)
        }
    })

} */

/*const qwe =  (pagination_code) => {

     images.forEach((item, index) => {

        let field_index = index + 1

        Dropzone.options[`myDropzone${pagination_code}${field_index}`] = {
            acceptedFiles: "image/*",
            maxFiles: 1,
            init: function() {
                this.on("success", () => {
                    $(`#modalAddCaption${pagination_code}_${field_index}`).modal("show")
                })
                this.on("sending", (file, xhr, formData) => {
                    formData.append("pagination_code", pagination_code)
                    formData.append("field_index", field_index)
                })
                this.on("addedfile", (file) => {
                    if (!(file.initThumbnail) && (this.files[1] != null)) {
                        this.removeFile(this.files[0]);
                    }
                })
                execThumbnail(this)
            }
        }

    }) 

    for (let field_index = 1; field_index <= 4; field_index++) {
        console.log(this)
        Dropzone.options[`myDropzone${pagination_code}${field_index}`] = {
            acceptedFiles: "image/*",
            maxFiles: 1,
            init: function() {
                this.on("success", () => {
                    $(`#modalAddCaption${pagination_code}_${field_index}`).modal("show")
                })
                this.on("sending", (file, xhr, formData) => {
                    formData.append("pagination_code", pagination_code)
                    formData.append("field_index", field_index)
                })
                this.on("addedfile", (file) => {
                    if (!(file.initThumbnail) && (this.files[1] != null)) {
                        this.removeFile(this.files[0]);
                    }
                })
                execThumbnail(this)
            }
        }
        //Dropzone.options[`myDropzone${pagination_code}${field_index}`].init();
    }

} */

const fetchImg = async (pagination_code) => {
    
    let current_url = 'src/DB/comment_CRUD/img_CRUD/get_comment_photo.php';
    let current_inf = { pagination_code }
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    return images

}

/* const execThumbnail = (context) => {

    let image = { name: "IMG_0045.JPG", size: 2321121, initThumbnail: true, url: 'images/comments/1/4/IMG_0045.JPG' }

    let mockFile = {
        name: image.name,
        size: image.size,
        accepted: true,
        kind: 'image',
        upload: {
            filename: image.name,
        },
        dataURL: image.url,
    };
                
    context.files.push(mockFile);
    context.emit("addedfile", mockFile);
    context.createThumbnailFromUrl(
        mockFile,
        context.options.thumbnailWidth,
        context.options.thumbnailHeight,
        context.options.thumbnailMethod,
        context,
        (thumbnail) => {
            context.emit('thumbnail', mockFile, thumbnail);
            context.emit("complete", mockFile);
        }
    )

} */

const execThumbnail = (context, current_image) => {

    //let image = { name: "IMG_0045.JPG", size: 2321121, initThumbnail: true, url: 'images/comments/1/4/IMG_0045.JPG' }

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
        (thumbnail) => {
            context.emit('thumbnail', currentFile, thumbnail);
            context.emit("complete", currentFile);
        }
    )

}

export default dropzoneHandlers