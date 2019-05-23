<?php

require_once '../../../configDB.php';

$post = $_POST;

/*********************************************************************************************************/
/* Добавляем отзыв на котенка */
/*********************************************************************************************************/

$comment_text = $post['comment_text'];

if (isset($comment_text)) {

    if (trim($comment_text) != '') {

        $comments = R::dispense('comments');

        $comments->comment_text = $comment_text;

        R::store($comments);

    }

}

header("Location: /Ixtlan-php/comments.php");