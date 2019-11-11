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
//    +16. Добавить измерение языка в пометы. По-хорошему нужно отвязать локализируемый контент
//         от опорных таблиц и оставить только связи. Это блокер для переводов и SEO. Приоритет первичный
//    +17. Решить вопрос с перемещением local_constants и check_rules
//    +18. fontawesome-free лучше пока удалить из node_modules
//    +19. Очистить от неиспользуемого теперь функционала
//    +20. Дописать конфигурационный файл для разделения dev и prom
//    +21. Какие-то проблемы с удалением периода
//    +22. При открытии деталки по котенку открывается первоначальное окно
//    +23. Нужно наладить вкладки - то есть чтобы при открытии открывался первый (по алфавиту)
//         неархивный помет
//    +24. Хард деплой
//    +25. Локаизация отправки письма (в том числе и текст письма)
//    +26. Вставить в alt, title и meta теги записи для роботов на всех используемых языках
//        Возможно стоит использовать рандомизатор, выбирающий нужные значения в случайном порядке
//    +27. sharedBroodsList[] - выяснить что это
//    +28. Локализировать слова Архив / Скрыть архив.
//    +30. Странности с запоминанием языка для пользователя
//    +31. Прописать <!-- entropizer.JS --> на всех страницах
//    32. В списке выбора родителей отображать только тех, что соответствуют текущему языку.
//    +33. Локализация сообщений валидации.
//    +34. "Подробнее" не работает.
//    35. Подтягивать инфу из рекламного баннера (если таковая была ранее внесена).
//    +36. Проверить адаптив модальных окон для деталки котят.
//    +37. Локализовать фразу "Подробнее обо мне"
//    38. Прикрепить к новостям дату.
//    39. Удалить неиспользуемые языки и оставить русские умолчания.
//    +40. Поправить метатег description.
//    +41. Посмотреть поиском все вставки ~~~ и сделать все что там написано.
//    +42. Сделать перелинковку. На Sitemap тоже добавить keywords, добить skr.
//    43. Отключить все настройки SEO для режима разработчика.

const initHandlers = () => {

    $(async () => {

        const data = await fetchInfo()

        init(data)
   
        handlePills(data['data'])

        $('#v-pills-common-archive').on('click', handleArchivePills)
        
    })

    $('.broodToArchive').click(async event => {

        await fetch('src/DB/kitty_CRUD/replaceToArchive.php', { 
            method: 'POST', 
            body: JSON.stringify({'brood_id': event.target.dataset.broodId}), 
            headers: { 'Content-Type': 'application/json' } 
        })
    
    })

}

/* Скрываем вкладки распроданных пометов  */

let broodsInfo = undefined

const fetchInfo = async () => {

    if (broodsInfo == undefined) {
        broodsInfo = await (await fetch("src/DB/kitty_CRUD/brood_CRUD/brood_get_all.php", { 
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' } 
        })).json()
    }

    return broodsInfo

}

const init = (broodsInfo) => {
    const target = broodsInfo['data'].filter(({archive}) => archive === '1')
        .filter((_, index) => index == 0)

    if (target.length != 0) {
        $(`#v-pills-headingBrood_${target[0].id}-tab`).tab('show')
    }
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

        if (data.filter(({archive}) => archive == '1').length == 0) {
            $('#v-pills-common-tab').tab('show')
        }

    })
    
}

const handleArchivePills = async () => {

    const data          = await fetchInfo()
    const archive_pills = $('#v-pills-common-archive')

    if (archive_pills.attr("show") == undefined) {
        archive_pills.attr("show", "1")
    }

    const attrShow = archive_pills.attr("show")

    if (attrShow == "1") {
        archive_pills.attr("show", "0")
        archive_pills.html(data['hide_archive_title'])
    } else {
        archive_pills.attr("show", "1")
        archive_pills.html(data['archive_title'])
    }

    handlePills(data['data'], attrShow)

}

export default initHandlers