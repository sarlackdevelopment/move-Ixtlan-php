<?php

//require '../../../../libs/rb/rb-mysql.php';
//R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

require_once '../../../../configDB.php';

$post = $_POST;
//$log  = '/opt/lampp/htdocs/Ixtlan-php/debug.txt';

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

/*if (isset($form_id)) {

    if (isset($short_descryption)) { 

        if (trim($short_descryption) != '') {

            $kindofdocuments = R::load('kindofdocuments', $form_id);
            $kindofdocuments->short_descryption = $short_descryption;
            R::store($kindofdocuments);

        }
    
    }

}*/

header("Location: /Ixtlan-php/index.php");