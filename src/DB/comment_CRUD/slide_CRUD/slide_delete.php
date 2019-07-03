<?php

require_once '../../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

//$pagination_code = $json_obj->pagination_code;
$field_index     = $json_obj->field_index;
//$slide_toggle    = $json_obj->slide_toggle;

//if ((isset($pagination_code)) and (isset($field_index))) {
if (isset($field_index)) {

    //if ((trim($pagination_code) != '') and (trim($field_index) != '')) {
    if (trim($field_index) != '') {

        $trash_element = R::findOne('commentsinfo', 'where id = ?', array($field_index));
        R::trash($trash_element);
        
        /* $current_comment    = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        $slide_toggle_field = 'slideToggle' . $field_index;

        $current_comment->$slide_toggle_field = $slide_toggle;
        R::store($current_comment); */



    }
}