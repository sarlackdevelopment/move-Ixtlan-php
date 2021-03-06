<?php

require_once '../../../configDB.php';
require_once '../../../main_config.php';

include('../../../src/controllers/Files_Controller.php');

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем отзыв на котенка */
/*********************************************************************************************************/

$pagination_code = $post['pagination_code'];

if (isset($pagination_code)) {

    if (trim($pagination_code) != '') {

        $ds = DIRECTORY_SEPARATOR; 

        $store_folder = MainConfig::root_store() . $ds . 'images' . $ds . 'comments' . $ds . $pagination_code;

        // Непосредственное удаление
        $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        R::trash($comment);

        // Апдейт всех кодов пагинации (начиная с удаляемого элемента) на минус один
        $imgkitty = R::getAll(
        'UPDATE comments AS up_table
            JOIN (
                SELECT id AS id, pagination_code - 1 AS pagination_code FROM comments WHERE pagination_code > ?
            ) inner_table
                ON inner_table.id = up_table.id
            SET up_table.pagination_code = inner_table.pagination_code', array($pagination_code));

        // Удаление связной информации - с фото с диска
        if (file_exists($store_folder)) {
            $files_controller = new Files_Controller();
            $files_controller->recursiveRemoveDir($store_folder);
        }

    }

}

MainConfig::root_redirect(
    array(
        'prom_path' => 'comments.php', 
        'dev_path' => '/Ixtlan-php/comments.php'
    )
);