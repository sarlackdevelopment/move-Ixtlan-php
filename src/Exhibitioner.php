<?php

include_once('src/controllers/Img_Controller.php');

require_once 'check_rules.php';

class Exhibitioner {

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

    private function get_list_of_Exhibitions() {

        $list_of_exhibitions = array();

        $exhibitions = R::findCollection('exhibitions');

        while ($pice_of_exhibitions = $exhibitions->next()) {
            $list_of_exhibitions[] = array(
                'id'                => $pice_of_exhibitions['id'],
                'short_descryption' => $pice_of_exhibitions['short_descryption'],
                'long_descryption'  => $pice_of_exhibitions['long_descryption']
            );
        }
    
        return $list_of_exhibitions;

    }

    private function show_img_Editor_Form($id) {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {
            return 
            '<div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Добавить фото в галлерею можно здесь</span>
                <form id="my-dropzone-' . $id . '" class="dropzone container container-fluid mb-2" action="src/DB/exhibitioner_CRUD/img_CRUD/img_add.php"></form>
            </div>';
        }

    }

    private function show_Eexhibition_Forms($id, $short_descryption, $long_descryption) {
        
        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {
            return     
            '<div class="container container-fluid border border-info rounded mt-2">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Отредактировать описания выставки можно здесь</span>
                <form class="container container-fluid" action="src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_edit.php" method="post">
                    <input type="hidden" name="exhibition_id" value="' . $id . '">
                    <div class="form-group">
                        <label for="short_descryption">Краткое описание выставки:</label>
                        <textarea name="short_descryption" class="form-control" rows="3" required>' . $short_descryption . '</textarea>
                    </div>
                    <div class="form-group">
                        <label for="long_descryption">Полное описание выставки:</label>
                        <textarea name="long_descryption" class="form-control" rows="11" required>' . $long_descryption . '</textarea>
                    </div>
                    <button class="btn btn-primary btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                </form>                
                <button type="button" class="btn btn-sm btn-danger btn-block" data-toggle="modal" data-target="#modalDeleteExhibition" exhibition_id="' . $id . '">Удалить</button>
            </div>';

        }

    }

    // + Удаление выставки DRY

    private function get_modal_delete_pice_of_news() {

        return
        '<div class="modal fade" id="modalDeleteExhibition" tabindex="-1" role="dialog" aria-labelledby="modalDeleteExhibitionTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление выставки</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Удаление выставки приведет к удалению всех материалов по ней?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_exhibition" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // - Удаление выставки

    private function show_Exhibition_Form() {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {
            return 
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_exhibition" aria-expanded="false" aria-controls="add_exhibition">
                Добавить выставку
            </button>
                  
            <form id="add_exhibition" class="container container-fluid collapse" method="post" action="src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_add.php">

                <div class="modal-body"> 

                    <label for="short_descryption">Краткое описание выставки</label>
                    <textarea name="short_descryption" class="form-control" rows="3" required></textarea>

                    <label for="long_descryption">Полное описание выставки</label>
                    <textarea name="long_descryption" class="form-control" rows="11" required></textarea>

                    <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                                   
                </div>

            </form>';
        }

    }

    public function show_Exhibitions($accordion_name) {

        echo $this->show_Exhibition_Form() . $this->get_modal_delete_pice_of_news();

        $list_of_exhibitions = $this->get_list_of_Exhibitions();
        $count               = count($list_of_exhibitions);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_exhibitions = $list_of_exhibitions[$index];
            $id                      = $instance_of_exhibitions['id'];
            $short_descryption       = $instance_of_exhibitions['short_descryption'];
            $long_descryption        = $instance_of_exhibitions['long_descryption'];

            $is_show = ($index == 0) ? 'show' : '';

            echo
            '<div class="card">
                <div class="card-header" id="headingExhibitions' . $id . '">
                    <h5 class="text-center mb-0">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapseExhibitions' . $id . '" aria-expanded="true" aria-controls="collapseExhibitions' . $id . '">
                            ' . $short_descryption . '
                        </button>
                    </h5>
                </div>
                <div id="collapseExhibitions' . $id . '" class="collapse ' . $is_show . '" aria-labelledby="headingExhibitions' . $id . '" data-parent="' . $accordion_name . '">
                    <div class="card-body container">                        
                        <div class="container">
                            <div class="owl-carousel">
                            ' . $this->img_controller->show_Owl_Img('imgexhibitions', 'exhibitions_id', $id) . '
                            </div>

                            <div class="container alert alert-info">
                                <div class="row">
                                    ' . $this->img_controller->show_Fancybox_Img('imgexhibitions', 'exhibitions_id', $id, 
                                        'src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php', 'index.php') 
                                    . $this->show_img_Editor_Form($id) 
                                    . $this->show_Eexhibition_Forms($id, $short_descryption, $long_descryption) . '         
                                </div>
                            </div>

                            <div class="container jumbotron shadow-lg p-3 mb-5 rounded">
                                ' . $long_descryption . '
                            </div>

                        </div>
                    </div>
                </div>
            </div>';

        }

    }

}