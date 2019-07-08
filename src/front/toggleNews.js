require('babel-polyfill')

let $main       = $('main')
let $mainArea   = $("#mainArea")

const toggleLeftBottom = async () => {

    $mainArea.removeClass('col-8')
    $mainArea.addClass('col-12')
    $mainArea.attr("isPushed", "0")

}

const toggleRight = async () => {

    $mainArea.removeClass('col-12')
    $mainArea.addClass('col-8')
    $mainArea.attr("isPushed", "1")

}

const toggleTop = async () => {

    $mainArea.removeClass('col-8')
    $mainArea.addClass('col-12')
    $mainArea.attr("isPushed", "1")

}

const newsesStateManager = async ($direction) => {

    switch($direction) {

        case 'left':

            toggleLeftBottom()

            break
      
        case 'right':

            toggleRight()

            break

        case 'bottom':

            toggleLeftBottom()

            break
      
        case 'top':

            toggleTop()

            break

    }

}

const toggleNews = async ($newsAreaIsHidden, $firstPageLoad = false) => {

    let $mainNews         = $("#mainNews")
    let $newsAreaBottom   = $("#newsAreaBottom")
    let $newsArea         = $("#newsArea")
    let $delay            = 350

    if ($newsAreaIsHidden) {

        if (window.matchMedia('(max-width: 768px)').matches) {

            await $newsAreaBottom.animate({bottom: 'toggle', opacity: "toggle"}, $delay)
            await newsesStateManager('bottom')
            await (async () => $mainNews.hide())()

        } else {

            await $newsArea.animate({left: 'toggle', opacity: "toggle"}, $delay)
            await newsesStateManager('left')

        }

    } else {

        if (window.matchMedia('(max-width: 768px)').matches) {

            await $newsAreaBottom.animate({top: 'toggle', opacity: "toggle"}, $delay)
            await newsesStateManager('top')
            await (async () => $mainNews.show())()

        } else {

            if (!$firstPageLoad) {
                await $newsArea.animate({right: 'toggle', opacity: "toggle"}, $delay)
                await newsesStateManager('right')
            }

        }

    }

}

export default toggleNews