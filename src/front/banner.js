const initHandlersBanner = () => {

    $('#modalCustomBanner').on('shown.bs.modal', 
        event => $('#kittyToBanner').attr('kittyId', event.relatedTarget.dataset.kittyId)
    )

    $('#modalRemoveBanner').on('shown.bs.modal', 
        event => $('#kittyFromBanner').attr('kittyId', event.relatedTarget.dataset.kittyId)
    )

    $('#kittyToBanner').click(() => {

        const data = {
            'modal': 'show',
            'banner_header': $('#banner_header').val(),
            'banner_description': $('#banner_description').val(),
            'kitty_id': $('#kittyToBanner').attr('kittyId')
        }
    
        fetch('src/DB/kitty_CRUD/replaceToBanner.php', { 
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: { 'Content-Type': 'application/json' } 
        })

        $('#modalCustomBanner').modal('hide')

    })

    $('#kittyFromBanner').click(() => {

        const data = {
            'modal': 'hide',
            'banner_header': '',
            'banner_description': '',
            'kitty_id': $('#kittyFromBanner').attr('kittyId')
        }

        fetch('src/DB/kitty_CRUD/replaceToBanner.php', { 
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: { 'Content-Type': 'application/json' } 
        })

        $('#modalRemoveBanner').modal('hide')

    })

}

export default initHandlersBanner