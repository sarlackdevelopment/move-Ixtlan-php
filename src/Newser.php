
<?php

require 'libs/rb/rb-mysql.php';
R::setup( 'mysql:host=127.0.0.1;dbname=cats', 'root', '' );

class Newser {

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
            '<form action="/Ixtlan-php/src/DB/work_with_db.php" method="post">
                <div class="modal-body">                                   
                    <label for="Caption">Заголовок новости</label>
                    <textarea name="caption_news" class="form-control" rows="3"></textarea>

                    <label for="Body">Текст новости</label>
                    <textarea name="body_news" class="form-control" rows="3"></textarea>                                   
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-primary btn-block my-1" type="submit">Добавить новость</button>
                </div>
            </form>';
        }

    }

    public function show_News_Form($id, $archive, $body_news) {

        $current_button = ($archive) ? 
            '<button name="in_main" class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">В галвное</button>' :
            '<button name="in_archive" class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">В архив</button>';

        return
        '<div class="card-body"> 
            <form action="/Ixtlan-php/src/DB/work_with_db.php" method="post">
                <input type="hidden" name="form_id" value="' . $id . '">
                <textarea name="news_body" class="form-control" rows="11">' . $body_news . '</textarea>
                <div class="row">
                    <div class="col">
                        ' . $current_button . '
                    </div>
                    <div class="col">
                        <button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">Редактировать</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button name="delete" class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">Удалить</button>
                    </div>
                </div>
            </form>
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

            if (!$this->have_Rules()) {
                $content = 
                '<div class="card-body">'
                    . $instance_of_news['main_message'] .
                '</div>';
            } else {
                $content = $this->show_News_Form($id, !$archive_news, $instance_of_news['main_message']);
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

    public function test() {
        echo "It works!!!";
    } 

}