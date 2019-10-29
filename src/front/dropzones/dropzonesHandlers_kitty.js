const initOneDropzone = async (kitty_id, periods_id) => {

    Dropzone.autoDiscover = false

    const idDropzone = `#my-dropzone-i${kitty_id}-i${periods_id}`

    if ($(idDropzone).length !== 0) {

        new Dropzone(idDropzone, {

            acceptedFiles: "image/*",

            init: function () {
                this.on("sending", (file, xhr, formData) => {
                    formData.append("kitty_id", kitty_id);
                    formData.append("period_id", periods_id);
                })
            }

        })

    }

}

export default initOneDropzone