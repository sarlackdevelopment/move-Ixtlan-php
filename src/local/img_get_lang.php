<?php

require_once '../../configDB.php';

/*********************************************************************************************************/
/* Получаем иконку языка с сервера */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));
$lang_id  = $json_obj->lang_id;

$result = [];
$ds     = DIRECTORY_SEPARATOR;

if ((isset($lang_id)) and ($lang_id !== '')) {

    $current_language = R::findOne('languages', 'where id = ?', array($lang_id));

    if ($current_language['icon_path'] == null) {
        $result[] = array(
            'id'  => $current_language['id'],
            'url' => $current_language['icon_path']);
    } else {
        $absolutePath = $_SERVER['DOCUMENT_ROOT'] . $ds . 'Ixtlan-php' . $ds . $current_language['icon_path'];
    
        $result[] = array(
            'id'            => $current_language['id'],
            'name'          => basename($absolutePath),
            'size'          => filesize($absolutePath),
            'initThumbnail' => true, 
            'url'           => $current_language['icon_path']);
    }
}
  
echo json_encode($result);