
const dropzoneHandlers = async (tableName, prefixDropzone, targetFeild, params = []) => {

    Dropzone.autoDiscover = false

    if (params = 'common') {
        initOneDropzone(prefixDropzone, targetFeild, 'common')
    } else {
        const apply_init = async items => 
            items.forEach(current => 
                initOneDropzone(prefixDropzone, targetFeild, current.id))
        await apply_init(await fetchImg(tableName, params))
    }

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

const fetchImg = async (tableName, params = []) => {
    
    let current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
    let current_inf = { tableName, params }
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    return images

}

export default dropzoneHandlers