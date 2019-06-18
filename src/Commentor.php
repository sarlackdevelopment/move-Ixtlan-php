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
                /* echo 
                '<button class="btn btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_comment" aria-expanded="false" aria-controls="add_cat_comment">
                    Добавить / редактировать отзыв
                </button>

                <div id="add_cat_comment" class="collapse">

                    <form id="add_cat_comment_id" action="/Ixtlan-php/src/DB/comment_CRUD/comment_add.php" method="post">

                        <input type="hidden" name="pagination_code" value="' . ($countKittyWithComments + 1) . '">

                        ' . $this->choice_kitty() . '

                        <label for="comment_text">Основной текст отзыва</label>
                        <textarea name="comment_text" class="form-control" rows="3" required></textarea>

                        <button class="btn btn-info btn-block my-1" type="submit">Сохранить</button>

                    </form>' . $this->show_dropzones($pagination_code) . $this->show_texts($pagination_code) .

                '</div>'; */

                echo 
                '<button class="btn btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_comment" aria-expanded="false" aria-controls="add_cat_comment">
                    Добавить / редактировать отзыв
                </button>

                <div id="add_cat_comment" class="collapse">

                    <form id="add_cat_comment_id" action="/Ixtlan-php/src/DB/comment_CRUD/comment_add.php" method="post">

                        <input type="hidden" name="pagination_code" value="' . ($countKittyWithComments + 1) . '">

                        ' . $this->choice_kitty() . '

                        <label for="comment_text">Основной текст отзыва</label>
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

        //for ($field_index = 1; $field_index <= $this->MAX_FIELD_COMMENT; $field_index++) {
        for ($field_index = 1; $field_index <= 3; $field_index++) {
            
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

        for ($field_index = 1; $field_index <= 3; $field_index++) {

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

        $result = '';

        $pagination_code = '1';
        if (isset($_GET['p'])) {
            $pagination_code = $_GET['p'];
        }

        $this->show_add_comment_form($pagination_code);

        $comment = R::findOne('comments', 'where pagination_code = ?', array($pagination_code));

        if ($comment != null) {
        
            $content = $this->get_content($comment, $pagination_code);

            $result = $this->delete_comments() . $this->get_modal_delete_comment_form() . '<div class="card-columns">';
            foreach ($content as $pice_of_content) {
                $result = $result . $pice_of_content;
            }
            $result = $result . '</div>';

        }

        echo $result;

    }

    private function get_content($comment, $pagination_code) {

        $kitty = R::getRow('SELECT kitty.name AS name FROM kitty AS kitty 
            INNER JOIN comments AS comments 
                ON (comments.pagination_code = ?) AND comments.id = kitty.comments_id LIMIT 1', array($pagination_code));


        $content = array();

        for ($index = 1; $index <= 4; $index++) {
            $content[] = 
            '<div class="card">
                <img src="' . $comment['photo' . $index] . '" class="card-img-top rounded" alt="Питомник норвежских лесных кошек в Москве">
                <div class="card-body">
                    <h5 class="card-title">' . $kitty['name'] . ' - дома</h5>
                    <p class="card-text">' . $comment['caption' . $index] . '</p>
                </div>
            </div>';
        }

        $content[] = 
        '<div class="card bg-primary text-white text-center p-3">
            <blockquote class="blockquote mb-0">
                <p>
                    ' . $comment['comment_text'] . '
                </p>
                <footer class="blockquote-footer text-white">
                    <small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
            </blockquote>
        </div>';

        for ($index = 1; $index <= 3; $index++) {

            $content[] = 
            '<div class="card p-3 text-right">
                <blockquote class="blockquote mb-0">
                    <p>asdasdasdasjah;krgad gfg sdjfglsdfg usdifg sdf gsud gfsdgf </p>
                    <footer class="blockquote-footer">
                        <small class="text-muted">
                            Счастливые хозяева
                        </small>
                    </footer>
                </blockquote>
            </div>';
            
        }

        return $content;
        
    }

    // - Основная информация по отзывам

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