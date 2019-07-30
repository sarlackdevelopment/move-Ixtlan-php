import init_owl from './front/utils/init_owl_carusel'
import dropzoneHandlersKitty from './front/dropzones/dropzonesHandlers_kitty.js'
import dropzoneHandlersCommon from './front/dropzones/dropzonesHandlers_Index.js'
import dropzoneHandlersCommonThumbnail from './front/dropzones/dropzonesHandlers_kitty_thumbnail.js'
import deleteConfirmations from './front/utils/confirmation_delete'

// Инициализация дропзон для общих фото
dropzoneHandlersCommon('imgcommon', 'my-dropzone', 'common')

// Инициализация дропзон для загрузки фото котят в разрезе временных периодов
dropzoneHandlersKitty('imgkitty')

// Удаление котят
deleteConfirmations(
    $('#modalDeleteKitty'), 
    $('#delete_kitty'), 
    'src/DB/kitty_CRUD/kitty_delete.php',
    'kitty_id')

// Инициализация дропзон для главного фото котенка
dropzoneHandlersCommonThumbnail()

// Инициализация совиной карусели
init_owl()