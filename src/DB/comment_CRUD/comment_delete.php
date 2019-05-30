<?php

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Удаляем отзыв на котенка */
/*********************************************************************************************************/

$pagination_code = $post['pagination_code'];

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

    }

}

header("Location: /Ixtlan-php/comments.php");