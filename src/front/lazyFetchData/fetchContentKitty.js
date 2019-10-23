import '@fortawesome/fontawesome-free/js/all'

const initHandlersLazyFetchingData = () => {

    $('#kittyPhotoContent').on('shown.bs.modal', event => {

        const fetchKittyPhotos = async (period_id) => {

            const kitty_id = event.relatedTarget.dataset.kittyId

            /*const kittyPhotos = await (await fetch('src/DB/lazyFetchData/fetchContentKittyPhoto.php', { 
                method: 'POST', 
                body: JSON.stringify({ kitty_id }), 
                headers: { 'Content-Type': 'application/json' } 
            })).json()*/

            const kittyPhotos = period_id

            return kittyPhotos

        }

        const fetchPillsCaption = async () => {

            const brood_id = event.relatedTarget.dataset.broodId

            const kittyPeriods = await (await fetch('src/DB/lazyFetchData/fetchPeriodsCaption.php', { 
                method: 'POST', 
                body: JSON.stringify({ brood_id }), 
                headers: { 'Content-Type': 'application/json' } 
            })).json()

            return kittyPeriods

        }

        const createPillsPeriods = async (kittyPeriods) => {

            let result = ''
            let active = 'active';

            kittyPeriods.forEach(({id, name}) => {
                result = result +
                `<li class="nav-item">
                    <a class="nav-link ${active}" id="period_${id}" data-toggle="tab" href="#period_${id}" role="tab" aria-controls="period_${id}" aria-selected="${(active !== '' ? 'true' : 'false')}">${name}</a>
                </li>`;       
                active = '';
            })

            /*<ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>*/

            return result

        }

        const createPhotoPeriod = async (photoPeriod) => {
            
            await (async () => {

                if ($(`#photosKittyTabContent #${photoPeriod}`).length === 0) {
                    $('#photosKittyTabContent').append(`
                        <div class="tab-pane fade" id="${photoPeriod}" role="tabpanel" aria-labelledby="home-tab">
                            <i id="spinner" class="fas fa-spinner fa-10x"></i>
                            ${photoPeriod}
                        </div>`)
                }
                $('#photosKittyTabContent .tab-pane').each(function () {
                    $(this).removeClass('active show')
                })
                $(`#photosKittyTabContent #${photoPeriod}`).tab('show')

            })()
        }

        const createPhotoContainer = async (pillsPeriods) => {

            $("#photoKittyContent").append(`
                <ul class="nav nav-tabs" id="photosKittyTab" role="tablist">
                    ${pillsPeriods}
                </ul>       
                <div class="tab-content text-center my-2 jumbotron shadow-lg" id="photosKittyTabContent"></div>
                <div class="container alert alert-info text-center" role="alert">
                    Описание котенка    
                </div>`)

        }

        const createHandlerPills = async () => {
            $('#photosKittyTab a[data-toggle="tab"]').on('shown.bs.tab', async function() {
                await createPhotoPeriod(await fetchKittyPhotos($(this).attr('id')))  
            })
        }

        const showPhotoContent = async () => {

            if ($("#photoKittyContent").children().length === 0) {

                const pillsPeriods = await createPillsPeriods(await fetchPillsCaption())
                //const kittyPhotos  = await fetchKittyPhotos()

                await createPhotoContainer(pillsPeriods)

                await (async () => {
                    $('#photosKittyTabContent').append(`
                        <div class="tab-pane fade show active" id="period_${27}" role="tabpanel" aria-labelledby="home-tab">
                            <i id="spinner" class="fas fa-spinner fa-10x"></i>
                            period_27
                        </div>`)
                })()

                await createHandlerPills()

            }

        }

        showPhotoContent()

    }) 

}

export default initHandlersLazyFetchingData