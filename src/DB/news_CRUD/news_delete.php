<?php

require_once '../../../configDB.php';

$json_obj = json_decode(file_get_contents('php://input'));

//$news_id = $json_obj->news_index;
$id = $json_obj->id;

/*********************************************************************************************************/
/* Удаляем обычную новость */
/*********************************************************************************************************/

if (isset($id)) {

    R::trash(R::findOne('news', 'where id = ?', array($id)));
    //$news_table = R::load('news', $news_id);
    //R::trash($news_table);

}