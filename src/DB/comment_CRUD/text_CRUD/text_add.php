<?php

require_once '../../../../configDB.php';

//$post  = $_POST;

/*********************************************************************************************************/
/* Добавляем текст комментрия */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
//file_put_contents($log, $json_obj->pagination_code, FILE_APPEND);

$pagination_code = $json_obj->pagination_code;
$field_index     = $json_obj->field_index;

//if (isset($pagination_code) and isset($field_index)) {

    if (trim($pagination_code) != '' and trim($field_index) != '') {

        $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
        $info = "pagination_code = " . $pagination_code . "; field_index = " . $field_index;
        file_put_contents($log, $info, FILE_APPEND);

    }
//} 

//header("Location: /Ixtlan-php/comments.php?p=" . $pagination_code);
//header("Location: /Ixtlan-php/comments.php?p=2");