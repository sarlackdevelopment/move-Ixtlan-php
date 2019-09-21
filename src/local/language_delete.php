<?php

require_once '../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$language_id = $json_obj->language_id;

if ((isset($language_id)) and ($language_id !== '')) {
    R::trash(R::findOne('languages', 'where id = ?', array($language_id)));
}