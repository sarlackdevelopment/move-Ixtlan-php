let $buttonToggle = $("#toggleNews");

const newsesStateManager = ($direction) => {
 
    let $main = $('main');

    if ($direction == 'left') {

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

    }

}

const toggleNews = () => {

    let $newsAreaIsHidden = newsAreaIsHidden();
    let $buttonToggle     = $("#toggleNews");

    if ($newsAreaIsHidden) {

        if (window.matchMedia('(max-width: 768px)').matches) {

            $("#mainNews").hide();

            $("#newsAreaBottom").animate({bottom: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('bottom');
            });

        } else {

            $("#newsArea").animate({left: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('left');
            });

        }

    } else {

        if (window.matchMedia('(max-width: 768px)').matches) {

            $("#mainNews").show();

            $("#newsAreaBottom").animate({top: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('top');
            });

        } else {

            $buttonToggle.hide();

            $("#newsArea").animate({right: 'toggle', opacity: "toggle"}, 350, () => {
                newsesStateManager('right');
            });
        }

    }

}

$('.toggleNews').click(() => toggleNews());