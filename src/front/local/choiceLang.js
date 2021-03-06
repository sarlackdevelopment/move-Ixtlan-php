// TODO сделать медленное выпадение

export const getLangChoice = async () => {

    const langages = await getLanguages()

    await (() => langages.forEach(item => handleChoiceLang(item)))()

    $('#choice-lang').on('show.bs.dropdown', () => dropdownChoiceLang())

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

export const dropdownChoiceLang = async () => {

    const langages = await getLanguages()

    await (() => {

        $('#dropdown-choice-lang').empty()

        langages.forEach(({ lang_id, path, short_caption, caption }) => {

            $('#dropdown-choice-lang').append(`
                <div id="lang_${short_caption}" class="d-flex align-items-center justify-content-between mx-2 p-2" style="background-color: rgba(0,0,0,.03); cursor: pointer;">
                    <span>${caption}</span>
                    <img title="купить норвежскую лесную кошку в москве норвежская лесная кошка питомник москва" class="img-fluid"
                        src="${path}" alt="питомник норвежской продажа норвежской котята норвежской">
                </div>`)

            handleChoiceLang({ lang_id, path, short_caption })

        })

    })()
    
} 

const getLanguages = async () => {

    const langages = await (await fetch('src/local/get_all_language.php', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' } 
    })).json()

    return langages

}

const handleChoiceLang = ({ lang_id, path, short_caption }) => {

    $(`#lang_${short_caption}`).click(async () => {

        await fetch('src/users_settings.php', { 
            method: 'POST', 
            body: JSON.stringify({
                name: 'lang', 
                value: lang_id
            }), 
            headers: { 'Content-Type': 'application/json' } 
        })

        await (async () => {

            const current_url = document.location.href
            if (!current_url.includes('?lang')) {
                document.location.href = `${document.location.href}?lang=${short_caption}`
            } else {

                const position_lang    = current_url.indexOf('?lang')
                const position_another = current_url.indexOf('&', position_lang)

                const base_url       = current_url.slice(0, position_lang)
                const another_params = (position_another != -1) ? current_url.slice(position_another) : ''

                document.location.href = `${base_url}?lang=${short_caption}${another_params}`

            }

        })()

    })

}