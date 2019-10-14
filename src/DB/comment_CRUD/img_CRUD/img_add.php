<?php

require_once '../../../../configDB.php';

require_once '../../../local/utils.php';
require_once '../../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

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
                $comment_info->_local = UtilsLocal::currentLanguage()['short_caption'];
                R::store($comment_info);
            }

            $store_folder = $store_folder . $ds . 'images' . $ds . 'comments' . $ds . $pagination_code . $ds . $comment_info['id'];

            if (file_exists($store_folder)) {
                $files_controller = new Files_Controller();
                $files_controller->recursiveRemoveDir($store_folder);
            }

            mkdir($store_folder, 0777, true);

            $file_name      = $files['file']['name'];
            $temp_file_name = $files['file']['tmp_name'];  
            $target_file    = $store_folder . $ds.  $file_name;

            if (is_uploaded_file($temp_file_name)) {      
                move_uploaded_file($temp_file_name, $target_file);
            }

            $comment_info->path = 'images' . $ds . 'comments'. $ds . $pagination_code . $ds . $comment_info['id'] . $ds . $file_name; 

            $comment->ownItemList[] = $comment_info;

            R::store($comment); 

        }

    }

} 

header("Location: /Ixtlan-php/comments.php");