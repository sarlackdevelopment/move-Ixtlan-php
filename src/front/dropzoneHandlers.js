import { get_pagination_code } from './utils/common.js'

const dropzoneHandlers = () => {

    let pagination_code = get_pagination_code()

    for (let field_index = 1; field_index <= 4; field_index++) {
        Dropzone.options[`myDropzone${pagination_code}${field_index}`] = {
            //createImageThumbnails: false,
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

                /* let image = { name: "IMG_0045.JPG", size: 12345678, url: 'images/comments/1/4/IMG_0045.JPG' }

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
                
                this.files.push(mockFile);
                this.emit("addedfile", mockFile);
                this.createThumbnailFromUrl(
                    mockFile,
                    this.options.thumbnailWidth,
                    this.options.thumbnailHeight,
                    this.options.thumbnailMethod,
                    true,
                    (thumbnail) => {
                        this.emit('thumbnail', mockFile, thumbnail);
                        this.emit("complete", mockFile);
                    }
                ) */
            }
        }
    }
}

const execThumbnail = (context) => {

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

}

export default dropzoneHandlers