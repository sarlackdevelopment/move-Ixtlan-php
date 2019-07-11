import { newsAreaIsHidden, hideNews, showNewsOnSM, showNewsOnLG } from './utils/common.js'

const MyResize = () => {

    let newsIsHidden = newsAreaIsHidden()

    if (window.matchMedia('(max-width: 768px)').matches) {

        if (newsIsHidden) {
            hideNews()
        } else {
            showNewsOnSM()
        }

    } else {

        if (newsIsHidden) {
            hideNews()
        } else {
            showNewsOnLG()
        }

    }

}

export default MyResize