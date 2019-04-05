<?php

include('src/controllers/Img_Controller.php');

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

    private function show_Owl_Content($exhibition_id) {

        $result         = '';
        $imgexhibitions = R::findCollection('imgexhibitions', 'exhibitions_id = ?', array($exhibition_id));

        while ($img_exhibition = $imgexhibitions->next()) {

            $path = $img_exhibition->path;

            $result = $result .  
            '<div class="item">
                <img title="норвежские лесные котята" src="' . $path . '" alt="продажа норвежской">
            </div>';

        }

        return $result;

    }

    private function show_Fancybox_Content($exhibition_id) {

        $result         = '';
        $imgexhibitions = R::findCollection('imgexhibitions', 'exhibitions_id = ?', array($exhibition_id));
        
        while ($img_exhibition = $imgexhibitions->next()) {

            $path       = $img_exhibition->path;
            $id         = $img_exhibition->id;
            $checkboxes = (!$this->have_Rules()) ? '' : '<input style="top: 1em; left: 1em;" type="checkbox" class="position-absolute" name="checks[]" value="' . $id . '">';

            $result = $result .  
            '<div class="position-relative col-lg-3 col-md-4 col-6 thumb">
                <a data-fancybox="exhibition' . $exhibition_id . '" href="' . $path . '">
                    <img class="img-fluid" title="Норвежские лесные красавицы"
                        src="' . $path . '" alt="норвежские лесные красавицы">
                </a>
                ' . $checkboxes . '
            </div>
            ';

        }

        if (!$this->have_Rules()) {
            return $result;
        } else {
            return
            '<form action="/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_delete_group.php" method="post">
                <div class="form-row">
                    ' . $result . '
                </div>
                <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Удалить отмеченные изображения</button>
            </form>';
        }

    }

    private function have_Rules() {
        return true;
    }

    private function show_img_Editor_Form($id, $short_descryption, $long_descryption) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Добавить фото в галлерею можно здесь</span>
                <form id="my-dropzone-' . $id . '" class="dropzone container container-fluid mb-2" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/img_CRUD/img_add.php"></form>
            </div>';
        }

    }

    private function show_Eexhibition_Forms($id, $short_descryption, $long_descryption) {
        
        if (!$this->have_Rules()) {
            return '';
        } else {
            return     
            '<div class="container container-fluid border border-info rounded mt-2">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Отредактировать описания выставки можно здесь</span>
                <form class="container container-fluid" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_edit.php" method="post">
                    <input type="hidden" name="form_id" value="' . $id . '">
                    <div class="form-group">
                        <label for="short_descryption">Краткое описание выставки:</label>
                        <textarea name="short_descryption" class="form-control" rows="3" required>' . $short_descryption . '</textarea>
                    </div>
                    <div class="form-group">
                        <label for="long_descryption">Полное описание выставки:</label>
                        <textarea name="long_descryption" class="form-control" rows="11" required>' . $long_descryption . '</textarea>
                    </div>
                    <button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>
                </form>
                <form class="container container-fluid" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_delete.php" method="post">
                    <input type="hidden" name="form_id" value="' . $id . '">
                    <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Удалить</button>
                </form>
            </div>';

        }

    }

    private function show_Exhibition_Form() {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return 
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_exhibition" aria-expanded="false" aria-controls="add_exhibition">
                Добавить выставку
            </button>
                  
            <form id="add_exhibition" class="container container-fluid collapse" method="post" action="/Ixtlan-php/src/DB/exhibitioner_CRUD/exhibition_CRUD/exhibition_add.php">

                <div class="modal-body"> 

                    <label for="short_descryption">Краткое описание выставки</label>
                    <textarea name="short_descryption" class="form-control" rows="3" required></textarea>

                    <label for="long_descryption">Полное описание выставки</label>
                    <textarea name="long_descryption" class="form-control" rows="11" required></textarea>

                    <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>
                                   
                </div>

            </form>';
        }

    }

    public function show_Exhibitions($accordion_name) {

        echo $this->show_Exhibition_Form();

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
                                ' . $this->show_Owl_Content($id) . '
                            </div>

                            <div class="container alert alert-info">
                                <div class="row">
                                    ' . $this->show_Fancybox_Content($id) 
                                    . $this->show_img_Editor_Form($id, $short_descryption, $long_descryption) 
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

    public function show_Init_Dropzones() {

        $exhibitions = R::findCollection('exhibitions');

        while ($pice_of_exhibitions = $exhibitions->next()) {

            $id = $pice_of_exhibitions['id'];
            echo 
            'Dropzone.options["myDropzone' . $id . '"] = {
                init: function() {
                    this.on("sending", function(file, xhr, formData) {
                        formData.append("exhibition_id", "' . $id . '");
                    });
                }
            }
            ';

        }

    }

}