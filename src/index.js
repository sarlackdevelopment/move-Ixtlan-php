import MyResize from './front/adaptiveSize'
import toggleNews from './front/toggleNews.js'
import { newsAreaIsHidden } from './front/utils/common.js'

$(window).resize(MyResize);
$(MyResize);

$('.toggleNews').click(() => toggleNews(newsAreaIsHidden()));