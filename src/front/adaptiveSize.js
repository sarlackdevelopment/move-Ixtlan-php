import { newsAreaIsHidden } from './utils/common.js'

let $newsArea         = $("#newsArea")
let $newsAreaBottom   = $("#newsAreaBottom")
let $mainNews         = $("#mainNews")

const MyResize = () => {

    if (window.matchMedia('(max-width: 768px)').matches) {

        if (newsAreaIsHidden()) {
            $newsArea.hide()
            $newsAreaBottom.hide()
            $mainNews.hide()
        } else {
            $newsArea.hide()
            $newsAreaBottom.show()
            $mainNews.show()
        }

    } else {

        if (newsAreaIsHidden()) {
            $newsArea.hide()
            $newsAreaBottom.hide()
            $mainNews.hide()
        } else {
            $newsArea.show()
            $newsAreaBottom.hide()
            $mainNews.hide()
        }

    }

}

export default MyResize