<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Добавляем текст комментрия */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$pagination_code = $json_obj->pagination_code;
$field_index     = $json_obj->field_index;
$caption_text    = $json_obj->caption_text;

if (trim($pagination_code) != '' and trim($field_index) != '' and trim($caption_text) != '') {

    $current_comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

    $current_field   = 'text' . $field_index;
    $current_comment->$current_field = $caption_text;
    R::store($current_comment);

}

$toastWindow = 
    "<div id='toastWindow' class='toast' data-delay='4000' style='position: fixed; bottom: 3em; right: 2em;'>
        <div class='toast-header'>
            <span style='color: Tomato;'>
                <i class='fas fa-bolt fa-lg'></i>
            </span>
            <strong class='ml-1 mr-auto'>Добавлен текст</strong>
            <small>11 mins ago</small>
            <button  type='button' class='ml-2 mb-1 close' data-dismiss='toast' aria-label='Close'>
                <span id='removeToast' aria-hidden='true'>&times;</span>
            </button>
        </div>
        <div class='toast-body'>
            Hello, world! This is a toast message. lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in ametlorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet lorem ipsum in amet
        </div>
    </div>";

header('Content-Type: application/x-javascript; charset=utf8');  
echo json_encode(array("toastWindow" => $toastWindow));