<?php

require_once '../../configDB.php';

/*********************************************************************************************************/
/* Получаем список изображений языков с сервера */
/*********************************************************************************************************/

$result = [];

$json_obj = json_decode(file_get_contents('php://input'));

$ds = DIRECTORY_SEPARATOR;

$languages = R::findCollection('languages');

while ($language = $languages->next()) {

    if ($img['main_photo'] == null) {

        $result[] = array(
            'id'       => $img['id'],
            'brood_id' => $img['broods_id'],
            'url'      => $img['main_photo']);

    } else {
        $absolutePath = $_SERVER['DOCUMENT_ROOT'] . $ds . 'Ixtlan-php' . $ds . $img['main_photo'];
    
        $result[] = array(
            'id'            => $img['id'],
            'brood_id'      => $img['broods_id'],
            'name'          => basename($absolutePath),
            'size'          => filesize($absolutePath),
            'initThumbnail' => true, 
            'url'           => $img['main_photo']);
    }

}
  
echo json_encode($result);