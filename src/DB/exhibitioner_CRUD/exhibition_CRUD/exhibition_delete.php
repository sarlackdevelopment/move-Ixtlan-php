<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем выставку */
/*********************************************************************************************************/

$form_id = $post['form_id'];

if (isset($form_id)) {

    $imgexhibitions = R::findCollection('imgexhibitions', 'exhibitions_id = ?', array($form_id));
    while ($img_exhibition = $imgexhibitions->next()) {
        R::trash($img_exhibition);
    }

    $exhibitions_table = R::load('exhibitions', $form_id);
    R::trash($exhibitions_table);

}

header("Location: /Ixtlan-php/index.php");