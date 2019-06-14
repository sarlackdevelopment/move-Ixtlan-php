let $toggleNews = $("#toggleNews");
//let $mainArea   = $('main');

const newsesStateManager = async ($direction) => {
 
    let $main = $('main');

    switch($direction) {

        case 'left':

            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');

            $main.addClass('position-relative');
            $toggleNews.show();

            $mainArea.attr("isPushed", "0");

            break;
      
        case 'right':
          
            $mainArea.removeClass('col-12');
            $mainArea.addClass('col-8');
            
            $main.removeClass('position-relative');
            $toggleNews.hide();

            $mainArea.attr("isPushed", "1");

            break;

        case 'bottom':

            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');

            $main.addClass('position-relative');
            $toggleNews.show();

            $mainArea.attr("isPushed", "0");

            break;
      
        case 'top':
          
            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');

            $mainArea.removeClass('position-relative');
            $toggleNews.hide();

            $mainArea.attr("isPushed", "1");

            break;

    }

}

const toggleNews = async () => {

    let $newsAreaIsHidden = newsAreaIsHidden();
    //let $buttonToggle     = $("#toggleNews");
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

                //$toggleNews.hide();
                //$toggleNewsBottom.show();

                $toggleNews.addClass("position-absolute");
                $toggleNews.attr('style', 'top:25px;');
                $toggleNews.removeClass('container');

                /* $toggleNews.detach();
                $mainArea.append($toggleNews); */ 

            })();

        }

    } else {

        if (window.matchMedia('(max-width: 768px)').matches) {

            $mainNews.show();

            await $newsAreaBottom.animate({top: 'toggle', opacity: "toggle"}, $delay);
            await newsesStateManager('top');

            //$mainNews.show();

            await (async () => {

                $toggleNews.hide();
                $toggleNewsBottom.show();

                /* $toggleNews.addClass("position-absolute");
                $toggleNews.attr('style', 'top:25px;');
                $toggleNews.removeClass('container');

                 $toggleNews.detach();
                $mainArea.append($toggleNews); */ 

            })();

        } else {

            $toggleNews.hide();

            await $newsArea.animate({right: 'toggle', opacity: "toggle"}, $delay);
            await newsesStateManager('right');
        }

    }

}

$('.toggleNews').click(() => toggleNews());