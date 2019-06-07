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