<?php

class Commentor {

    private function have_Rules() {
        return true;
    }

    public function show_pagination_control() {

        if (isset($_REQUEST['p'])) {
            $request_p = $_REQUEST['p'];
        } else {
            $request_p = 1;
        }

        $rowsperpage = 1;
        $page        = $request_p  - 1;

        $p = $page * $rowsperpage;

        $comments = R::getAll('SELECT * FROM comments LIMIT ? , ?', array($p, $rowsperpage));
        $count    = R::count('comments');

        echo 
        '
            <nav class="mt-5" aria-label="...">
                <ul style="list-style-type:none">';

        if ($request_p  > 1) {
            $prev_page = $request_p  - 1;
            echo 
            '<li class="page-item">
                <a href="comments.php?p=' . $prev_page . '" class="btn btn-primary" role="button" aria-pressed="true"><<<</a>
            </li>';       
        } else {
            echo '<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true"><<<</a>';
        }

        $limit = ceil($count / $rowsperpage);

        for ($i = 1; $i <= $limit; $i++) {

            if ($i == $request_p ) {
                echo 
                '<li class="page-item active" aria-current="page">
                    <span class="page-link">
                        ' . $i . '123123123123123123123123123123123
                        <span class="sr-only">(current)</span>
                    </span>
                </li>';
            } else {
                echo '<li class="page-item"><a class="page-link" href="comments.php?p=' . $i . '">' . $i . '</a></li>'; 
            }
 
        }

        $check = $p + $rowsperpage;

        if ($count > $check) {
            $next_page = $request_p  + 1;
            echo 
            '<li class="page-item">
                <a href="comments.php?p=' . $next_page . '" class="btn btn-primary" role="button" aria-pressed="true">>>></a>
            </li>';
        } else {
            echo '<a href="#" class="btn btn-primary disabled" role="button" aria-disabled="true">>>></a>';
        }

        echo '</ul></nav>';


        /*foreach ($comments as $comment) {

            $this->show_comment($comment);

        }*/

    }

    private function show_edit_comment_form() {

        if (!$this->have_Rules()) {
            echo '';
        } else {
            echo 
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_female" aria-expanded="false" aria-controls="add_cat_female">
                Добавить отзыв
            </button>
            <form id="add_cat_female" class="collapse" action="/Ixtlan-php/src/DB/comment_CRUD/comment_add.php" method="post">
                <label for="comment_text">Текст отзыва</label>
                <textarea name="comment_text" class="form-control" rows="3" required></textarea>

                <button class="btn btn-info btn-block my-1" type="submit">Сохранить</button>
            </form>';
        } 

    }

    public function show_comments() {

        $comments = R::findCollection('comments');

        while ($comment = $comments->next()) {
            $this->show_comment($comment);
        } 

    }

    private function show_comment($comment) {

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
                        <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.-->
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




    public function show_pagination_init() {

        $current_page = '1';
        if (isset($_GET['p'])) {
            $current_page = $_GET['p'];
        }

        echo 
        "$('#alt-style-pagination').pagination({
            items: 20,
            //itemOnPage: 3,
            displayedPages: 1, // 3 - для больших
            currentPage: " . $current_page . ",
            //cssStyle: '',
            prevText: '<span>&laquo;</span>',
            nextText: '<span>&raquo;</span>',
            hrefTextPrefix: '?p=',
            ellipsePageSet: false
        });";


        
    }

}