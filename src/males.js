import { dropzoneHandlers } from './front/dropzones/dropzonesHandlers_Index.js'
import { deleteConfirmations } from './front/utils/confirmation_delete'
import deleteImg from './front/utils/confirmation_delete_img'
import init_owl from './front/utils/init_owl_carusel'

// Инициализация дропзон для загрузки фото котов
dropzoneHandlers('catsadult', 'my-dropzone', 'catsadult_id', 'male')

// Удаление котов
deleteConfirmations(
    $('#modalDeleteAdult'), 
    $('#delete_adult'), 
    'src/DB/cat_CRUD/cat_delete.php',
    'catsadult_id')

// Удаление изображений котов
deleteImg(
    $('#modalDeleteImg'),
    $('#delete_img'), 
    'group_id',
    'imgcatsadult')

// Инициализация совиной карусели
init_owl()