<?php

class Commentor {

    private $img_controller;

    private $MAX_FIELD_COMMENT = 7;

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
                    '<button class="btn btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_comment" aria-expanded="false" aria-controls="add_cat_comment">
                        Добавить отзыв
                    </button>

                    <div id="add_cat_comment" class="collapse">

                        <form action="/Ixtlan-php/src/DB/comment_CRUD/comment_add.php" method="post">

                            <input type="hidden" name="pagination_code" value="' . ($countKittyWithComments + 1) . '">

                            ' . $this->choice_kitty() . '

                            <label for="comment_text">Текст отзыва</label>
                            <textarea name="comment_text" class="form-control" rows="3" required></textarea>

                            <button class="btn btn-info btn-block my-1" type="submit">Сохранить</button>

                        </form>' . $this->show_dropzones($pagination_code) .

                    '</div>';
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
            <div class="row">
                <div class="col my-1">
                    ' . $this->img_controller->show_img_Editor_Form($pagination_code . '5', 'Фото №4', '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php')
                    . $this->get_modal_add_caption_form($pagination_code, '5') . '
                </div>
                <div class="col my-1">
                    ' . $this->img_controller->show_img_Editor_Form($pagination_code . '6', 'Фото №5', '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php')
                    . $this->get_modal_add_caption_form($pagination_code, '6') . '
                </div>
            </div>
            <div class="row">
                <div class="col my-1">
                    ' . $this->img_controller->show_img_Editor_Form($pagination_code . '7', 'Фото №7', '/Ixtlan-php/src/DB/comment_CRUD/img_CRUD/img_add.php')
                    . $this->get_modal_add_caption_form($pagination_code, '7') . '
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

    public function show_Init_Dropzones() {

        $pagination_code = '1';
        if (isset($_GET['p'])) {
            $pagination_code = $_GET['p'];
        }

        for ($field_index = 1; $field_index <= $this->MAX_FIELD_COMMENT; $field_index++) {
            
            $id = $pagination_code . $field_index;

            echo 
            'Dropzone.options["myDropzone' . $id . '"] = {
                acceptedFiles: "image/*",
                maxFiles: 1,
                init: function() {
                    this.on("success", function() {
                        $("#modalAddCaption' . $pagination_code . '_' . $field_index . '").modal("show");
                    });
                    this.on("sending", function(file, xhr, formData) {
                        formData.append("pagination_code", "' . $pagination_code . '");
                        formData.append("field_index", "' . $field_index . '");
                    });                
                }
            };
            ';
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

    public function events_for_add_caption() {

        $result = '';

        $pagination_code = '1';
        if (isset($_GET['p'])) {
            $pagination_code = $_GET['p'];
        }

        for ($field_index = 1; $field_index <= $this->MAX_FIELD_COMMENT; $field_index++) {

            $caption_id = $pagination_code . '_' . $field_index;

            $result = $result . (($result != '') ? PHP_EOL : $result) . 
            
            "$('#addCaption" . $caption_id . "').click(() => {

                let caption_text = $('#caption_text" . $caption_id . "').val();
            
                let current_inf = { 
                    'pagination_code' : " . $pagination_code . ", 
                    'field_index'     : " . $field_index . ",
                    'caption_text'    : caption_text
                }
            
                $.post( 'src/DB/comment_CRUD/caption_CRUD/caption_add.php', current_inf);
            
            });";

        }

        echo $result;

    }

    // - Отображение дропзон выбора таблиц

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

    public function show_comment() {

        $pagination_code = '1';
        if (isset($_GET['p'])) {
            $pagination_code = $_GET['p'];
        }

        $this->show_add_comment_form($pagination_code);

        $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));
        if ($comment != null) {

            $comment_text = $comment['comment_text'];

            echo
            '<div class="card-columns">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title that wraps to a new line</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Название карточки</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card bg-primary text-white text-center p-3">
                    <blockquote class="blockquote mb-0">
                        <p>
                            ' . $comment_text . '
                        </p>
                        <footer class="blockquote-footer text-white">
                            <small>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Название карточки</h5>
                        <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                </div>
                <div class="card p-3 text-right">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Название карточки</h5>
                        <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>' . $this->delete_comments() . $this->get_modal_delete_comment_form();

        }

    }

    // + Удаление отзыва

    public function events_for_delete_comment() {

        $pagination_code = '1';
        if (isset($_GET['p'])) {
            $pagination_code = $_GET['p'];
        }

        echo 
        "$('#delete_comment').on('click', function() {
            $.post( 'src/DB/comment_CRUD/comment_delete.php', { 'pagination_code' : " . $pagination_code . " }, function() {
                $('#modalDeleteComment').modal('hide')
            });
        });";

    }

    private function get_modal_delete_comment_form() {

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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_comment" type="button" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // - Удаление отзыва

    public function show_pagination_init() {

        $count = R::count('comments');

        $current_page = '1';
        if (isset($_GET['p'])) {
            $current_page = $_GET['p'];
        }

        echo 
        "$('#alt-style-pagination').pagination({
            items: " . $count . ",
            displayedPages: 1,
            currentPage: " . $current_page . ",
            prevText: '<span>&laquo;</span>',
            nextText: '<span>&raquo;</span>',
            hrefTextPrefix: '?p=',
            ellipsePageSet: false
        });";
        
    }

}