<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Добавляем текст комментрия */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$pagination_code = $json_obj->pagination_code;
$field_index     = $json_obj->field_index;
$current_text    = $json_obj->current_text;

if (trim($pagination_code) != '' and trim($field_index) != '' and trim($current_text) != '') {

    $current_comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

    $current_field   = 'text' . $field_index;
    $current_comment->$current_field = $current_text;
    R::store($current_comment);

}