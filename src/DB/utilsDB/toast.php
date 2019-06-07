<?php

require_once '../../../configDB.php';

/*********************************************************************************************************/
/* Формируем всплывающее окно */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$pagination_code = $json_obj->pagination_code;
$caption_text    = $json_obj->caption_text;

if ($caption_text == '') {
    $body_text = 'Нужно задать какой-то текст';
    $icon      = 
    '<span style="color: Tomato;">
        <i class="fas fa-exclamation-circle"></i>
    </span>';
} else { 

    $kitty = R::getRow('SELECT kitty.name AS name FROM kitty AS kitty 
        INNER JOIN comments AS comments 
            ON (comments.pagination_code = ?) AND comments.id = kitty.comments_id LIMIT 1', array($pagination_code));

    $body_text = 'Добавлен текст в отзыв по котенку с именем ' . $kitty['name'];
    $icon = 
    '<span style="color: Tomato;">
        <i class="fas fa-exclamation-circle"></i>
    </span>';
}

$toastWindow = 
"<div id='toastWindow' class='toast border border-info' data-delay='4000' style='position: fixed; bottom: 3em; right: 2em; width: 20em;'>
    <div class='toast-header'>
        " . $icon . "
        <strong class='ml-1 mr-auto text-primary'>Оповещение</strong>
        <small>rigth now</small>
        <button type='button' class='ml-2 mb-1 close' data-dismiss='toast' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
        </button>
    </div>
    <div class='toast-body text-primary'>
        " . $body_text . "
    </div>
</div>";

header('Content-Type: application/x-javascript; charset=utf8');  
echo json_encode(array("toastWindow" => $toastWindow));