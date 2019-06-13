let $mainArea = $("#mainArea");

const newsAreaIsHidden = () => {
    let $mainArea         = $("#mainArea");
    let $isPushed         = $mainArea.attr("isPushed");
    return (($isPushed == undefined) || ($isPushed == "1"));
}

const MyResize = () => {

    let $newsArea       = $("#newsArea");
    let $newsAreaBottom = $("#newsAreaBottom");
    let $mainNews       = $("#mainNews");

    $newsAreaIsHidden = newsAreaIsHidden();
    /*if ($newsAreaIsHidden) {
        $("#toggleNews").hide();
    } 
    
    else {
        $("#toggleNews").show();
    }*/

    if (!$newsAreaIsHidden) {

        $("#toggleNews").show();

        /* if ($newsArea.is(':visible')) {
            $newsArea.hide();
            $mainNews.hide();
        } */

        if ($mainArea.hasClass('col-8')) {
            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');
        }

        /* if ($newsArea.is(':hidden')) {
            $newsAreaBottom.show();
            $mainNews.show();
        } 
        
        if (window.matchMedia('(max-width: 768px)').matches) {

            $("#toggleNews").hide();

            if ($newsArea.is(':visible')) {
                $newsArea.hide();
                $mainNews.hide();
            }

            if ($newsArea.is(':hidden')) {
                $newsAreaBottom.show();
                $mainNews.show();
            }

        } */ 

    } else {

        $("#toggleNews").hide();

        if (window.matchMedia('(max-width: 768px)').matches) {

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

};

$(window).resize(MyResize);
$(MyResize);