import dropzoneHandlers from './front/dropzones/dropzonesHandlers_Index.js'
import deleteConfirmations from './front/utils/confirmation_delete'
import deleteImg from './front/utils/confirmation_delete_img'
import deleteVideo from './front/utils/confirmation_delete_video'

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

// Удаление типов документов
deleteConfirmations(
    $('#modalDeleteKindOfDocument'), 
    $('#delete_kind_of_document'), 
    '/Ixtlan-php/src/DB/document_CRUD/kind_of_document_CRUD/kind_of_document_delete.php',
    'kind_of_document_id')

// Удаление изображений с выставок
deleteImg(
    $('#modalDeleteImg'), 
    $('#delete_img'), 
    'group_id',
    '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php',
    'imgexhibitions')

// Удаление изображений документов
deleteImg(
    $('#modalDeleteImg'), 
    $('#delete_img'), 
    'group_id',
    '/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php',
    'imgkindofdocument')

// Удаление видео
deleteVideo()