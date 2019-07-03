<?php

require_once '../../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$field_index = $json_obj->field_index;

if (isset($field_index)) {

    if (trim($field_index) != '') {

        $trash_element = R::findOne('commentsinfo', 'where id = ?', array($field_index));
        R::trash($trash_element);

    }
}