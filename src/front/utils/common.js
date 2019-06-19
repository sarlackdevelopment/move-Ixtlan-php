let $mainArea = $("#mainArea");

export const newsAreaIsHidden = () => {
    let $isPushed = $mainArea.attr("isPushed");
    return (($isPushed == undefined) || ($isPushed == "1"));
}