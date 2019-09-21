const initDeleteLanguage = () => {

    $('#delete_language').click(async (event) => {

        const language_id = event.target.dataset.language_id

        await deleteLanguage(language_id)
        await (() => $(`tr[data-table_lang_id="${language_id}"]`).remove())()

    })

    $('#modalDeleteLanguage').on('shown.bs.modal', (event) => 
        $('#delete_language').attr('data-language_id', event.relatedTarget.dataset.id))

}

const deleteLanguage = async (language_id) => {

    try {

        await fetch('/Ixtlan-php/src/local/language_delete.php', { 
            method: 'POST', 
            body: JSON.stringify({ language_id }), 
            headers: { 'Content-Type': 'application/json' } 
        })

    } catch {
        throw new Error('Не удалось получить данные от сервера')
    }

}

export default initDeleteLanguage