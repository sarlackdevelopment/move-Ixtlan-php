const initHandlers = () => {

    $(async () => {

        /* Скрываем вкладки распроданных пометов  */
    
        const archive_pills = $('#v-pills-common-archive')
    
        const fetchInfo = async () => {
    
            const broodsInfo = await (await fetch("src/DB/kitty_CRUD/brood_CRUD/brood_get_all.php", { 
                method: 'POST',  
                headers: { 'Content-Type': 'application/json' } 
            })).json()
    
            return broodsInfo
    
        }
    
        const handlePills = (data, attrShow = undefined) => {
    
            data.forEach(({id, archive}) => {
                
                const current_pill = $(`#v-pills-headingBrood_${id}-tab`)
    
                if (archive === '0') {
    
                    if ((attrShow === undefined) || (attrShow == '0')) {
                        current_pill.hide("slow")
                    } else {
                        current_pill.show("slow")
                    }  
    
                } else {
                    
                    if ((attrShow === undefined) || (attrShow == '0')) {
                        current_pill.show("slow")
                    } else {
                        current_pill.hide("slow")
                    }
    
                }
            })
    
        }
    
        handlePills(await fetchInfo())
    
        $('#v-pills-common-archive').on('click', async () => {

            const fetchArchiveDataBroods = async () => {

                // TODO: 
                //    +0. Залить локализацию авторизации и доработать ее функционал.
                //    +1. При загрузке фотографий котят и взрослых животных грузить только главные, остальное только при
                //       нажатии на деталку. 
                //    +4. Увеличить сложность пароля на проме (поиск по фразе "придумайте пароль посложнее")
                //    +5. Проработать отправку письма на проме.
                //    +6. Отсылать письмо при авторизации на почтовый ящик пользователя.
                //    +7. Breed->Litter Free->Available sign_in->sign_up
                //    +8. Добавление баннера в разрезе языка пользователя.
                //    9. Добавление отзыва - все сломалось.
                //    10. Не добавляется язык
                //    +11. Корявое отображение панели навигации
                //    12. Надо что-то сделать с адаптивностью русского шрифта (возможно заменить)
                //    14. Оформить заказ на перевод. 
                //    15. Проконсультироваться по вопросам SEO.
                //    (!!!) 16. Добавить измерение языка в пометы. По-хорошему нужно отвязать локализируемый контент
                //          от опорных таблиц и оставить только связи. Это блокер для переводов и SEO. Приоритет первичный
                //    +17. Решить вопрос с перемещением local_constants и check_rules
                //    +18. fontawesome-free лучше пока удалить из node_modules
                //    +19. Очистить от неиспользуемого теперь функционала
                //    20. Дописать конфигурационный файл для разделения dev и prom
                //    +21. Какие-то проблемы с удалением периода
                //    +22. При открытии деталки по котенку открывается первоначальное окно
                //    23. Нужно наладить вкладки - то есть чтобы при открытии открывался первый (по алфавиту)
                //         неархивный помет
                //    24. Хард деплой
                //    25. Локаизация отправки письма (в том числе и текст письма)

            }
           
            if (archive_pills.attr("show") == undefined) {
                archive_pills.attr("show", "1")
            }
    
            const attrShow = archive_pills.attr("show")
    
            if (attrShow == "1") {
                archive_pills.attr("show", "0")
                archive_pills.html("Скрыть архив...")
            } else {
                archive_pills.attr("show", "1")
                archive_pills.html("Архив...")
            }

            await fetchArchiveDataBroods()
    
            handlePills(await fetchInfo(), attrShow)
    
        })
        
    })

    $('.broodToArchive').click(async event => {

        await fetch('src/DB/kitty_CRUD/replaceToArchive.php', { 
            method: 'POST', 
            body: JSON.stringify({'brood_id': event.target.dataset.broodId}), 
            headers: { 'Content-Type': 'application/json' } 
        })
    
    })

}

export default initHandlers
