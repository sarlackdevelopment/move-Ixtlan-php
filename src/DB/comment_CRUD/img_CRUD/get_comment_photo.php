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
        //$comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

        $imgkitty = R::getAll(
            'SELECT comments.path AS imgpath 
                FROM commentsPhoto AS photo 
                    INNER JOIN comments AS comments
                        ON comments.id = photo.comments_id');
                    
        foreach ($imgkitty as $currentimg) {

            $absolutePath = $_SERVER['DOCUMENT_ROOT'] . $ds . 'Ixtlan-php' . $ds . $imgkitty['imgpath']; 

            $result[] = array(
                'name'          => basename($absolutePath),
                'size'          => filesize($absolutePath),
                'initThumbnail' => true, 
                'url'           => $imgkitty['imgpath']);
            
        }
        
        

        /* while (true) {

            $index++;
            $relativePath = $comment['photo' . $index];

            if ($relativePath == null) {
                break;
            }

            $absolutePath = $_SERVER['DOCUMENT_ROOT'] . $ds . 'Ixtlan-php' . $ds . $relativePath;

            $result[] = array(
                'name'          => basename($absolutePath),
                'size'          => filesize($absolutePath),
                'initThumbnail' => true, 
                'url'           => $relativePath);

        } */

    }

}

header('Content-Type: application/x-javascript; charset=utf8');  
echo json_encode($result);