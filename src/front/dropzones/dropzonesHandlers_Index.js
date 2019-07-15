export const fetchImg = async () => {
    
    let current_url = 'src/DB/exhibitioner_CRUD/exhibition_CRUD/get_exhibition_photo.php';
    let current_inf = {}
    let headers     = { 'Content-Type': 'application/json' }

    let images = await (await fetch(current_url, { 
        method: 'POST', 
        body: JSON.stringify(current_inf), 
        headers: headers 
    })).json()

    console.log(images)

    return images

}