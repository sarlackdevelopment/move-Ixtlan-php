import { dropzoneHandlers } from './front/dropzones/dropzonesHandlers_Index.js'
import { deleteConfirmations } from './front/utils/confirmation_delete'
import deleteImg from './front/utils/confirmation_delete_img'
import deleteVideo from './front/utils/confirmation_delete_video'
import init_owl from './front/utils/init_owl_carusel'
import { doSignIn, doSignUp, doSignOut, doEditUserSettings } from './front/auth/doAuth'
import doApprove from './front/auth/approvePost'
import getLangChoice from './front/local/choiceLang'

dropzoneHandlers('exhibitions', 'my-dropzone', 'exhibition_id')

dropzoneHandlers('kindofdocuments', 'my-dropzone-kind-of-documents', 'kindofdocuments_id')

//Удаление новостей DRY - удаление новостей расшарить на весь проект
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

// Удаление изображений кошек
deleteImg(
    $('#modalDeleteImg'),
    $('#delete_img'), 
    'group_id',
    'imgexhibitions')

// Удаление изображений документов
deleteImg(
    $('#modalDeleteImg'),
    $('#delete_img'), 
    'group_id',
    'imgkindofdocument')

// Удаление видео
deleteVideo()

// Инициализация совиной карусели
init_owl()

// Регистрация пользователя
doSignIn()

// Вход пользователя
doSignUp()

// Выход пользователя
doSignOut()

// редактирование параметров пользователя
doEditUserSettings()

// Подтверждение электронной почты
doApprove()

// Выбор языка
getLangChoice()