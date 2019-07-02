<?php

require_once '../../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$pagination_code = $json_obj->pagination_code;
//$field_index     = $json_obj->field_index;
$current_text    = $json_obj->current_text;

if ((isset($pagination_code)) and (isset($current_text))) {

    if ((trim($pagination_code) != '') and (trim($current_text) != '')) {
        
        $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        //$current_field   = 'caption' . $field_index;

        //$comment->$current_field = $current_text;
        

        $comment_caption = R::findOne('commentscaption', 'where comments_id = ?', array($comment['id']));
        if ($comment_caption == null) {
            $comment_caption = R::dispense('commentscaption');
        }

        $comment_caption->value = $current_text; 
        
        $comment->ownItemList[] = $comment_caption;

        R::store($comment);

    }
}