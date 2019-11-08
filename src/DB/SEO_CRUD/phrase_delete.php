<?php

require_once '../../../configDB.php';
require_once '../../utils.php';
require_once '../../../main_config.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем фразу для семантического ядра */
/*********************************************************************************************************/

$id = $post['id'];

if (isset($id)) {
    if (($id != '')) {

        R::trash(R::findOne('skr', 'where id = ?', array($id)));

        // Для обновления кеша
        $_SESSION['skr_cash'] = null;
        
    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);