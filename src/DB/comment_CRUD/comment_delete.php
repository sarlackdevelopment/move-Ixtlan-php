<?php

require_once '../../../configDB.php';

include('../../../src/controllers/Files_Controller.php');

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем отзыв на котенка */
/*********************************************************************************************************/

$json_obj = json_decode(file_get_contents('php://input'));

$pagination_code = $json_obj->pagination_code;
$store_folder    = $_SERVER['DOCUMENT_ROOT'] . '/Ixtlan-php/images/comments/' . $pagination_code;

if (isset($pagination_code)) {

    if (trim($pagination_code) != '') {

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