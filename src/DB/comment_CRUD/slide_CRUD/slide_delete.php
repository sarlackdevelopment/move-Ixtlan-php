<?php

require_once '../../../../configDB.php';

include('../../../../src/controllers/Files_Controller.php');

$json_obj = json_decode(file_get_contents('php://input'));

$field_index     = $json_obj->field_index;
$pagination_code = $json_obj->pagination_code;

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

if ((isset($pagination_code)) and (isset($field_index)))  {

    if ((trim($pagination_code) != '') and (trim($field_index) != '')) {

        $trash_element = R::findOne('commentsinfo', 'where id = ?', array($field_index));
        R::trash($trash_element);

        $store_folder = $store_folder . $ds . 'images' . $ds . 'comments' . $ds . $pagination_code . $ds . $field_index;

        if (file_exists($store_folder)) {
            $files_controller = new Files_Controller();
            $files_controller->recursiveRemoveDir($store_folder);
        }

    }
}