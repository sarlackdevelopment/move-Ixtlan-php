<?php

class KittyShower {

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

    /* private function get_list_of_Broods() {
            
        $list_of_broods = array(
            array(
                'id'   => '1',
                'name' => 'Помет "J"',
                'ref'  => 'headingBrood_J'
            ),
            array(
                'id'   => '2',
                'name' => 'Помет "K"',
                'ref'  => 'headingBrood_K'
            ),
            array(
                'id'   => '3',
                'name' => 'Общие фото',
                'ref'  => 'common'
            )
        );

        return $list_of_broods;

    }*/

    private function get_list_of_Common_Photo() {
            
        $list_of_common_photo_content = array(
            array(
                'id'              => '1',
                'name'            => '1.jpg',
                'kind_of_photo'   => 'common',
                '_name_of_kitten' => '',
                '_name_of_brood'  => '',
                '_name_of_period' => '',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '2',
                'name'            => '2.jpg',
                'kind_of_photo'   => 'common',
                '_name_of_kitten' => '',
                '_name_of_brood'  => '',
                '_name_of_period' => '',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '3',
                'name'            => '3.jpg',
                'kind_of_photo'   => 'common',
                '_name_of_kitten' => '',
                '_name_of_brood'  => '',
                '_name_of_period' => '',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '4',
                'name'            => '1.jpg',
                'kind_of_photo'   => 'broods',
                '_name_of_kitten' => 'Juan',
                '_name_of_brood'  => 'J',
                '_name_of_period' => 'twoWeeks',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '5',
                'name'            => '2.jpg',
                'kind_of_photo'   => 'broods',
                '_name_of_kitten' => 'Juan',
                '_name_of_brood'  => 'J',
                '_name_of_period' => 'twoWeeks',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            ),
            array(
                'id'              => '6',
                'name'            => '3.jpg',
                'kind_of_photo'   => 'broods',
                '_name_of_kitten' => 'Juan',
                '_name_of_brood'  => 'J',
                '_name_of_period' => 'twoWeeks',
                'path_template'   => 'images/cats/kitty/{{cats_name_template}}/{{name}}'
            )
        ); 

        return $list_of_common_photo_content;

    }

    private function get_list_of_Periods() {

        $list_of_periods = array(
            array(
                'id'          => '1',
                'name'        => 'twoWeeks',
                'descryption' => 'Две недели'
            ),
            array(
                'id'          => '2',
                'name'        => 'OneMonth',
                'descryption' => 'Один месяц'
            ),
            array(
                'id'          => '3',
                'name'        => 'TwoMonth',
                'descryption' => 'Три месяца'
            )
        ); 

        return $list_of_periods;

    }

    /* public function show_list_of_Broods() {

        $list_of_broods = $this->get_list_of_Broods();
        $count          = count($list_of_broods);

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_broods = $list_of_broods[$index];
            $is_first_iteration = ($index == 0) ? 'active' : '';
            $name               = $instance_of_broods['name'];
            $ref                = $instance_of_broods['ref'];
 
            echo
            '<a style="font-size: 1em;" class="mx-auto nav-link ' . $is_first_iteration . '" id="v-pills-' . $ref . '-tab"
                data-toggle="pill" href="#v-pills-' . $ref . '" role="tab" aria-controls="v-pills-' . $ref . '"
                    aria-selected="true">' . $name . '</a>';

        }

    }*/

    public function show_list_of_Periods($name_of_Kitten) {

        $list_of_periods = $this->get_list_of_Periods();
        $count           = count($list_of_periods);

        echo '<div class="nav nav-fill nav-pills" id="v-pills-tab-"' . $name_of_Kitten . ' role="tablist">';

        for ($index = 0; $index < $count; $index ++) {

            $instance_of_periods = $list_of_periods[$index];

            $name        = $instance_of_periods['name'];
            $descryption = $instance_of_periods['descryption'];

            $full_name_of_period = $name_of_Kitten . '-' . $name;
            $is_active           = ($index == 0) ? 'active' : '';

            echo 
            '<a class="nav-link ' . $is_active . '" id="v-pills-' . $full_name_of_period . '-tab"
                data-toggle="pill" href="#v-pills-' . $full_name_of_period . '"
                role="tab" aria-controls="v-pills-' . $full_name_of_period . '"
                aria-selected="true">' . $descryption . '</a>';
        }

        echo '</div>';

    }

    private function show_Owl_Content($id, $list_of_img_content) {

        $parametrs = array(
            'list_of_img_content' => $list_of_img_content,
            'img_id'              => $id,
            'id_template'         => '{{cats_name_template}}',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Owl_Content($parametrs);

    }

    private function show_Fancybox_Content($id, $list_of_img_content) {

        $parametrs = array(
            'list_of_img_content' => $list_of_img_content,
            'img_id'              => $id,
            'id_template'         => '{{cats_name_template}}',
            'alias_template'      => 'cats_name_template',
            'img_name_template'   => '{{name}}'
        );

        return $this->img_controller->show_Fancybox_Content($parametrs);

    }

    public function show_Kitten_Photo_Owl($name_of_broods, $name_of_kitten, $name_of_period) {

        $cats_name_template = $name_of_broods . '/' . $name_of_kitten . '/' . $name_of_period;

        echo $this->show_Owl_Content($cats_name_template, $this->get_list_of_Common_Photo());

        //echo phpinfo();

    }

    public function show_Common_Photo_Owl() {

        echo $this->show_Owl_Content("common", $this->get_list_of_Common_Photo());

    }

    public function show_Kitten_Photo_Fancybox($name_of_broods, $name_of_kitten, $name_of_period) {

        $cats_name_template = $name_of_broods . '/' . $name_of_kitten . '/' . $name_of_period;

        echo $this->show_Fancybox_Content($cats_name_template, $this->get_list_of_Common_Photo());

    }

    public function show_Common_Photo_Fancybox() {

        echo $this->show_Fancybox_Content("common", $this->get_list_of_Common_Photo());

    }

    public function show_list_of_Broods() {

        $broods = R::findCollection('broods');
        $active = 'active';
    
        while ($brood = $broods->next()) {

            $hash = $brood['hash'];
            $name = $brood['name'];

            echo 
            '<a style="font-size: 1em;" class="mx-auto nav-link ' . $active . '" id="' . $hash . '-tab"
                data-toggle="pill" href="#' . $hash . '" role="tab"
                aria-controls="' . $hash . '" aria-selected="true">' . $name . '</a>';

            $active = '';
        }

    }
 
    public function show_Periods() {

        $periods = R::findCollection('periods');
        $active = 'active';
    
        while ($period = $periods->next()) {

            $hash = $period['hash'];
            $name = $period['name'];

            echo 
            '<a class="nav-link ' . $active . '" id="' . $hash . '-tab" data-toggle="pill"
                href="#' . $hash . '" role="tab" aria-controls="' . $hash . '" aria-selected="true">
                ' . $name . '</a>';

            $active = '';
        }

    }

    public function show_Period_of_Life($id, $active) {

        echo
        '<section class="tab-pane fade show ' . $active . '" id="' . $id . '" role="tabpanel" aria-labelledby="' . $id . '-tab">

            <div class="container mt-1 alert alert-primary" role="alert">

                <div class="owl-carousel">
                    <div class="item">
                        <img title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                            src="images/cats/kitty/J/Juan/TwoWeeks/1.jpg"
                            alt="купить котенка в москве">
                    </div>
                    <div class="item">
                        <img title="котята норвежской лесной кошки купить в москве купить норвежскую лесную кошку в москве"
                            src="images/cats/kitty/J/Juan/TwoWeeks/2.jpg"
                            alt="путешествие в икстлан">
                    </div>
                    <div class="item">
                        <img title="котята норвежской лесной москва норвежские лесные котята купить котята норвежской лесной кошки цена"
                            src="images/cats/kitty/J/Juan/TwoWeeks/3.jpg"
                            alt="норвежские лесные красавицы">
                    </div>
                </div>

            </div>

            <div class="container alert alert-primary" role="alert">

                <div class="row">
                    <div class="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="cats_kitty_Juan_TwoWeeks"
                            href="images/cats/kitty/J/Juan/TwoWeeks/1.jpg">
                            <img class="img-fluid" itle="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                                src="images/cats/kitty/J/Juan/TwoWeeks/1.jpg"
                                alt="котенок в подарок">
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="cats_kitty_Juan_TwoWeeks"
                            href="images/cats/kitty/J/Juan/TwoWeeks/2.jpg">
                            <img class="img-fluid"
                                title="норвежская лесная питомник питомники норвежских кошек питомник норвежских лесных кошек"
                                src="images/cats/kitty/J/Juan/TwoWeeks/2.jpg"
                                alt="норвежский котенок в подарок">
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 thumb">
                        <a data-fancybox="cats_kitty_Juan_TwoWeeks"
                            href="images/cats/kitty/J/Juan/TwoWeeks/3.jpg">
                            <img class="img-fluid" title="норвежские лесные котята котенок норвежской лесной норвежские лесные котята купить"
                                src="images/cats/kitty/J/Juan/TwoWeeks/3.jpg"
                                alt="норвежские лесные котята">
                        </a>
                    </div>
                </div>

            </div>

        </section>';
    }

    private function have_Rules() {
        return true;
    }

    public function show_add_brood_form() {

        if (!$this->have_Rules()) {
            return '';
        } else {

            return     
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_brood" aria-expanded="false" aria-controls="add_brood">
                Добавить помет
            </button>
            <form id="add_brood" class="collapse" action="/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_add.php" method="post">
                <div class="modal-body">                                   
                    <label for="name_of_brood">Название помета</label>
                    <textarea name="name_of_brood" class="form-control" rows="1" required></textarea>                                  
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary btn-block my-1" type="submit">Сохранить</button>
                </div>
            </form>';

        }

    }

    public function show_life_periods_form() {

        if (!$this->have_Rules()) {
            return '';
        } else {

            $periods_view = '';
            $periods      = R::findCollection('periods');
    
            while ($period = $periods->next()) {

                $id     = $period['id'];
                $name   = $period['name'];
                $checks = 
                '<div style="left: 4em;" class="position-absolute">
                    <input name="checks[]" value="' . $id . '" class="form-check-input" type="checkbox">
                </div>';

                $periods_view = $periods_view . 
                    '<tr class="table-secondary">
                        <th class="position-relative">' . $checks . '</th>
                        <th scope="row">' . $id . '</th>
                        <td>' . $name . '</td>
                    </tr>';

            }

            return     
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#life_periods" aria-expanded="false" aria-controls="life_periods">
                Периоды жизни
            </button>
            <div style="background-color: rgba(248, 249, 250, 0.5);" id="life_periods" class="collapse m-2">

                <hr>

                <form action="/Ixtlan-php/src/DB/kitty_CRUD/period_CRUD/period_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="name_of_period">Название периода</label>
                        <textarea name="name_of_period" class="form-control" rows="1" required></textarea> 
                        <button class="btn btn-block btn-info my-1" type="submit">Добавить период</button>                                 
                    </div>
                </form>

                <form id="form_delete_period" class="m-2" action="/Ixtlan-php/src/DB/kitty_CRUD/period_CRUD/period_delete_group.php" method="post"> 
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr class="table-success">
                                <th scope="col">Отметить</th>
                                <th scope="col">Идентификатор периода</th>
                                <th scope="col">Представление периода</th>
                            </tr>
                        </thead>
                        <tbody>
                            ' . $periods_view . '
                        </tbody>
                    </table>
                    <!--<button class="btn btn-block btn-danger my-1" type="submit">Удалить отмеченные</button>-->
                </form>
                <button data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-block btn-danger my-1">Удалить отмеченные</button>
                ' . $this->get_modal_form() . '
            </div>';

        }

    }

    private function get_modal_form() {

        return
        '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Удаление периодов</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Опасная операция! Удаление периода переместит все фотографии, привязанные к нему у всех котят в локальный раздел "Прочее".
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_period" type="button" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }



    public function show_form_delete_broods() {

        if (!$this->have_Rules()) {
            return '';
        } else {

            return     
            '<form id="delete_brood" class="collapse" action="/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_delete.php" method="post">
                <div class="modal-footer">
                    <button class="btn btn-primary btn-block my-1" type="submit">Удалить</button>
                </div>
            </form>';

        }

    }

    public function show_edit_period_form($name_kitten) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return     
            '<button class="btn btn-sm btn-block btn-outline-info my-1 kitten_get" 
                type="button" data-toggle="collapse" data-target="#add_period" aria-expanded="false" 
                aria-controls="add_period" name_kitten="' . $name_kitten . '">
                Добавить фото
            </button>
            <div id="add_period" class="container container-fluid collapse mb-2">
                ' . $this->show_choice_period($name_kitten) .
                '<hr>' 
                . $this->img_controller->show_img_Editor_Form($name_kitten, 'Добавить фото можно здесь','/Ixtlan-php/src/DB/kitty_CRUD/img_CRUD/img_add.php') . 
            '<!--<button id="fff" type="button" class="btn btn-primary">Получить</button>-->
            </div>';

        }

    }

    public function show_add_kitty_form() {

        if (!$this->have_Rules()) {
            return '';
        } else {

            return     
            '<form id="add_kitty" class="container container-fluid" action="/Ixtlan-php/src/DB/kitty_CRUD/kitty_add.php" method="post">

                <div class="modal-body">                                   
                    <label for="name_of_kitty">Имя котенка</label>
                    <textarea name="name_of_kitty" class="form-control" rows="1" required></textarea>                                  
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary btn-block my-1" type="submit">Сохранить</button>
                </div>
                
            </form>';

        }

    }

    private function show_choice_period($name_kitten) {

        $periods = R::findCollection('periods');

        $first_element = $periods->next();

        $result = 
        '<label for="periods">Выбор периода</label>
        <select id="myselect_' . $name_kitten . '" name="period" class="custom-select my-1 mr-sm-2">
            <option value="' . $first_element['id'] . '" selected>' . $first_element['name'] . '</option>';

        while ($period = $periods->next()) {

            $name_period = $period['name'];
            $id          = $period['id'];

            $result = $result . '<option value="' . $id . '">' . $name_period . '</option>';

        }
        $result = $result . '</select>';

        return $result;

    }

    public function show_Init_Dropzones() {

        $kitty_table = R::findCollection('kitty');

        while ($kitty = $kitty_table->next()) {

            $id   = $kitty['id'];
            $name = $kitty['name'];

            echo 
            'Dropzone.options["myDropzone' . $name . '"] = {
                init: function() {
                    this.on("sending", function(file, xhr, formData) {
                        formData.append("kitty_id", "' . $id . '");
                        formData.append("period_id", $("#myselect_' . $name . '").val());
                        formData.append("brood_id", $("#kitty' . $name . '").attr("brood_id"));
                    });
                }
            }
            ';

        }

    }


}