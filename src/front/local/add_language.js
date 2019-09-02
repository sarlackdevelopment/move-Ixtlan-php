const initAddLanguage = () => {

    $('#add_language').click(async () => {

        const language_caption      = $('#language_caption').val()
        const language_sort_caption = $('#language_sort_caption').val()

        const result = await (await fetch('/Ixtlan-php/src/local/language_add.php', { 
            method: 'POST', 
            body: JSON.stringify({language_caption, language_sort_caption}), 
            headers: { 'Content-Type': 'application/json' } 
        })).json()
    
        if (result !== 0) {
            console.log('Что-то пошло не так и мы не смогли добавить новый язык')
        }
    
    })

}

export default initAddLanguage