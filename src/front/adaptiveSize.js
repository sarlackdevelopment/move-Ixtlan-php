let $mainArea = $("#mainArea");

const newsAreaIsHidden = () => {
    let $isPushed = $mainArea.attr("isPushed");
    return (($isPushed == undefined) || ($isPushed == "1"));
}

const MyResize = () => {

    let $newsArea         = $("#newsArea");
    let $newsAreaBottom   = $("#newsAreaBottom");
    let $mainNews         = $("#mainNews");
    let $toggleNews       = $("#toggleNews");
    let $toggleNewsBottom = $("#toggleNewsBottom");

    $newsAreaIsHidden = newsAreaIsHidden();

    $toggleNewsBottom.hide();

    if (!$newsAreaIsHidden) {

        $toggleNews.show();

        if ($mainArea.hasClass('col-8')) {
            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');
        }

        if (window.matchMedia('(max-width: 768px)').matches) {

            $toggleNews.removeClass("position-absolute");
            $toggleNews.attr('style', '');
            $toggleNews.addClass('container');

            $toggleNews.detach();
            $mainArea.prepend($toggleNews);

        } else {

            $toggleNews.addClass("position-absolute");
            $toggleNews.attr('style', 'top:25px;');
            $toggleNews.removeClass('container');

            $toggleNews.detach();
            $mainArea.append($toggleNews);

        } 

    } else {

        $toggleNews.hide();

        if (window.matchMedia('(max-width: 768px)').matches) {

            $toggleNewsBottom.show();

            if ($newsArea.is(':visible')) {
                $newsArea.hide();
                $mainNews.hide();
            }

            if ($mainArea.hasClass('col-8')) {
                $mainArea.removeClass('col-8');
                $mainArea.addClass('col-12');
            }

            if ($newsArea.is(':hidden')) {
                $newsAreaBottom.show();
                $mainNews.show();
            }

        } else {

            if ($newsArea.is(':hidden')) {
                $newsArea.show();
                $mainNews.show();
            }

            if ($mainArea.hasClass('col-12')) {
                $mainArea.removeClass('col-12');
                $mainArea.addClass('col-8');
            }

            if ($newsArea.is(':visible')) {
                $newsAreaBottom.hide();
                $mainNews.hide();
            }

        }
    }

}

export default MyResize;

//$(window).resize(MyResize);
//$(MyResize);