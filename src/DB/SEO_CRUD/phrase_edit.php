<?php

require_once '../../../configDB.php';
//require_once '../../local/utils.php';
require_once '../../utils.php';
require_once '../../../main_config.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Редактируем фразу для семантического ядра */
/*********************************************************************************************************/

$id     = $post['id'];
$phrase = $post['phrase'];

if (isset($id) and isset($phrase)) {
    if (($id != '') and ($phrase != '')) {

        $exist_phrase = R::findOne('skr', 'where id = ?', array($id));
        $exist_phrase->body   = $phrase;
        R::store($exist_phrase);
        
    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);