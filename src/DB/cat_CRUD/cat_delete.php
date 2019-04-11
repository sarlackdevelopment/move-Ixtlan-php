<?php

require '../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем (ну вдруг неправильно добавили...) */
/*********************************************************************************************************/

$form_id = $post['form_id'];

if (isset($form_id)) {

    $imgcatsadult = R::findCollection('imgcatsadult', 'catsadult_id = ?', array($form_id));
    while ($img_catsadult = $imgcatsadult->next()) {
        R::trash($img_catsadult);
    }

    $catsadult = R::load('catsadult', $form_id);
    R::trash($catsadult);

}

header("Location: /Ixtlan-php/cats_females.php");