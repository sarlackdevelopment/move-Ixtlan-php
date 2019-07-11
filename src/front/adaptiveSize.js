import { newsAreaIsHidden, hideNews, showNewsOnSM, showNewsOnLG } from './utils/common.js'

//let $newsArea         = $("#newsArea")
//let $newsAreaBottom   = $("#newsAreaBottom")
//let $mainNews         = $("#mainNews")

const MyResize = () => {

    let newsIsHidden = newsAreaIsHidden()

    if (window.matchMedia('(max-width: 768px)').matches) {

        if (newsIsHidden) {
            hideNews()
        //if (newsAreaIsHidden()) {
            //$newsArea.hide()
            //$newsAreaBottom.hide()
            //$mainNews.hide()
        } else {
            showNewsOnSM()
            //$newsArea.hide()
            //$newsAreaBottom.show()
            //$mainNews.show()
        }

    } else {

        if (newsIsHidden) {
            hideNews()
        //if (newsAreaIsHidden()) {
            //$newsArea.hide()
            //$newsAreaBottom.hide()
            //$mainNews.hide()
        } else {
            showNewsOnLG()
            //$newsArea.show()
            //$newsAreaBottom.hide()
            //$mainNews.hide()
        }

    }

}

export default MyResize