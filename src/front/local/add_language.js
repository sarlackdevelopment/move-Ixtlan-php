const initAddLanguage = () => {

    $('#add_language').click(async () => {

        const language_caption      = $('#language_caption').val()
        const language_sort_caption = $('#language_sort_caption').val()

        const params = { language_caption, language_sort_caption }

        await addRowLanguage({...params, new_id: await addLanguage(params)})

    })

}

const addLanguage = async (params) => {

    try {

        const result = await (await fetch('/Ixtlan-php/src/local/language_add.php', { 
            method: 'POST', 
            body: JSON.stringify(params), 
            headers: { 'Content-Type': 'application/json' } 
        })).json()
    
        if (result === 1) {
            console.log('Что-то пошло не так и мы не смогли добавить новый язык')
        }

        return result

    } catch {
        throw new Error('Не удалось получить данные от сервера')
    }

}

const addRowLanguage = async ({ language_caption, language_sort_caption, new_id }) => {

    $('#table_lang > tbody:last').append(
        `<tr class="table-primary">
            <th class="position-relative">          
                <div style="left: 0.5em;" class="position-absolute">
                    <input name="checks[]" value="${new_id}" class="form-check-input" type="checkbox">
                </div>         
            </th>
            <td>${language_caption}</td>
            <td>${language_sort_caption}</td>
            <td>Путь к картинке</td>
        </tr>`);

    $('#modalAddLanguage').modal('hide')

}

export default initAddLanguage