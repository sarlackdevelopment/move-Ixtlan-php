<?php

require_once '../../../../configDB.php';

require_once '../../../local/utils.php';
require_once '../../../utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

/*********************************************************************************************************/
/* Добавляем текст комментрия */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$pagination_code = $json_obj->pagination_code;
$field_index     = $json_obj->field_index;
$current_text    = $json_obj->current_text;

if (trim($pagination_code) != '' and trim($field_index) != '' and trim($current_text) != '') {

    $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
    if ($comment != null) {

        $comment_info = R::findOne('commentsinfo', 'id = ?', array($field_index));
        $comment_info->text   = $current_text; 
        $comment_info->_local = UtilsLocal::currentLanguage()['short_caption'];

        R::store($comment_info);

    }

}