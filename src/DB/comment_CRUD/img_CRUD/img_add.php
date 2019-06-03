<?php

require_once '../../../../configDB.php';

$post  = $_POST;
$files = $_FILES;

/*********************************************************************************************************/
/* Добавляем фото комментрия */
/*********************************************************************************************************/

$pagination_code = $post['pagination_code'];
$field_index     = $post['field_index'];

$ds           = DIRECTORY_SEPARATOR; 
$store_folder = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php';

if (!empty($files)) {

    if (isset($pagination_code) and isset($field_index)) {

        if (trim($pagination_code) != '' and trim($field_index) != '') {

            $current_comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

            $store_folder = $store_folder . $ds . 'images' . $ds . 'comments' . $ds . $pagination_code . $ds . $field_index . $ds . $file_name;

            if (!file_exists($store_folder)) {
                mkdir($store_folder, 0777, true);
            }

            $file_name      = $files['file']['name'];
            $temp_file_name = $files['file']['tmp_name'];  
            $target_file    = $store_folder . $ds.  $file_name;

            if (is_uploaded_file($temp_file_name)) {      
                move_uploaded_file($temp_file_name, $target_file);
            }

            $current_field   = 'photo' . $field_index;
            $current_comment->$current_field = 'images' . $ds . 'comments'. $ds . $pagination_code . $ds . $field_index . $ds . $file_name;;
            R::store($current_comment);

        }

    }

} 

header("Location: /Ixtlan-php/comments.php");