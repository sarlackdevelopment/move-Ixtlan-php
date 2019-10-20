import dropzoneHandlersLangThumbnail from '../dropzones/dropzonesHandlers_lang.js'

const initAddLanguage = () => {

    $('#add_language').click(async (event) => {

        const language_id           = event.target.dataset.language_id
        const language_caption      = $('#language_caption').val()
        const language_sort_caption = $('#language_sort_caption').val()

        const params = { language_id, language_caption, language_sort_caption }

        await hadleRow({...params, new_id: await addLanguage(params)})

    })

    $('#modalAddLanguage').on('shown.bs.modal', (event) => {

        const dataset = event.relatedTarget.dataset

        $('#language_caption').val(dataset.caption)
        $('#language_sort_caption').val(dataset.shortCaption)

        $('#add_language').attr('data-language_id', (dataset.id === undefined) ? 0 : dataset.id)

    })

    $('#modalEditIconLanguage').on('shown.bs.modal', (event) => {

        $('#body_dropzone').empty().append(
            `<div class="container container-fluid border border-info rounded">
                <span class="bg-primary d-flex justify-content-center text-dark mt-2">Добавление флага страны</span>
                <form id="my-dropzone-flag" class="dropzone container container-fluid mb-2" action="src/local/add_icon_lang.php"></form>
            </div>`)

        dropzoneHandlersLangThumbnail(event.relatedTarget.dataset.id)

    })

}

const addLanguage = async (params) => {

    try {

        const result = await (await fetch('src/local/language_add.php', { 
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

const hadleRow = async ({ language_id, language_caption, language_sort_caption, new_id }) => {

    if (language_id === '0') {
        addRowLanguage(language_caption, language_sort_caption, new_id)
    } else {
        editRowLanguage(language_caption, language_sort_caption, language_id)
    }
    
    $('#modalAddLanguage').modal('hide')

}

const addRowLanguage = async (language_caption, language_sort_caption, new_id) => {

    $('#table_lang > tbody:last').append(
        `<tr class="table-primary" data-table_lang_id="${new_id}">
            <td>${language_caption}</td>
            <td>${language_sort_caption}</td>
            <td>
                <button id="icon_lang_${new_id}" type="button" class="btn btn-link" data-toggle="modal" data-target="#modalEditIconLanguage" data-id=${new_id}>
                    <img src="images/lang/pencil-alt-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                </button>
            </td>
            <td>
                <button type="button" class="btn btn-link" 
                    data-toggle="modal" 
                    data-target="#modalAddLanguage" 
                    data-caption="${language_caption}" 
                    data-short-caption="${language_sort_caption}" 
                    data-id=${new_id}
                >
                    <img src="images/lang/edit-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                </button>
            </td>
            <td>
                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#modalDeleteLanguage" data-id="${new_id}">
                    <img src="images/lang/trash-alt-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                </button>
            </td>
        </tr>`);
}

const editRowLanguage = async (language_caption, language_sort_caption, new_id) => {

    $(`tr[data-table_lang_id="${new_id}"] > td:lt(2)`).each((index, element) => {
        switch (index) {
            case 0 :
                $(element).html(language_caption)
                return
            case 1 :
                $(element).html(language_sort_caption)
                return
        }
    })
}

export default initAddLanguage