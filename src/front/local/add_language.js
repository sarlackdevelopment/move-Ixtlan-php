import { initOneDropzone } from '../dropzones/dropzonesHandlers_lang.js'

const initAddLanguage = () => {

    $('#add_language').click(async () => {

        const language_caption      = $('#language_caption').val()
        const language_sort_caption = $('#language_sort_caption').val()

        const params = { language_caption, language_sort_caption }

        await addRowLanguage({...params, new_id: await addLanguage(params)})

    })

    $('#modalAddLanguage').on('shown.bs.modal', (event) => {

        const dataset = event.relatedTarget.dataset

        $('#language_caption').val(dataset.caption)
        $('#language_sort_caption').val(dataset.shortCaption)

    })

    $('#modalEditIconLanguage').on('shown.bs.modal', (event) => {

        $('#body_dropzone').empty().append(
            `<div class="container container-fluid border border-info rounded">
                <span class="bg-primary d-flex justify-content-center text-dark mt-2">Добавление флага страны</span>
                <form id="my-dropzone-flag" class="dropzone container container-fluid mb-2" action="/Ixtlan-php/src/local/add_icon_lang.php"></form>
            </div>`)

        initOneDropzone(null, event.relatedTarget.dataset.id)

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
            <td>
                <button id="icon_lang_${new_id}" type="button" class="btn btn-link" data-toggle="modal" data-target="#modalEditIconLanguage" data-id=${new_id}>
                    <img src="images/lang/pencil-alt-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                </button>
            </td>
            <td>
                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#modalAddLanguage" data-caption="${language_caption}" data-short-caption="${language_sort_caption}">
                    <img src="images/lang/edit-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                </button>
            </td>
        </tr>`);

    $('#modalAddLanguage').modal('hide')

}

export default initAddLanguage