import { get_pagination_code } from './utils/common.js'

const dropzoneHandlers = () => {

    let pagination_code = get_pagination_code()

    for (let field_index = 1; field_index <= 4; field_index++) {
        Dropzone.options[`myDropzone${pagination_code}${field_index}`] = {
            createImageThumbnails: false,
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

                let image = { name: "IMG_0045.JPG", size: 12345678, url: 'images/comments/1/4/IMG_0045.JPG' }

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
                );
                
                /* let mockFile = { name: "IMG_0045.JPG", size: 12345678, imageUrl: 'images/comments/1/4/IMG_0045.JPG' }
                this.emit("addedfile", mockFile);
                this.files.push(mockFile);
                this.createThumbnailFromUrl('images/comments/1/4/IMG_0045.JPG', mockFile.imageURL, () => this.emit("complete", mockFile), "anonymous");



                let mockFile = { name: "IMG_0045.JPG", size: 12345678, imageUrl: 'images/comments/1/4/IMG_0045.JPG' }
                this.files.push(mockFile);
                this.emit("addedfile", mockFile);
                this.createThumbnailFromUrl(mockFile,
                    this.options.thumbnailWidth, 
                    this.options.thumbnailHeight,
                    this.options.thumbnailMethod, true, (thumbnail) => {
                        this.emit('thumbnail', mockFile, thumbnail)
                    })
                this.emit('complete', mockFile); */


            }
        }
    }
}

export default dropzoneHandlers