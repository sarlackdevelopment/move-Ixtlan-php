import { get_pagination_code } from './utils/common.js'

const dropzoneHandlers = () => {

    let pagination_code = get_pagination_code()

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
            }
        }
    }
}

export default dropzoneHandlers