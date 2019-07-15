<?php

require_once '../../../../configDB.php';

/*********************************************************************************************************/
/* Получаем список выставок с сервера */
/*********************************************************************************************************/

$result = [];

$exhibitions = R::findCollection('exhibitions');

while ($exhibition = $exhibitions->next()) {
    $result[] = array('id' => $exhibition['id']);   
}

header('Content-Type: application/x-javascript; charset=utf8');  
echo json_encode($result);