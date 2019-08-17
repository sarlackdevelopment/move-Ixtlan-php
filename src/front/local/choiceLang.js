const getLangChoice = () => {
    $('#lang_rus').click(() => {
        $('#lang_current').html('<img src="images/lang/rusflag1.png">')
    })
    $('#lang_eng').click(() => {
        $('#lang_current').html('<img src="images/lang/amflag1.png">')
    })
}

export default getLangChoice