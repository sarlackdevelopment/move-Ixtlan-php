
<?php

require_once 'configDB.php';

class Newser {

    private $img_controller;

    public function get_img_controller() {
        return $this->img_controller;
    }

    public function set_img_controller($img_controller) {
        $this->img_controller = $img_controller;
    }

    function __construct() {
        $this->img_controller = new Img_Controller();
    }

    public function get_All_Simple_Newses($order_by_desc = true) {

        if ($order_by_desc) {
            $newses = R::findCollection('news', 'order by id desc');
        } else {
            $newses = R::findCollection('news');
        }
        
        $list_Of_News = array();
    
        while ($pice_of_news = $newses->next()) {
            $list_Of_News[] = array(
                'id'             => $pice_of_news['id'],
                'archive'        => $pice_of_news['archive'],
                'header_message' => $pice_of_news['caption_news'],
                'main_message'   => $pice_of_news['body_news'],
            );
        }
    
        return $list_Of_News;
        
    }

    private function have_Rules() {
        return true;
    }

    public function show_Editor_Form() {

        if (!$this->have_Rules()) {
            echo '';
        } else {
            echo 
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_news" aria-expanded="false" aria-controls="add_news">
                Добавить новость
            </button>
            <form id="add_news" class="collapse" action="/Ixtlan-php/src/DB/news_CRUD/news_add.php" method="post">
                <div class="modal-body">                                   
                    <label for="Caption">Заголовок новости</label>
                    <textarea name="caption_news" class="form-control" rows="3" required></textarea>

                    <label for="Body">Текст новости</label>
                    <textarea name="body_news" class="form-control" rows="11" required></textarea>                                   
                </div>
                <div class="modal-footer">
                    <button class="btn btn-info btn-block my-1" type="submit">Сохранить</button>
                </div>
            </form>';
        }

    }

    public function show_News_Form($id, $archive, $body_news, $caption_news) {

        $current_button = ($archive) ? 
            '<button name="in_main" class="btn btn-info btn-sm btn-block btn-info my-1" type="submit">В галвное</button>' :
            '<button name="in_archive" class="btn btn-info btn-sm btn-block btn-info my-1" type="submit">В архив</button>';

        return
        '<div class="card-body">
            <form action="/Ixtlan-php/src/DB/news_CRUD/news_edit.php" method="post">
                <input type="hidden" name="news_id" value="' . $id . '">
                <div class="form-group">
                    <label for="news_caption">Заголовок новости:</label>
                    <textarea name="news_caption" class="form-control" rows="3" required>' . $caption_news . '</textarea>
                </div>
                <div class="form-group">
                    <label for="news_body">Текст новости:</label>
                    <textarea name="news_body" class="form-control" rows="11" required>' . $body_news . '</textarea>
                </div>
                <button class="btn btn-info btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
            </form>
            <div class="row">
                <div class="col">
                    <form action="/Ixtlan-php/src/DB/news_CRUD/news_relocate.php" method="post">
                        <input type="hidden" name="news_id" value="' . $id . '">
                        ' . $current_button . '
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <form id="delete_news' . $id . '" action="/Ixtlan-php/src/DB/news_CRUD/news_delete.php" method="post">
                        <input type="hidden" name="news_id" value="' . $id . '">
                    </form>
                    ' . $this->img_controller->show_delete_form('news' . $id, 'Удаление новости', 'Уверена, что хочешь удалить новость?') . '
                </div>
            </div>
        </div>';

    }

    private function get_Main_Newses() {

        $list_Of_Main_News = array(
            array(
                'id'            => '1',
                'action_title'  => 'Забронировать',
                'main_message'  => 'У нас родились котята.',
                'create_action' => true,
                'target_page'   => 'kitty.php'
            )
        );

        return $list_Of_Main_News;

    }

    public function show_Newses($archive_news, $accordion_name, $postfix = '') {

        $list_of_newses = $this->get_All_Simple_Newses();
        $count          = count($list_of_newses);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_news = $list_of_newses[$index];
            if ($archive_news == $instance_of_news['archive']) {
                continue;
            }

            $id = $instance_of_news['id'];

            if (!$this->have_Rules() or ($postfix != "")) {
                $content = 
                '<div class="card-body">'
                    . $instance_of_news['main_message'] .
                '</div>';
            } else {
                $content = $this->show_News_Form($id, !$archive_news, $instance_of_news['main_message'], $instance_of_news['header_message']);
            }
            
            echo
            '<article class="card">
                <header class="card-header" id="heading' . $postfix . $id . '">
                    <h5 class="mb-0 text-center">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapse' . $postfix . $id . '" aria-expanded="false" aria-controls="collapse' . $postfix . $id . '">'
                                . $instance_of_news['header_message'] .
                        '</button>
                    </h5>
                </header>
                <div id="collapse' . $postfix . $id . '" class="collapse" aria-labelledby="heading' . $postfix . $id . '" data-parent="' . $accordion_name . '">
                    ' . $content . '
                </div>
            </article>';

        }

    }

    public function show_Full_Newses() {

        $list_of_newses = $this->get_All_Simple_Newses(false);
        $count          = count($list_of_newses);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_news = $list_of_newses[$index];

            echo
            '<article class="container border-top border-left border-right border-light">
                <header>
                    <hr>
                    <h5 class="text-center"><strong>'. $instance_of_news['header_message'] . '</strong></h5>
                    <hr>
                </header>
                ' . $instance_of_news['main_message'] . '
            </article>';

        }

    }

    public function show_Main_Newses($show_oh_bottom = false) {

        $list_of_main_newses      = $this->get_Main_Newses();
        $count                    = count($list_of_main_newses);
        $button_for_action        = '';
        $template_for_show_bottom = '';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_main_news = $list_of_main_newses[$index];

            if ($instance_of_main_news['create_action']) {
                $button_for_action = 
                '<p class="lead">
                    <a class="btn btn-primary btn-sm btn-block" href="' . $instance_of_main_news['target_page'] . '" role="button">' 
                        . $instance_of_main_news['action_title'] . '</a>
                </p>';
            }

        }

        if ($show_oh_bottom) {
            $template_for_show_bottom = 'id="mainNews"';
        }

        echo
        '<section ' . $template_for_show_bottom . ' style="background-color: rgba(254, 221, 98, 1);" class="alert mt-1 mb-1" role="alert">
            <p class="text-justify text-center">' . $instance_of_main_news['main_message'] . '</p>
            ' . $button_for_action . '  
        </section>';

    }

    public function events_for_delete_news() {

        $news = R::findCollection('news');
        $result = '';

        while ($pice_of_news = $news->next()) {

            $id = $pice_of_news['id'];
            
            $result = $result . 
                "$('#deletenews" . $id . "').on('click', function() {
                    $.post( 'src/DB/news_CRUD/news_delete.php', { 'news_id' : " . $id . " }, function() {
                        $('#news" . $id . "').modal('hide')
                    });
                });";
        }

        echo $result;

    }

    public function test() {
        echo "It works!!!";
    } 

}