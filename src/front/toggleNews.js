let $buttonToggle = $("#toggleNews");

const newsesStateManager = ($direction) => {
 
    let $main = $('main');

    if ($direction == 'left') {

        $mainArea.removeClass('col-8');
        $mainArea.addClass('col-12');

        $main.addClass('position-relative');
        $buttonToggle.show();

        $mainArea.attr("isPushed", "0");

    } else {

        $mainArea.removeClass('col-12');
        $mainArea.addClass('col-8');
            
        $main.removeClass('position-relative');
        $buttonToggle.hide();

        $mainArea.attr("isPushed", "1");

    }

}

const toggleNews = () => {

    let $newsAreaIsHidden = newsAreaIsHidden();
    let $buttonToggle     = $("#toggleNews");

    if ($newsAreaIsHidden) {

        $("#newsArea").animate({left: 'toggle', opacity: "toggle"}, 350, () => {
            newsesStateManager('left');
        });

    } else {

        $buttonToggle.hide();

        $("#newsArea").animate({right: 'toggle', opacity: "toggle"}, 350, () => {
            newsesStateManager('right');
        });

    }

}

$('.toggleNews').click(() => toggleNews());