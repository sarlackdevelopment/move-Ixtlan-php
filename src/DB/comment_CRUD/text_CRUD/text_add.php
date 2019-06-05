<?php

require_once '../../../../configDB.php';

$post  = $_POST;

/*********************************************************************************************************/
/* Добавляем текст комментрия */
/*********************************************************************************************************/

$pagination_code = $post['pagination_code'];
$field_index     = $post['field_index'];

if (isset($pagination_code) and isset($field_index)) {

    if (trim($pagination_code) != '' and trim($field_index) != '') {

        $log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';
        $info = "pagination_code = " . $pagination_code . "; field_index = " . $field_index;
        file_put_contents($log, $info, FILE_APPEND);

    }
}

header("Location: /Ixtlan-php/comments.php?p=" . $pagination_code);