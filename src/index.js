import dropzoneHandlers from './front/dropzones/dropzonesHandlers_Index.js'
import deleteConfirmations from './front/utils/confirmation_delete'

dropzoneHandlers('exhibitions', 'my-dropzone', 'exhibition_id')

dropzoneHandlers('kindofdocuments', 'my-dropzone-kind-of-documents', 'kindofdocuments_id')

deleteConfirmations()