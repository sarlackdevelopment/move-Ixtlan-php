<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Получаем список файлов с сервера */
/*********************************************************************************************************/

$result = [];

$json_obj = json_decode(file_get_contents('php://input'));
$pagination_code = $json_obj->pagination_code;

if (isset($pagination_code)) {

    if ($pagination_code != '') {

        $ds      = DIRECTORY_SEPARATOR;
        $index   = 0;

        $imgkitty = R::getAll(
        'SELECT
            info.path AS path
        FROM comments AS comments 
            INNER JOIN commentsinfo AS info
                ON (comments.pagination_code = ?) 
                    AND comments.id = info.comments_id', array($pagination_code));
                    
        foreach ($imgkitty as $currentimg) {

            $absolutePath = $_SERVER['DOCUMENT_ROOT'] . $ds . 'Ixtlan-php' . $ds . $currentimg['path']; 

            $result[] = array(
                'name'          => basename($absolutePath),
                'size'          => filesize($absolutePath),
                'initThumbnail' => true, 
                'url'           => $currentimg['path']);
            
        }

    }

}

header('Content-Type: application/x-javascript; charset=utf8');  
echo json_encode($result);