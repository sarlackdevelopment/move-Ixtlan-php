<?php

require_once '../../../configDB.php';
require_once '../../../main_config.php';

$post = $_POST;

/*********************************************************************************************************/
/* Перемещаем новость в архив (либо возврщаем из архива) */
/*********************************************************************************************************/

$news_id = $post['news_id'];

$in_archive = isset($post['in_archive']);
$in_main    = isset($post['in_main']);

if (isset($news_id)) {

    if ($in_archive or $in_main) {

        $news_table = R::findOne('news', 'where id = ?', array($news_id));

        if ($in_archive) {      
            $news_table->archive = true;     
        }
        if ($in_main) {      
            $news_table->archive = false;     
        }

        R::store($news_table);

    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => '', 
        'dev_path' => '/Ixtlan-php/index.php'
    )
);