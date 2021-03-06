<?php

require_once '../../../../configDB.php';
require_once '../../../local/utils.php';
require_once '../../../utils.php';
require_once '../../../../main_config.php';

if ( Utils::is_session_started() === FALSE ) session_start();

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем состояние */
/*********************************************************************************************************/

$name_of_state   = $post['name_of_state'];
$color_of_button = $post['color_of_button'];

if (isset($name_of_state) and isset($color_of_button)) {
    if ($name_of_state != '' and $color_of_button != '') {

        $states = R::dispense('states');

        $states->name   = $name_of_state;
        $states->color  = $color_of_button;
        $states->_local = UtilsLocal::currentLanguage()['short_caption'];

        R::store($states);

    }
}

MainConfig::root_redirect(
    array(
        'prom_path' => 'kitty.php', 
        'dev_path' => '/Ixtlan-php/kitty.php'
    )
);