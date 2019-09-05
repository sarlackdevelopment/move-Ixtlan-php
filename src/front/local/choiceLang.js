const getLangChoice = () => {

    $('#lang_rus').click(async () => {
        $('#lang_current').html('<img src="images/lang/rusflag1.png">')
        await fetch('src/users_settings.php', { 
            method: 'POST', 
            body: JSON.stringify({ name: 'lang', value: 'rus' }), 
            headers: { 'Content-Type': 'application/json' } 
        })
    })
    $('#lang_eng').click(async () => {
        $('#lang_current').html('<img src="images/lang/amflag1.png">')
        await fetch('src/users_settings.php', { 
            method: 'POST', 
            body: JSON.stringify({ name: 'lang', value: 'eng' }), 
            headers: { 'Content-Type': 'application/json' } 
        })
    })
}

export default getLangChoice