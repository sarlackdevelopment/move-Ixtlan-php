<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Добавляем текст комментрия */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$pagination_code = $json_obj->pagination_code;
//$field_index     = $json_obj->field_index;
$current_text    = $json_obj->current_text;

if (trim($pagination_code) != '' and trim($current_text) != '') {

    $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

    /* $current_field   = 'text' . $field_index;
    $current_comment->$current_field = $current_text;
    R::store($current_comment); */

    $comment_text = R::findOne('commentstext', 'where comments_id = ?', array($comment['id']));
    if ($comment_text == null) {
        $comment_text = R::dispense('commentstext');
    }

    $comment_text->value = $current_text; 
        
    $comment->ownItemList[] = $comment_text;

    R::store($comment);

}