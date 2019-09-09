export const getLangChoice = () => {

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

export const toggleAddLanguage = () => {

    let container = $('#switchContainerLang')
    
    container.click(async () => {

        if (container.hasClass("switchOn")) {
            container.removeClass("switchOn").addClass('switchOff')
        } else {
            container.removeClass("switchOff").addClass('switchOn')
        }

    })

}