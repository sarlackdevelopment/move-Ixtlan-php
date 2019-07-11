let $mainArea       = $("#mainArea");
let $newsArea       = $("#newsArea")
let $newsAreaBottom = $("#newsAreaBottom")
let $mainNews       = $("#mainNews")

export const newsAreaIsHidden = () => {
    let $isPushed = $mainArea.attr("isPushed");
    return (($isPushed == undefined) || ($isPushed == "1"));
}

export const hideNews = () => {
    $newsArea.hide()
    $newsAreaBottom.hide()
    $mainNews.hide()
}

export const showNewsOnSM = () => {
    $newsArea.hide()
    $newsAreaBottom.show()
    $mainNews.show()
}

export const showNewsOnLG = () => {
    $newsArea.show()
    $newsAreaBottom.hide()
    $mainNews.hide()
}

export const get_pagination_code = () => {

    const params = window.location.search.replace('?','').split('&').reduce(
        (p, e) => {
            let a = e.split('=')
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
            return p
        }, {}
    ); 

    return (params['p'] === undefined) ? 1 : params['p']

} 