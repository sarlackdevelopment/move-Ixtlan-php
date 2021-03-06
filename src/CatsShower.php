<?php

// TODO Переписать на img utils
include_once('src/controllers/Img_Controller.php');

require_once 'src/utils.php';
require_once 'check_rules.php';
require_once 'const_local.php';

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

    private function show_edit_form($gender) {

        if (!CHECK_RULES::ROOT()) {
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
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_cat_female" aria-expanded="false" aria-controls="add_cat_female">
                Добавить ' . $target . '
            </button>
            <form id="add_cat_female" class="collapse" action="src/DB/cat_CRUD/cat_add.php" method="post">

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
                    <button class="btn btn-info btn-block my-1" type="submit">Сохранить</button>
                </div>

            </form>';
        }

    }

    private function show_Cats_Forms($id, $short_descryption, $long_descryption, $name, $gender) {
        
        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {

            $redirect = ($gender == 'female') ? 'cats_females.php' : 'cats_males.php';
            $target   = ($gender == 'female') ? 'кошки' : 'кота';

            return     
            '<div class="container container-fluid border border-info rounded mt-2">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Отредактировать описание кошки можно здесь</span>
                <form class="container container-fluid" action="src/DB/cat_CRUD/cat_edit.php" method="post">

                    <input type="hidden" name="cat_id" value="' . $id . '">
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

                    ' . $this->show_main_photo($id) . '

                    <button class="btn btn-primary btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>

                </form>
                <button type="button" class="btn btn-sm btn-danger btn-block" data-toggle="modal" data-target="#modalDeleteAdult" catsadult_id="' . $id . '">Удалить</button>
            </div>';

        }

    }

    // + Удаление кошки DRY

    private function get_modal_delete_female() {

        return
        '<div class="modal fade" id="modalDeleteAdult" tabindex="-1" role="dialog" aria-labelledby="modalDeleteAdultTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление животного</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Удаление животного приведет к удалению всей информации по нему?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_adult" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // - Удаление выставки

    private function get_list_of_Adult_Cats($gender) {

        $local = UtilsLocal::currentLanguage()['short_caption'];

        $catsadult = R::findCollection('catsadult', 'where gender = ? and _local = ?', array($gender, $local));
        
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

    private function show_main_photo($id) {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {
            $imgs = R::findCollection('imgcatsadult', 'where catsadult_id = ?', array($id));

            $cat        = R::findOne('catsadult', 'where id = ?', array($id));
            $main_photo = R::findOne('imgcatsadult', 'where id = ?', array($cat['main_photo_id']));

            $result = 
            '<input type="hidden" name="brood_id" value="' . $id . '">
            <label for="main_photo">Выбор главного фото</label>
            <select name="main_photo" class="custom-select my-1 mr-sm-2">
            <option value="' . $main_photo['id'] . '">' . $main_photo['name'] . '</option>';

            while ($img = $imgs->next()) {
                $result = $result . '<option value="' . $img['id'] . '">' . $img['name'] . '</option>';
            }
            $result = $result . '</select>';

            return $result;
        }

    }

    //-DRY Перенести в утилиты
    private function show_img_Editor_Form($id) {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {
            return 
            '<div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Добавить фото в галлерею можно здесь</span>
                <form id="my-dropzone-' . $id . '" class="dropzone container container-fluid mb-2" action="src/DB/cat_CRUD/img_CRUD/img_add.php"></form>
            </div>';
        }

    }

    public function show_Cats_Adult($accordion_name, $gender) {

        echo $this->show_edit_form($gender) . $this->get_modal_delete_female() . 
            Utils::showModalDeleteForm('Удаление изображений',
                'Опасная операция - изображения будут удалены из базы данных и 
                    с жесткого диска. Уверена, что хочешь удалить выбранные изображения?');

        $list_of_adult_cats = $this->get_list_of_Adult_Cats($gender);
        $count              = count($list_of_adult_cats);

        for ($index = 0; $index < $count; $index++) {

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
                                            'src/DB/cat_CRUD/img_CRUD/img_delete_group.php', $redirect) .
                                        $this->show_img_Editor_Form($id) . 
                                        $this->show_Cats_Forms($id, $short_descryption, $long_descryption, $name, $gender) . ' 
                                </div>

                                <hr>

                            </div>

                            <div class="container">
                                <div class="container jumbotron shadow-lg p-3 mb-5 rounded">
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
                                                <h5 class="modal-title" id="CatTitle' . $postfix  . '">' . LocalConstants::mainLocal()['about_me_in_more_details'] . '</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ' . $long_descryption . '
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-block btn-secondary" data-dismiss="modal">
                                                    ' . LocalConstants::mainLocal()['close_title'] . '
                                                </button>
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

}