import MyResize from './front/adaptiveSize'
import toggleNews from './front/toggleNews.js'
import { newsAreaIsHidden } from './front/utils/common.js'
import bindGlobalHandlers from './front/commonHandlers.js'

bindGlobalHandlers();

$('.toggleNews').click(() => toggleNews(newsAreaIsHidden()));