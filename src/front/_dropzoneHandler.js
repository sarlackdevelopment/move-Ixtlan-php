import { get_pagination_code } from './utils/common.js'

const dropzoneHandlers = async () => {

    let pagination_code = get_pagination_code()
    let images          = await fetchImg(pagination_code)
    initDropzones(pagination_code, images)

    /* let pagination_code = get_pagination_code()

    for (let field_index = 1; field_index <= 4; field_index++) {
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
    } */
}

const fetchImg = async (pagination_code) => {
    
    let current_url = 'src/DB/comment_CRUD/img_CRUD/get_comment_photo.php';
    let current_inf = { pagination_code }
    let headers     = { 'Content-Type': 'application/json' }

    let files = await (await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    return files

}

const initDropzones = (pagination_code, images) => {

    for (let field_index = 1; field_index <= 4; field_index++) {
    //for (let index = 0; index <= images.length - 1; index++) {

        //let field_index = index + 1
        //let current_img = images[index]

        //console.log(`myDropzone${pagination_code}${field_index}`)

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
                let current_img = 1;
                execThumbnail(this, current_img)
                //console.log(this)
            }
        }

    } 

}

const execThumbnail = (context, image1) => {

    let image = { name: "IMG_0045.JPG", size: 2321121, initThumbnail: true, url: 'images/comments/1/4/IMG_0045.JPG' }

    console.log(image)

    let targetFile = {
        name: image.name,
        size: image.size,
        accepted: true,
        kind: 'image',
        upload: {
            filename: image.name,
        },
        dataURL: image.url,
    };
                
    context.files.push(targetFile);
    context.emit("addedfile", targetFile);
    context.createThumbnailFromUrl(
        targetFile,
        context.options.thumbnailWidth,
        context.options.thumbnailHeight,
        context.options.thumbnailMethod,
        context,
        (thumbnail) => {
            context.emit('thumbnail', targetFile, thumbnail);
            context.emit("complete", targetFile);
        }
    )

}

export default dropzoneHandlers