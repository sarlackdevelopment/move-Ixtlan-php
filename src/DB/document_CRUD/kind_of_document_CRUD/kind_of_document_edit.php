<?php

require '../../../../libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

$post = $_POST;
//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

/*********************************************************************************************************/
/* Редактируем краткое описание типа документа */
/*********************************************************************************************************/

$form_id           = $post['form_id'];
$short_descryption = $post['short_descryption'];

if (isset($form_id)) {

    if (isset($short_descryption)) { 

        if (trim($short_descryption) != '') {

            $kindofdocuments = R::load('kindofdocuments', $form_id);
            $kindofdocuments->short_descryption = $short_descryption;
            R::store($kindofdocuments);

        }
    
    }

}

header("Location: /Ixtlan-php/index.php");