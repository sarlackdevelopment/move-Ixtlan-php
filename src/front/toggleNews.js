let $buttonToggle = $("#toggleNews");

const newsesStateManager = async ($direction) => {
 
    let $main = $('main');

    switch($direction) {

        case 'left':

            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');

            $main.addClass('position-relative');
            $buttonToggle.show();

            $mainArea.attr("isPushed", "0");

            break;
      
        case 'right':
          
            $mainArea.removeClass('col-12');
            $mainArea.addClass('col-8');
            
            $main.removeClass('position-relative');
            $buttonToggle.hide();

            $mainArea.attr("isPushed", "1");

            break;
      
        case 'top':
          
            $mainArea.removeClass('col-8');
            $mainArea.addClass('col-12');

            $main.removeClass('position-relative');
            $buttonToggle.hide();

            $mainArea.attr("isPushed", "1");

            break;

    }

    /* if ($direction == 'left') {

        $mainArea.removeClass('col-8');
        $mainArea.addClass('col-12');

        $main.addClass('position-relative');
        $buttonToggle.show();

        $mainArea.attr("isPushed", "0");

    } else if ($direction == 'right') {

        $mainArea.removeClass('col-12');
        $mainArea.addClass('col-8');
            
        $main.removeClass('position-relative');
        $buttonToggle.hide();

        $mainArea.attr("isPushed", "1");

    } else if ($direction == 'top') {

        $mainArea.removeClass('col-8');
        $mainArea.addClass('col-12');

        $main.removeClass('position-relative');
        $buttonToggle.hide();

        $mainArea.attr("isPushed", "1");

    } */

}

const toggleNews = () => {

    let $newsAreaIsHidden = newsAreaIsHidden();
    let $buttonToggle     = $("#toggleNews");

    if ($newsAreaIsHidden) {

        if (window.matchMedia('(max-width: 768px)').matches) {

            $("#mainNews").hide();

            /* $("#newsAreaBottom").animate({bottom: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('bottom');
            }); */

            await $("#newsAreaBottom").animate({bottom: 'toggle', opacity: "toggle"}, 350);
            await newsesStateManager('bottom');

        } else {

            /* $("#newsArea").animate({left: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('left');
            }); */

            await $("#newsArea").animate({left: 'toggle', opacity: "toggle"}, 350);
            await newsesStateManager('left');

        }

    } else {

        if (window.matchMedia('(max-width: 768px)').matches) {

            $("#mainNews").show();

            /* $("#newsAreaBottom").animate({top: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('top');
            }); */

            await $("#newsAreaBottom").animate({top: 'toggle', opacity: "toggle"}, 350);
            await newsesStateManager('top');

        } else {

            $buttonToggle.hide();

            /* $("#newsArea").animate({right: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('right');
            }); */

            await $("#newsArea").animate({right: 'toggle', opacity: "toggle"}, 350);
            await newsesStateManager('right');
        }

    }

}

$('.toggleNews').click(() => toggleNews());