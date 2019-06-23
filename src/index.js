import bindGlobalHandlers from './front/commonHandlers.js'
import bindLocalHandlers from './front/bindLocalHandlers.js'
import dropzoneHandlers from './front/dropzoneHandlers.js'
import init_pagination from './front/pagination.js'
import initCaruselComments from './front/initCaruselComments.js'
import initCaptions from './front/initCaptions.js'

//********************************************************************** */
// Общие для всех
//********************************************************************** */

bindGlobalHandlers()

bindLocalHandlers()

//********************************************************************** */
// Только для страницы комментариев
//********************************************************************** */

dropzoneHandlers()

init_pagination()

initCaptions()

initCaruselComments()