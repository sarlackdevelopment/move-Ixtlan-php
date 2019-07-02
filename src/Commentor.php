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

            echo 
            '<button class="btn btn-block my-1 btn-outline-info" type="button" data-toggle="collapse" data-target="#edit_cat_comment" aria-expanded="false" aria-controls="edit_cat_comment">
                 Редактировать текущий отзыв
            </button>

            <div id="edit_cat_comment" class="collapse">
                ' . $this->show_content($pagination_code) . '
            </div>'; 
            
        } 

    }

    // + Отображение дропзон выбора таблиц

    private function show_content($pagination_code) {

        $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

        if ($comment == null) {
            return '';
        } else {
            return $this->show_dropzones($comment, $pagination_code);
        }

    }

    private function show_dropzones($comment, $pagination_code) {        

        $result = '';
        $index  = 0;

        while (true) {

            $index++;

            $button_id = $pagination_code . '_' . $index;

            $current_photo   = $comment['photo' . $index];
            $current_text    = $comment['text' . $index];
            $current_caption = $comment['caption' . $index];

            if ($current_photo == null) {
                $result = $result . '</div>';
                break;
            }

            if ($index == 1) {
                $result = $result . '<div class="row">';
            } else if ($index % 2 != 0) {
                $result = $result . '</div><div class="row">';
            }

            $result = $result . 
            '<div class="col m-2">
                ' . $this->img_controller->show_img_Editor_Form($pagination_code . $index, 'Фото №' . $index, '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php') . '                
                <span class="bg-info d-flex justify-content-center text-dark">Заголовок №' . $index . '</span>
                <input id="addCaptionInput' . $button_id . '" class="form-control mb-1" type="text" value="' . $current_caption . '">
                <button type="button" class="btn btn-info btn-sm btn-block addCaptionButton" pagination_code="' . $pagination_code . '" field_index="' . $index . '">Сохранить</button> 
                ' . $this->show_content_form_text($pagination_code, $index, $current_text) . '
                <button type="button" class="btn btn-danger btn-block" data-toggle="modal" data-target="#modalDeleteOneSlide">Удалить слайд</button>
                
            </div>';

        }

        $new_slide = 
        '<div class="col m-2 border border-warning">
            ' . $this->img_controller->show_img_Editor_Form($pagination_code . $index, 'Фото №' . $index, '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php') . '    
            <span class="bg-info d-flex justify-content-center text-dark">Заголовок №' . $index . '</span>
            <input id="addCaptionInput' . $button_id . '" class="form-control mb-1" type="text" placeholder="Введи заголовок нового слайда">
            <button type="button" class="btn btn-info btn-sm btn-block addCaptionButton" pagination_code="' . $pagination_code . '" field_index="' . $index . '">Сохранить</button> 
            ' . $this->show_content_form_text($pagination_code, $index, $current_text, true) . '       
        </div>';

        $result = '<div class="container">' . $new_slide . $result . '</div>';  

        return $result;

    }

    // - Отображение дропзон выбора таблиц

    // + Текстовки под отзывы

    private function show_content_form_text($pagination_code, $field_index, $value, $newSlide = false) {

        $button_id = $pagination_code . '_' . $field_index;

        if ($newSlide) {
            $current_text = '<textarea id="addTextArea' . $button_id . '" name="comment_text" class="form-control" rows="3" placeholder="Введите текст нового слайда"></textarea>';
        } else {
            $current_text = '<textarea id="addTextArea' . $button_id . '" name="comment_text" class="form-control" rows="3">' . $value . '</textarea>';
        }
        

        return
        '<span class="bg-info d-flex justify-content-center text-dark mt-2">Текст №' . $field_index . '</span>
        ' . $current_text . '
        <button class="btn btn-info btn-sm btn-block my-1 addTextButton" pagination_code="' . $pagination_code . '" field_index="' . $field_index . '">Сохранить</button>';

    }

    // - Текстовки под отзывы

    private function delete_comments() {

        if (!$this->have_Rules()) {
            echo '';
        } else {
            echo '<button data-toggle="modal" data-target="#modalDeleteComment" class="btn btn-block btn-danger my-1">Удалить отзыв полностью</button>';
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
        $this->get_modal_delete_one_slide($pagination_code) .
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
                    <form class="modal-footer" action="/Ixtlan-php/src/DB/comment_CRUD/comment_delete.php" method="post">
                        <input type="hidden" name="pagination_code" value="' . $pagination_code . '">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button class="btn btn-danger" type="submit">Я все поняла. Удалить</button>
                    </form>
                </div>
            </div>
        </div>';

    }

    // - Удаление отзыва

    // + Удаление отдельного слайда

    private function get_modal_delete_one_slide($pagination_code) {

        return
        '<div class="modal fade" id="modalDeleteOneSlide" tabindex="-1" role="dialog" aria-labelledby="modalDeleteOneSlideTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление слайда</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Опасная операция! Удаление слайда приведет к удалению всей связанной с ним информации (картинки и надписей).
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_slide" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // - Удаление отдельного слайда

}