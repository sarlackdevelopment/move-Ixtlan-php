<?php

include('src/controllers/Img_Controller.php');

class CatsShower {

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

    private function show_edit_form($gender) {

        if (!$this->have_Rules()) {
            return '';
        } else {

            if ($gender == 'female') {
                $target   = 'кошку';
                $redirect = 'cats_females.php';
            } else {
                $target   = 'кота';
                $redirect = 'cats_males.php';
            }

            echo 
            '<button class="btn btn-sm btn-block btn-outline-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_female" aria-expanded="false" aria-controls="add_cat_female">
                Добавить ' . $target . '
            </button>
            <form id="add_cat_female" class="collapse" action="/Ixtlan-php/src/DB/cat_CRUD/cat_add.php" method="post">

                <div class="modal-body">  

                    <label for="short_descryption">Краткое описание</label>
                    <textarea name="short_descryption" class="form-control" rows="3" required></textarea>

                    <label for="long_descryption">Полное описание</label>
                    <textarea name="long_descryption" class="form-control" rows="11" required></textarea>
                    
                    <label for="gender">Пол</label>
                    <select name="gender" class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>male</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>

                    <div class="form-group">
                        <label for="name">Имя:</label>
                        <textarea name="name" class="form-control" rows="1" required></textarea>
                    </div>

                    <input type="hidden" name="redirect" value="' . $redirect . '">

                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-block my-1" type="submit">Сохранить</button>
                </div>

            </form>';
        }

    }

    private function show_Eexhibition_Forms($id, $short_descryption, $long_descryption, $name, $gender) {
        
        if (!$this->have_Rules()) {
            return '';
        } else {

            $redirect = ($gender == 'female') ? 'cats_females.php' : 'cats_males.php';

            return     
            '<div class="container container-fluid border border-info rounded mt-2">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Отредактировать описание кошки можно здесь</span>
                <form class="container container-fluid" action="/Ixtlan-php/src/DB/cat_CRUD/cat_edit.php" method="post">

                    <input type="hidden" name="form_id" value="' . $id . '">
                    <input type="hidden" name="redirect" value="' . $redirect . '">

                    <div class="form-group">
                        <label for="short_descryption">Краткое описание кошки:</label>
                        <textarea name="short_descryption" class="form-control" rows="3" required>' . $short_descryption . '</textarea>
                    </div>

                    <div class="form-group">
                        <label for="long_descryption">Полное описание кошки:</label>
                        <textarea name="long_descryption" class="form-control" rows="11" required>' . $long_descryption . '</textarea>
                    </div>

                    <label for="gender">Пол</label>
                    <select name="gender" class="custom-select my-1 mr-sm-2">
                        <option selected>' . $gender . '</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>

                    <button class="btn btn-primary btn-sm btn-block btn-outline-info my-1" type="submit">Сохранить</button>

                </form>
                <form class="container container-fluid" action="/Ixtlan-php/src/DB/cat_CRUD/cat_delete.php" method="post">
                    <input type="hidden" name="form_id" value="' . $id . '">
                    <input type="hidden" name="redirect" value="' . $redirect . '">
                    <button class="btn btn-sm btn-block btn-outline-info my-1" type="submit">Удалить</button>
                </form>
            </div>';

        }

    }

    private function get_list_of_Adult_Cats($gender) {

        $catsadult = R::findCollection('catsadult', 'where gender = ?', array($gender));
        
        $list_of_adult_cats = array();
    
        while ($adult_cat = $catsadult->next()) {
            $list_of_adult_cats[] = array(
                'id'                => $adult_cat['id'],
                'short_descryption' => $adult_cat['short_descryption'],
                'long_descryption'  => $adult_cat['long_descryption'],
                'name'              => $adult_cat['name'],
                'main_photo'        => $adult_cat['main_photo'],
                'gender'            => $adult_cat['gender'],
                'data_target'       => $adult_cat['data_target']
            );
        }

        return $list_of_adult_cats;

    }

    public function get_Details_by_Name($name, $gender) {

        $list_of_Img = $this->get_list_of_Adult_Cats($gender);

        $count          = count($list_of_Img);
        $target_element = null;

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_cats = $list_of_Img[$index];

            if ($instance_of_cats['name'] == $name) {
                $target_element = $instance_of_cats;
            }
        }

        return $target_element;

    }

    private function get_Gender_by_Name($name) {

        if (($name == 'Ancalime') || ($name == 'Arvel')) {
            return 'female';
        } else {
            return 'male';
        }

    }

    public function show_distinct_cat($name, $name_of_breed) {

        $gender  = $this->get_Gender_by_Name($name);
        $details = $this->get_Details_by_Name($name, $gender);

        $short_descryption = $details['short_descryption'];
        $long_descryption  = $details['long_descryption'];
        $main_photo        = $details['main_photo'];
        $data_target       = $details['data_target'] . $name_of_breed;

        echo 
        '<div style="background-color: rgba(248, 249, 250, 0);" class="card">
            <img class="card-img-top" title="норвежская лесная кошка купить норвежская лесная купить в москве норвежская лесная кошка описание породы"
                src="' . $main_photo . '" alt="котенок норвежской лесной">
            <div class="card-body d-flex p-2 bd-highlight flex-column justify-content-end">
                <h5 class="card-title text-center">' . $short_descryption . '</h5>

                <button type="button" class="btn btn-primary btn-sm container-fluid"
                    data-toggle="modal" data-target="#' . $data_target . '">
                        Фото
                </button>

                <div class="modal fade" id="' . $data_target . '" tabindex="-1" role="dialog" aria-labelledby="' . $data_target . 'Title" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-center" id="' . $data_target . 'Title">' . $short_descryption . '</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <div class="container">

                                    <div class="container">

                                        <div class="owl-carousel">
                                            ' . $this->show_Owl_Content($name, $gender) . '
                                        </div>

                                    </div>

                                    <div class="container">
                                        <div class="row">
                                            ' . $this->show_Fancybox_Content($name, $gender) . '                        
                                        </div>
                                    </div>

                                    <div class="container jumbotron">
                                        ' . $long_descryption . '                       
                                    </div>

                                </div>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>';
    } 

    public function show_Cats_Adult($accordion_name, $gender) {

        echo $this->show_edit_form($gender);

        $list_of_adult_cats = $this->get_list_of_Adult_Cats($gender);
        $count              = count($list_of_adult_cats);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_adult_cats = $list_of_adult_cats[$index];

            $id                = $instance_of_adult_cats['id'];
            $name              = $instance_of_adult_cats['name'];
            $short_descryption = $instance_of_adult_cats['short_descryption'];
            $long_descryption  = $instance_of_adult_cats['long_descryption'];

            $postfix  = $gender . $id;
            $is_show  = ($index == 0) ? 'show' : '';
            $redirect = ($gender == 'female') ? 'cats_females.php' : 'cats_males.php';

            echo
            '<article class="card">
                <header class="card-header" id="headingCats' . $postfix . '">
                    <h5 class="mb-0 text-center">
                        <button class="btn btn-link collapsed btn-wrap-normal" data-toggle="collapse"
                            data-target="#collapseCats' . $postfix . '" aria-expanded="true" aria-controls="collapseCats' . $postfix . '">
                            ' . $short_descryption . '
                        </button>
                    </h5>
                </header>

                <div id="collapseCats' . $postfix . '" class="collapse ' . $is_show . '" aria-labelledby="headingCats' . $postfix . '" data-parent="' . $accordion_name . '">
                    <div class="card-body">
                        <div class="container">
                            <div class="container">

                                <hr>
                                <div class="owl-carousel">
                                    ' . $this->img_controller->show_Owl_Img('imgcatsadult', 'catsadult_id', $id) . '
                                </div>
                                <hr>

                            </div>
                            <div class="container">

                                <div class="row">
                                    ' . $this->img_controller->show_Fancybox_Img('imgcatsadult', 'catsadult_id', $id, 
                                            '/Ixtlan-php/src/DB/cat_CRUD/img_CRUD/img_delete_group.php', $redirect) . 
                                        $this->img_controller->show_img_Editor_Form($id, 'Добавить фото можно здесь',
                                            '/Ixtlan-php/src/DB/cat_CRUD/img_CRUD/img_add.php') . 
                                        $this->show_Eexhibition_Forms($id, $short_descryption, $long_descryption, $name, $gender) . ' 
                                </div>

                                <hr>

                            </div>

                            <div class="container">
                                <div class="jumbotron">
                                    ' . $long_descryption . '
                                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" 
                                        data-target="#Cat' . $postfix  . '">
                                        ...
                                    </button>
                                </div>

                                <div class="modal fade" id="Cat' . $postfix  . '" tabindex="-1" role="dialog"
                                    aria-labelledby="CatTitle' . $postfix  . '" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="CatTitle' . $postfix  . '">Подробнее обо
                                                    мне</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ' . $long_descryption . '
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>';

        }

    }

    public function show_Init_Dropzones() {

        $catsadult = R::findCollection('catsadult');

        while ($cat = $catsadult->next()) {

            $id       = $cat['id'];
            $redirect = ($cat['gender'] == 'female') ? 'cats_females.php' : 'cats_males.php';

            echo 
            'Dropzone.options["myDropzone' . $id . '"] = {
                init: function() {
                    this.on("sending", function(file, xhr, formData) {
                        formData.append("catsadult_id", "' . $id . '");
                        formData.append("redirect", "' . $redirect . '");
                    });
                }
            }
            ';

        }

    }

}