import dropzoneHandlers from './front/dropzones/dropzonesHandlers_Index.js'
import deleteConfirmations from './front/utils/confirmation_delete'
import deleteImg from './front/utils/confirmation_delete_img'

dropzoneHandlers('exhibitions', 'my-dropzone', 'exhibition_id')

dropzoneHandlers('kindofdocuments', 'my-dropzone-kind-of-documents', 'kindofdocuments_id')

//Удаление новостей
deleteConfirmations(
    $('#modalDeleteNews'), 
    $('#delete_news'), 
    '/Ixtlan-php/src/DB/news_CRUD/news_delete.php',
    'news_index')

// Удаление выставок
deleteConfirmations(
    $('#modalDeleteExhibition'), 
    $('#delete_exhibition'), 
    '/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_delete.php',
    'exhibition_id')

// Удаление изображений с выставок
deleteImg()