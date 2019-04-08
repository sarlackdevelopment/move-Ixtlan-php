<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем тип документа */
/*********************************************************************************************************/

$form_id = $post['form_id'];

if (isset($form_id)) {

    $imgkindofdocument = R::findCollection('imgkindofdocument', 'kindofdocuments_id = ?', array($form_id));
    while ($img_exhibition = $imgkindofdocument->next()) {
        R::trash($img_exhibition);
    }

    $kindofdocuments = R::load('kindofdocuments', $form_id);
    R::trash($kindofdocuments);

}

header("Location: /Ixtlan-php/index.php");