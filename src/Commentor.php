<?php

class Commentor {

    private function have_Rules() {
        return true;
    }

    private function show_add_comment_form() {

        if (!$this->have_Rules()) {
            echo '';
        } else {

            $countKittyWithoutComments = R::count('kitty', 'where comments_id is null');
            $countKittyWithComments    = R::count('kitty', 'where not (comments_id is null)');       

            if ($countKittyWithoutComments == 0) {
                echo '';
            } else {
                echo 
                    '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_comment" aria-expanded="false" aria-controls="add_cat_comment">
                        Добавить отзыв
                    </button>

                    <form id="add_cat_comment" class="collapse" action="/Ixtlan-php/src/DB/comment_CRUD/comment_add.php" method="post">

                        <input type="hidden" name="pagination_code" value="' . ($countKittyWithComments + 1) . '">

                        ' . $this->choice_kitty() . '

                        <label for="comment_text">Текст отзыва</label>
                        <textarea name="comment_text" class="form-control" rows="3" required></textarea>

                        <button class="btn btn-info btn-block my-1" type="submit">Сохранить</button>

                    </form>';
            }
            
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

        $this->show_add_comment_form();

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
        </div>';

        }

    }

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