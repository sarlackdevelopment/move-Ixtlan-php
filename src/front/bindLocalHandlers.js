import toggleNews from './toggleNews.js'
import { newsAreaIsHidden } from './utils/common.js'

const bindLocalHandlers = () => {
    $('.toggleNews').click(() => toggleNews(newsAreaIsHidden()))
}

export default bindLocalHandlers
