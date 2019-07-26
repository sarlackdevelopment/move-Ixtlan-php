import dropzoneHandlers from './front/dropzones/dropzonesHandlers_Index.js'
import deleteConfirmations from './front/utils/confirmation_delete'
import init_owl from './front/utils/init_owl_carusel'

// Инициализация дропзон для загрузки фото котов
dropzoneHandlers('catsadult', 'my-dropzone', 'catsadult_id', 'male')

// Удаление котов
deleteConfirmations(
    $('#modalDeleteAdult'), 
    $('#delete_adult'), 
    '/Ixtlan-php/src/DB/cat_CRUD/cat_delete.php',
    'catsadult_id')

// Инициализация совиной карусели
init_owl()