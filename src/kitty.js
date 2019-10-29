import init_owl from './front/utils/init_owl_carusel'
//import { dropzoneHandlers } from './front/dropzones/dropzonesHandlers_kitty.js'
import { dropzoneHandlersCommon } from './front/dropzones/dropzonesHandlers_Index.js'
import dropzoneHandlersCommonThumbnail from './front/dropzones/dropzonesHandlers_kitty_thumbnail.js'
import deleteImg from './front/utils/confirmation_delete_img'
import { deleteConfirmations, deleteConfirmationsPeriod, deleteConfirmationsStates } from './front/utils/confirmation_delete'
import initHandlers from './front/broods'
import initHandlersBanner from './front/banner'
import initHandlersLazyFetchingData from './front/lazyFetchData/fetchContentKitty'

// Инициализация дропзон для общих фото
dropzoneHandlersCommon('my-dropzone', 'common')

// Инициализация дропзон для загрузки фото котят в разрезе временных периодов
//dropzoneHandlers('imgkitty')

// Удаление котят
deleteConfirmations(
    $('#modalDeleteKitty'), 
    $('#delete_kitty'), 
    'src/DB/kitty_CRUD/kitty_delete.php',
    'kitty_id')

// Удаление пометов
deleteConfirmations(
    $('#modalDeleteBrood'), 
    $('#delete_brood'), 
    'src/DB/kitty_CRUD/brood_CRUD/brood_delete.php',
    'brood_id')

// Удаление периодов
deleteConfirmationsPeriod()

// Удаление статусов
deleteConfirmationsStates()

// Инициализация дропзон для главного фото котенка
dropzoneHandlersCommonThumbnail()

// Инициализация совиной карусели
init_owl()

// Удаление изображений котов
deleteImg(
    $('#modalDeleteImg'),
    $('#delete_img'), 
    'group_id',
    'imgkitty')

// Удаление общих фото
deleteImg(
    $('#modalDeleteCommonImg'),
    $('#delete_common_img'), 
    'group_id', 
    'imgcommon')

// Инициализация обработчиков перемещения пометов в архив
initHandlers()

// Инициализация обработчиков всплывающего рекламного баннера
initHandlersBanner()

// Инициализация обработчиков "ленивой" загрузки фотоконтента
initHandlersLazyFetchingData()