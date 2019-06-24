<?php

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем отзыв на котенка */
/*********************************************************************************************************/

$kitty_id        = $post['choice_kitty'];
$pagination_code = $post['pagination_code'];

if ((isset($kitty_id)) and (isset($pagination_code))) {

    if ((trim($kitty_id) != '') and (trim($pagination_code) != '')) {

        $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        if ($comment == null) {
            $comment = R::dispense('comments');
        } 

        $kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));
        $comment->ownKittyList[] = $kitty;

        $comment->pagination_code = $pagination_code;

        R::store($comment);

    }

}

header("Location: /Ixtlan-php/comments.php?p=$pagination_code");