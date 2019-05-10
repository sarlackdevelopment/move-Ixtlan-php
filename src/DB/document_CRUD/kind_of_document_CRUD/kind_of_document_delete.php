<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем тип документа */
/*********************************************************************************************************/

$kindofdocument_id = $post['kindofdocument_id'];

if (isset($kindofdocument_id)) {

    $imgkindofdocument = R::findCollection('imgkindofdocument', 'kindofdocuments_id = ?', array($kindofdocument_id));
    while ($img_exhibition = $imgkindofdocument->next()) {
        R::trash($img_exhibition);
    }

    $kindofdocuments = R::load('kindofdocuments', $kindofdocument_id);
    R::trash($kindofdocuments);

}

header("Location: /Ixtlan-php/index.php");