let $toggleNews = $("#toggleNews");
let $main       = $('main');

const toggleLeftBottom = async () => {

    $mainArea.removeClass('col-8');
    $mainArea.addClass('col-12');

    $main.addClass('position-relative');
    $toggleNews.show();

    $mainArea.attr("isPushed", "0");

}

const toggleRight = async () => {

    $mainArea.removeClass('col-12');
    $mainArea.addClass('col-8');
            
    $main.removeClass('position-relative');
    $toggleNews.hide();

    $mainArea.attr("isPushed", "1");

}

const toggleTop = async () => {

    $mainArea.removeClass('col-8');
    $mainArea.addClass('col-12');

    $mainArea.removeClass('position-relative');
    $toggleNews.hide();

    $mainArea.attr("isPushed", "1");

}

const newsesStateManager = async ($direction) => {

    switch($direction) {

        case 'left':

            toggleLeftBottom();

            break;
      
        case 'right':

            toggleRight();

            break;

        case 'bottom':

            toggleLeftBottom();

            break;
      
        case 'top':

            toggleTop();

            break;

    }

}

const toggleNews = async ($newsAreaIsHidden) => {

    let $toggleNewsBottom = $("#toggleNewsBottom");
    let $mainNews         = $("#mainNews");
    let $newsAreaBottom   = $("#newsAreaBottom");
    let $newsArea         = $("#newsArea");
    let $delay            = 150;

    if ($newsAreaIsHidden) {

        if (window.matchMedia('(max-width: 768px)').matches) {

            await $newsAreaBottom.animate({bottom: 'toggle', opacity: "toggle"}, $delay);
            await newsesStateManager('bottom');

            await (async () => { 
                $mainNews.hide();

                $toggleNewsBottom.hide();

                $toggleNews.removeClass("position-absolute");
                $toggleNews.attr('style', '');
                $toggleNews.addClass('container');

                $toggleNews.detach();
                $mainArea.prepend($toggleNews);
            })();

        } else {

            await $newsArea.animate({left: 'toggle', opacity: "toggle"}, $delay);
            await newsesStateManager('left');

            await (async () => {

                $toggleNews.addClass("position-absolute");
                $toggleNews.attr('style', 'top:25px;');
                $toggleNews.removeClass('container'); 

            })();

        }

    } else {

        if (window.matchMedia('(max-width: 768px)').matches) {

            await $newsAreaBottom.animate({top: 'toggle', opacity: "toggle"}, $delay);
            await newsesStateManager('top');

            await (async () => {

                $mainNews.show();

                $toggleNews.hide();
                $toggleNewsBottom.show();

            })();

        } else {

            await $newsArea.animate({right: 'toggle', opacity: "toggle"}, $delay);
            await newsesStateManager('right');
            await (async () => $toggleNews.hide())();
        }

    }

}

$('.toggleNews').click(() => toggleNews(newsAreaIsHidden()));

/* $(() => {
    if (document.location.href.search('/comments/')) {
        toggleNews(true)
    } 
}); */