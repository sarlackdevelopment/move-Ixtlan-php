<?php

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем отзыв на котенка */
/*********************************************************************************************************/

$comment_text = $post['comment_text'];
$kitty_id     = $post['choice_kitty'];

if ((isset($comment_text)) and (isset($kitty_id))) {

    if ((trim($comment_text) != '') and (trim($kitty_id) != '')) {

        $comments = R::dispense('comments');
        $comments->comment_text = $comment_text;

        $kitty = R::findOne('kitty', 'where id = ?', array($kitty_id));
        $comments->ownKittyList[] = $kitty;

        R::store($comments);

    }

}

header("Location: /Ixtlan-php/comments.php");