<?php

class Commentor {

    private $img_controller;

    public function get() {
        return $this->img_controller;
    }

    public function set($img_controller) {
        $this->img_controller = $img_controller;
    }

    function __construct() {
        $this->img_controller = new Img_Controller();
    }

    private function have_Rules() {
        return true;
    }

    private function show_add_comment_form($pagination_code) {

        if (!$this->have_Rules()) {
            echo '';
        } else {

            $countKittyWithoutComments = R::count('kitty', 'where comments_id is null');
            $countKittyWithComments    = R::count('kitty', 'where not (comments_id is null)');       

            if ($countKittyWithoutComments == 0) {
                echo '';
            } else {
                echo 
                '<button class="btn btn-block btn-outline-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_comment" aria-expanded="false" aria-controls="add_cat_comment">
                    Добавить новый отзыв
                </button>

                <div id="add_cat_comment" class="collapse">

                    <form action="/Ixtlan-php/src/DB/comment_CRUD/comment_add.php" method="post">

                        <input type="hidden" name="pagination_code" value="' . ($countKittyWithComments + 1) . '">

                        ' . $this->choice_kitty() . '

                        <button class="btn btn-info btn-sm btn-block my-1" type="submit">Сохранить</button>

                    </form>

                </div>'; 
                
            }
            
        } 

    }

    private function show_add_edit_form($pagination_code) {

        if (!$this->have_Rules()) {
            echo '';
        } else {

            $countKittyWithoutComments = R::count('kitty', 'where comments_id is null');
            $countKittyWithComments    = R::count('kitty', 'where not (comments_id is null)');       

            if ($countKittyWithoutComments == 0) {
                echo '';
            } else {
                echo 
                '<button class="btn btn-block my-1 btn-outline-info" type="button" data-toggle="collapse" data-target="#edit_cat_comment" aria-expanded="false" aria-controls="edit_cat_comment">
                     Редактировать текущий отзыв
                </button>

                <div id="edit_cat_comment" class="collapse">

                    ' . $this->show_dropzones($pagination_code) . $this->show_texts($pagination_code) . '

                </div>'; 
                
            }
            
        } 

    }

    // + Отображение дропзон выбора таблиц

    private function show_dropzones($pagination_code) {        

        $result = '<div class="container">
            <div class="row">
                <div class="col my-1">
                    ' . $this->img_controller->show_img_Editor_Form($pagination_code . '1', 'Фото №1', '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php') 
                    . $this->get_modal_add_caption_form($pagination_code, '1') . '
                </div>
                <div class="col my-1">
                    ' . $this->img_controller->show_img_Editor_Form($pagination_code . '2', 'Фото №2', '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php')
                    . $this->get_modal_add_caption_form($pagination_code, '2') . '
                </div>
            </div>
            <div class="row">
                <div class="col my-1">
                    ' . $this->img_controller->show_img_Editor_Form($pagination_code . '3', 'Фото №4', '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php')
                    . $this->get_modal_add_caption_form($pagination_code, '3') . '
                </div>
                <div class="col my-1">
                    ' . $this->img_controller->show_img_Editor_Form($pagination_code . '4', 'Фото №5', '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php')
                    . $this->get_modal_add_caption_form($pagination_code, '4') . '
                </div>
            </div>
        </div>';

        $current_comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        if ($current_comment == null) {
            return '';
        } else {
            return $result;
        }

    }

    private function get_modal_add_caption_form($pagination_code, $field_index) {

        $caption_id = $pagination_code . '_' . $field_index;

        return
        '<div class="modal fade" id="modalAddCaption' . $caption_id . '" tabindex="-1" role="dialog" aria-labelledby="modalAddCaptionTitle' . $caption_id . '" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Добавление комментария</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <label for="caption' . $caption_id . '">Здесь можно оставить комментарий под картинкой.</label>
                        <textarea id="caption_text' . $caption_id . '" name="caption' . $caption_id . '" class="form-control" rows="3" required></textarea>
                    </div>
                    <div class="modal-footer">
                        <button id="addCaption' . $caption_id . '" type="button" class="btn btn-primary" data-dismiss="modal">Сохранить</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // - Отображение дропзон выбора таблиц

    // + Текстовки под отзывы

    private function show_texts($pagination_code) {        

        $result = 
        '<div class="container">
            <div class="row">
                <div class="col my-1">
                    ' . $this->show_content_form_text($pagination_code, '1') . '
                </div>
                <div class="col my-1">
                    ' . $this->show_content_form_text($pagination_code, '2') . '
                </div>
            </div>
            <div class="row">
                <div class="col my-1">
                    ' . $this->show_content_form_text($pagination_code, '3') . '
                </div>
            </div>
        </div>';

        $current_comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        if ($current_comment == null) {
            return '';
        } else {
            return $result;
        }

    }

    private function show_content_form_text($pagination_code, $field_index) {

        $button_id = $pagination_code . '_' . $field_index;

        return
        '<span class="bg-info d-flex justify-content-center text-dark mt-2">Текст №' . $field_index . '</span>
        <textarea id="addTextArea' . $button_id . '" name="comment_text" class="form-control" rows="3" required></textarea>
        <button class="btn btn-info btn-sm btn-block my-1 addTextButton" pagination_code="' . $pagination_code . '" field_index="' . $field_index . '">Сохранить</button>';

    }

    // - Текстовки под отзывы

    private function delete_comments() {

        if (!$this->have_Rules()) {
            echo '';
        } else {
            echo '<button data-toggle="modal" data-target="#modalDeleteComment" class="btn btn-block btn-danger my-1">Удалить отзыв</button>';
        }

    }

    private function choice_kitty() {

        $kitty = R::findCollection('kitty', 'where comments_id is null');

        $result = '<label for="choice_kitty">Выбери котенка, для отзыва</label>
            <select name="choice_kitty" class="custom-select my-1 mr-sm-2">';

        while ($kitten = $kitty->next()) {
            $result = $result . '<option value="' . $kitten['id'] . '">' . $kitten['name'] . '</option>';
        }

        $result = $result . '</select>';

        return $result;

    }

    // + Основная информация по отзывам

    public function show_comment() {

        $captions     = '';
        $main_content = '';

        $pagination_code = '1';
        if (isset($_GET['p'])) {
            $pagination_code = $_GET['p'];
        }

        //$this->show_add_comment_form($pagination_code);
        //$this->delete_comments()

        $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

        if ($comment != null) {

            for ($index = 1; $index <= 4; $index++) {

                $captions = $captions . '<li data-target="#commentCarousel' . $pagination_code . '" data-slide-to="' . $index . '" ' . (($index == 1) ? 'class="active"': '') . ' </li>';

                $main_content = $main_content . 
                '<div class="carousel-item ' . (($index == 1) ? 'active': '') . '">
                    <img src="' . $comment['photo' . $index] . '" class="d-block w-100" alt="Питомник норвежских лесных кошек">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>' . $comment['caption' . $index] . '</h5>
                        <p>' . $comment['text' . $index] . '</p>
                    </div>
                </div>';
            }

        }

        echo 
        $this->show_add_comment_form($pagination_code) .
        $this->show_add_edit_form($pagination_code) .
        $this->delete_comments() .
        $this->get_modal_delete_comment_form($pagination_code) .
        '<div class="bd-example">
            <div id="commentCarousel' . $pagination_code . '" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    ' . $captions . '
                </ol>
                <div class="carousel-inner">
                    ' . $main_content . '
                </div>
                <a class="carousel-control-prev" href="#commentCarousel' . $pagination_code . '" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#commentCarousel' . $pagination_code . '" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>';

    }

    // - Основная информация по отзывам

    // + Удаление отзыва

    private function get_modal_delete_comment_form($pagination_code) {

        return
        '<div class="modal fade" id="modalDeleteComment" tabindex="-1" role="dialog" aria-labelledby="modalDeleteCommentTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление отзыва</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Опасная операция! Удаление отзыва приведет к удалению всей связанной с ним информации.
                    </div>
                    <!--<div class="modal-footer">-->
                    <form class="modal-footer" action="/Ixtlan-php/src/DB/comment_CRUD/comment_delete.php" method="post">
                        <input type="hidden" name="pagination_code" value="' . $pagination_code . '">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <!--<button id="delete_comment" type="button" class="btn btn-danger">Я все поняла. Удалить</button>-->
                        <button class="btn btn-danger" type="submit">Я все поняла. Удалить</button>
                    </form>
                    <!--</div>-->
                </div>
            </div>
        </div>';

    }

    // - Удаление отзыва

}