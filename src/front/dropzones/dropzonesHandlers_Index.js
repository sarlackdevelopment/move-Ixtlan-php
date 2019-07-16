
const dropzoneHandlers = async (tableName, prefixDropzone, targetFeild) => {

    Dropzone.autoDiscover = false;

    let exhibitions = await fetchImg(tableName) 

    await (async () => exhibitions.forEach((current_exhibition) => initOneDropzone(prefixDropzone, targetFeild, current_exhibition.id)))()

}

const initOneDropzone = async (prefixDropzone, targetFeild, valueTargetFeild) => {

    let idDropzone = `#${prefixDropzone}-${valueTargetFeild}`

    new Dropzone(idDropzone, {

        acceptedFiles: "image/*",

        init: function () {
            this.on("sending", (file, xhr, formData) => {
                formData.append(targetFeild, valueTargetFeild)
            })
        }

    })

}

const fetchImg = async (tableName) => {
    
    let current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
    let current_inf = { tableName }
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    return images

}

export default dropzoneHandlers