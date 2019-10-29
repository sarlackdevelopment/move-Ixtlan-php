<?php

require_once 'configDB.php';
require_once 'check_rules.php';
require_once 'const_local.php';
require_once 'main_config.php';

include('src/controllers/Img_Controller.php');

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

        $local = UtilsLocal::currentLanguage()['short_caption'];

        if ($order_by_desc) {
            $newses = R::findCollection('news', 'where _local = ? order by id desc', array($local));
        } else {
            $newses = R::findCollection('news', 'where _local = ?', array($local));
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

    public function show_Editor_Form() {

        if (!CHECK_RULES::ROOT()) {
            echo '';
        } else {
            echo 
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_news" aria-expanded="false" aria-controls="add_news">
                Добавить новость
            </button>
            <form id="add_news" class="collapse" action="' . MainConfig::dev_name() . '/src/DB/news_CRUD/news_add.php" method="post">
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
            <form action="' . MainConfig::dev_name() . '/src/DB/news_CRUD/news_edit.php" method="post">
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
                    <form action="' . MainConfig::dev_name() . '/src/DB/news_CRUD/news_relocate.php" method="post">
                        <input type="hidden" name="news_id" value="' . $id . '">
                        ' . $current_button . '
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-sm btn-danger btn-block" data-toggle="modal" data-target="#modalDeleteNews" news_index="' . $id . '">Удалить</button>   
                </div>
            </div>
        </div>' . $this->get_modal_delete_pice_of_news();

    }

    // + Удаление отдельной новости

    private function get_modal_delete_pice_of_news() {

        return
        '<div class="modal fade" id="modalDeleteNews" tabindex="-1" role="dialog" aria-labelledby="modalDeleteNewsTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление новости</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Уверена, что хочешь удалить новость?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_news" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // - Удаление отдельной новости

    private function get_Main_Newses() {
        return array(LocalConstants::mainLocal()['born_banner']);
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

            if (!CHECK_RULES::ROOT() or ($postfix != "")) {
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

    public function test() {
        echo "It works!!!";
    } 

}