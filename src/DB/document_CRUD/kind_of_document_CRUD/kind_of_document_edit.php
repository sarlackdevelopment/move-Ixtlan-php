<?php

require_once '../../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем краткое описание типа документа */
/*********************************************************************************************************/

$kind_of_document_id = $post['kind_of_document_id'];
$short_descryption   = $post['short_descryption'];

if (isset($kind_of_document_id)) {

    $kindofdocuments = R::findOne('kindofdocuments', 'where id = ?', array($kind_of_document_id));

    if ($kindofdocuments) {

        if (isset($short_descryption) and ($catsadult->short_descryption != $short_descryption)) {
            $kindofdocuments->short_descryption = $short_descryption;   
        }

        R::store($kindofdocuments);

    }

}

header('Refresh: 3; url=http://move-ixtlan.ru/');
//header("Location: /Ixtlan-php/index.php");