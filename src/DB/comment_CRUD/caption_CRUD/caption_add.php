<?php

require_once '../../../../configDB.php';

$post = $_POST;

$pagination_code = $post['pagination_code'];
$field_index     = $post['field_index'];
$caption_text    = $post['caption_text'];

if ((isset($pagination_code)) and (isset($field_index)) and (isset($caption_text))) {

    if ((trim($pagination_code) != '') and (trim($field_index) != '') and (trim($caption_text) != '')) {
        
        $current_comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        $current_field   = 'caption' . $field_index;

        $current_comment->$current_field = $caption_text;
        R::store($current_comment);

    }
}