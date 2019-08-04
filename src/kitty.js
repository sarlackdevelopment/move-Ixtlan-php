import init_owl from './front/utils/init_owl_carusel'
import dropzoneHandlersKitty from './front/dropzones/dropzonesHandlers_kitty.js'
import { dropzoneHandlersCommon } from './front/dropzones/dropzonesHandlers_Index.js'
import dropzoneHandlersCommonThumbnail from './front/dropzones/dropzonesHandlers_kitty_thumbnail.js'
import deleteImg from './front/utils/confirmation_delete_img'
import { deleteConfirmations, deleteConfirmationsPeriod, deleteConfirmationsStates } from './front/utils/confirmation_delete'

// Инициализация дропзон для общих фото
dropzoneHandlersCommon('my-dropzone', 'common')

// Инициализация дропзон для загрузки фото котят в разрезе временных периодов
dropzoneHandlersKitty('imgkitty')

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
    '/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_delete.php',
    'brood_id')

// Удаление периодов
deleteConfirmationsPeriod()

// Удаление статусов
deleteConfirmationsStates()

// Инициализация дропзон для главного фото котенка
dropzoneHandlersCommonThumbnail()

// Инициализация совиной карусели
init_owl()

// Удаление изображений котят
deleteImg('imgkitty')