import toggleNews from './toggleNews.js'
//import execute_toast from './toast.js'
import { execute_toast, execute_toast_test } from './toast.js'
import { newsAreaIsHidden } from './utils/common.js'

const bindLocalHandlers = () => {
    $('.toggleNews').click(() => toggleNews(newsAreaIsHidden()))
    $('.addTextButton').click((event) => execute_toast(event))
    $('.addCaptionButton').click((event) => execute_toast_test(event))
}

export default bindLocalHandlers