<?php

require_once '../../../../configDB.php';

include('../../../../src/controllers/Files_Controller.php');

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

            $comment      = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
            $comment_info = R::findOne('commentsinfo', 'where id = ?', array($field_index));

            if ($comment_info == null) {
                $comment_info = R::dispense('commentsinfo');
                // Остановился на фиктивной генерации id comments_info для добавления в путь сохраняемого файла
            } else {
                unlink($store_folder . $ds . $comment_info['path']);
            }

            $store_folder = $store_folder . $ds . 'images' . $ds . 'comments' . $ds . $pagination_code . $ds . $comment_info['id'];

            if (!file_exists($store_folder)) {
                mkdir($store_folder, 0777, true);
            }

            $file_name      = $files['file']['name'];
            $temp_file_name = $files['file']['tmp_name'];  
            $target_file    = $store_folder . $ds.  $file_name;

            if (is_uploaded_file($temp_file_name)) {      
                move_uploaded_file($temp_file_name, $target_file);
            }

            $comment_info->path = 'images' . $ds . 'comments'. $ds . $pagination_code . $ds . $comment_info['id'] . $ds . $file_name; 

            $comment->ownItemList[] = $comment_info;

            R::store($comment);

            

            /* $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

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

            $comment_photo = R::findOne('commentsinfo', 'where id = ?', array($field_index));
            if ($comment_photo == null) {
                $comment_photo = R::dispense('commentsinfo');
            }

            $comment_photo->path = 'images' . $ds . 'comments'. $ds . $pagination_code . $ds . $field_index . $ds . $file_name; 

            $comment->ownItemList[] = $comment_photo;

            R::store($comment); */ 

        }

    }

} 

header("Location: /Ixtlan-php/comments.php");