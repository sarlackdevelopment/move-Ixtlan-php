import toggleNews from './toggleNews.js'
import execute_toast from './toast.js'
import { newsAreaIsHidden } from './utils/common.js'

const bindLocalHandlers = () => {
    $('.toggleNews').click(() => toggleNews(newsAreaIsHidden()))
    $('.addTextButton').click((event) => execute_toast(event))
}

export default bindLocalHandlers