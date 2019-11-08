<?php

require_once '../../../configDB.php';
require_once '../../local/utils.php';
require_once '../../utils.php';
require_once '../../../main_config.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем фразу для семантического ядра */
/*********************************************************************************************************/

$phrase = $post['phrase'];

if (isset($phrase)) {
    if (($phrase != '')) {

        $new_phrase = R::dispense('skr');

        $new_phrase->body   = $phrase;
        $new_phrase->_local = UtilsLocal::currentLanguage()['short_caption'];

        R::store($new_phrase);

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