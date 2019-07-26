import dropzoneHandlers from './front/dropzones/dropzonesHandlers_Index.js'
import deleteConfirmations from './front/utils/confirmation_delete'
import deleteImg from './front/utils/confirmation_delete_img'
import init_owl from './front/utils/init_owl_carusel'

dropzoneHandlers('catsadult', 'my-dropzone', 'catsadult_id', 'female')

// Удаление кошек
deleteConfirmations(
    $('#modalDeleteFemale'), 
    $('#delete_female'), 
    '/Ixtlan-php/src/DB/cat_CRUD/cat_delete.php',
    'catsadult_id')

// Удаление изображений кошек
deleteImg('imgcatsadult')

// Инициализация совиной карусели
init_owl()