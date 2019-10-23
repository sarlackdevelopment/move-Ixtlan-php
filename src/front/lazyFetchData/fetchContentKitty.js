import '@fortawesome/fontawesome-free/js/all'
//import '../../../css/owl/owl.carousel.min.css'
//import '../../../css/owl/owl.theme.default.min.css'

const initHandlersLazyFetchingData = () => {

    $('#kittyPhotoContent').on('shown.bs.modal', async event => {

        /*******************ЗАГРУЗКА ПЕРИОДОВ********************/

        // Фетчим заголовки периодов с сервера
        const fetchPillsCaption = async () => {

            const brood_id = event.relatedTarget.dataset.broodId

            const kittyPeriods = await (await fetch('src/DB/lazyFetchData/fetchPeriodsCaption.php', { 
                method: 'POST', 
                body: JSON.stringify({ brood_id }), 
                headers: { 'Content-Type': 'application/json' } 
            })).json()

            return kittyPeriods

        }

        // Формируем вкладки с заголовками периодов
        const createPillsPeriods = async (dataPeriods) => {

            let result = ''
            let active = 'active'

            dataPeriods.forEach(({id, name}) => {
                result = result +
                `<li class="nav-item">
                    <a class="nav-link ${active}" id="period_${id}" data-toggle="tab" href="#period_${id}" role="tab" aria-controls="period_${id}" aria-selected="${(active !== '' ? 'true' : 'false')}">${name}</a>
                </li>`      
                active = ''
            })       

            return result

        }

        // Асинхронно добавляем заголовки периодов к модальному окну
        const createPeriodsLayout = async (pillsPeriods) => {

            $("#photoKittyContent").append(`
                <ul class="nav nav-tabs" id="photosKittyTab" role="tablist">
                    ${pillsPeriods}
                </ul>       
                <div class="tab-content text-center my-2 jumbotron shadow-lg" id="photosKittyTabContent"></div>
                <div class="container alert alert-info text-center" role="alert">
                    Описание котенка    
                </div>`)

        }

        /*******************ЗАГРУЗКА ФОТОГРАФИЙ********************/

        // Фетчим фотографии с сервера
        const fetchKittyPhotos = async (period_id) => {

            const kitty_id = event.relatedTarget.dataset.kittyId

            const kittyPhotos = await (await fetch('src/DB/lazyFetchData/fetchContentKittyPhoto.php', { 
                method: 'POST', 
                body: JSON.stringify({ kitty_id, period_id }), 
                headers: { 'Content-Type': 'application/json' } 
            })).json()

            return kittyPhotos

        }

        // Динамически формируем owl карусель
        const owl = async (data, period_id) => {

            let content = ''

            data.forEach(path => {
                content = content +
                `<div class="item">
                    <img src="${path}" alt="Изображение отсутствует">
                </div>`
            })

            $('#photosKittyTabContent').append(`
                <div class="tab-pane fade" id="${period_id}" role="tabpanel" aria-labelledby="home-tab">
                    <div class="owl-carousel">${content}</div>
                </div>`)

            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                autoplay: true,
                smartSpeed: 3000,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })

            $(`#photosKittyTabContent #${period_id}`).attr('data-loading-done', '1')

        }
      
        // Заливаем полученные с сервера фотографии в асинхронном режиме
        const createPhotoPeriod = async (period_id) => {

            if ($(`#photosKittyTabContent #${period_id}`).attr('data-loading-done') === undefined) {

                const kittyPhotos = await fetchKittyPhotos(period_id)

                await owl(kittyPhotos['paths'], period_id)
                
            }

            $('#photosKittyTabContent .tab-pane').each(function () {
                $(this).removeClass('active show')
            })
            $(`#photosKittyTabContent #${period_id}`).tab('show')

        }

        // Формируем обработчики перехода по вкладкам периодов
        const createHandlerPills = async () => {
            $('#photosKittyTab a[data-toggle="tab"]').on('shown.bs.tab', async function() {  
                await createPhotoPeriod($(this).attr('id'))
            })
        }
        
        /*******************ОСНОВНАЯ ЧАСТЬ********************/

        if ($("#photoKittyContent").children().length === 0) {

            // Добавление вкладок с периодами
            await createPeriodsLayout(await createPillsPeriods(await fetchPillsCaption()))

            // Добавление обработчиков при переходах по вкладкам периодов
            await createHandlerPills()

            // Добавление фотоконтента
            await createPhotoPeriod('period_27')

        }

    }) 

}

export default initHandlersLazyFetchingData