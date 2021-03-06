<?php

require_once '../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

$language_id           = $json_obj->language_id;
$language_caption      = $json_obj->language_caption;
$language_sort_caption = $json_obj->language_sort_caption;

if ((isset($language_caption)) and (isset($language_sort_caption))) {
    if (($language_caption !== '') and ($language_sort_caption !== '')) {

        if ($language_id === '0') {
            $language = R::dispense('languages');
        } else {
            $language = R::findOne('languages', 'where id = ?', array($language_id));
        }

        $language->caption      = $language_caption;
        $language->shortCaption = $language_sort_caption;

        R::store($language);

        echo json_encode($language['id']);

    } else {
        echo json_encode(1);
    }
} else {
    echo json_encode(1);
}

