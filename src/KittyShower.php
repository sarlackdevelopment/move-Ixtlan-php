<?php

class KittyShower {

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

    public function show_Breed() {

        echo
        '<section class="tab-pane fade show active" id="v-pills-headingBrood_J" role="tabpanel"
            aria-labelledby="v-pills-headingBrood_J-tab">

            <div style="background-color: rgba(248, 249, 250, 0.5);" class="card">
                <div class="card-body">
                    <div class="card-deck">
                        ' 
                            . $this->show_parent('Arvel', 'J', 'female')
                            . $this->show_parent('Pumpkin', 'J', 'male') . 
                        '
                    </div>
                    <h5 class="text-center m-3">Помет "J" (14.11.2018)</h5><hr>
                    ' . $this->show_add_kitty_form() . $this->show_kitty() . '
                </div>
            </div>
        </section>';

    }

    public function show_parent($name, $name_of_breed, $gender) {

        $result = '';

        $cat = R::findOne('catsadult', 'where name = ?', array($name));

        $short_descryption = $cat['short_descryption'];
        $long_descryption  = $cat['long_descryption'];

        // 11111111111
        if ($name == 'Arvel') {
            $main_photo = 'images/cats/female/Arvel/1.jpg';
        } else {
            if ($name == 'Ancalime')
                $main_photo = 'images/cats/female/Ancalime/1.jpg';
            else {
                $main_photo = 'images/cats/male/Pumpkin/1.jpg';
            }
        }
            // 11111111111

        $id             = $cat['id'];
        $data_target    = $name . $name_of_breed;
        $kind_of_parent = ($gender == 'male') ? 'Vater' : 'Mutter';

        $result = 
        '<div style="background-color: rgba(248, 249, 250, 0);" class="card">
            ' . ( $this->have_Rules() ? $this->show_choice_parent($gender) : '') . '
            <h6 class="text-center">' . $kind_of_parent . '<h6>
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
                                            ' . $this->img_controller->show_Owl_Img('imgcatsadult', 'catsadult_id', $id) . '
                                        </div>

                                    </div>

                                    <div class="container">
                                        <div class="row">   
                                            ' . $this->img_controller->show_Fancybox_Img('imgcatsadult', 'catsadult_id', $id, '', '', true) . '                    
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

        return $result;

    }

    private function show_choice_parent($gender) {

        $parents = R::findCollection('catsadult', 'where gender = ?', array($gender));

        $caption_choice_parent = ($gender == 'male') ? 'Выбор отца' : 'Выбор матери';

        $result = 
        '<label class="text-center" for="parent">' . $caption_choice_parent . '</label>
        <select name="parent" class="custom-select my-1 mr-sm-2">';

        while ($parent = $parents->next()) {
            $result = $result . '<option value="' . $parent['id'] . '">' . $parent['name'] . '</option>';
        }
        $result = $result . '</select>';

        return $result;

    }

    public function show_Period_of_Life($id, $active) {
        return
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

    public function show_Caption_Periods($kitty) {

        $periods = R::findCollection('periods');

        $active = 'active';
        $result = '';

        //$kitty_id = $kitty['id'];
        //$kitty_id = $kitty['id'];

        while ($period = $periods->next()) {

            $id   = $period['id'];
            $name = $period['name'];

            $result = $result . 
            '<a class="nav-link ' . $active . '" id="' . $id . '-tab" data-toggle="pill"
                href="#' . $id . '" role="tab" aria-controls="' . $id . '" aria-selected="true">
                ' . $name . '</a>';

            $active = '';
        }

        return $result;

    }

    public function show_Periods() {

        // $this->show_Period_of_Life("v-pills-" . $name . "-twoWeeks", "active")
        // show_Period_of_Life($id, $active)

        $periods = R::findCollection('periods');
        $result  = '';

        while ($period = $periods->next()) {
            
        }

    }


    public function show_kitty() {

        $kitten = R::findCollection('kitty');
        $result = '';

        while ($kitty = $kitten->next()) {

            $id                = $kitty['id'];
            $name              = $kitty['name'];
            $short_descryption = $kitty['short_descryption'];
            $long_descryption  = $kitty['long_descryption'];
            $state             = $kitty['state'];
            $state_descryption = $kitty['state_descryption'];
            $main_photo        = $kitty['main_photo'];

            $result = $result .   
            '<div class="card-deck mt-4">
                <article style="background-color: rgba(23, 162, 184, 0.2);"  brood_id="9" class="card container container-fluid">
                    <a href="#" data-toggle="modal" data-target="#kitty' . $name . '"><img
                        class="card-img-top rounded-circle"
                        title="порода кошек норвежская лесная фото питомник норвежских лесных кошек фото котят норвежской кошки"
                        src="' . $main_photo . '" alt="котята норвежской"></a>

                    <div class="card-body">

                        <header><h5 class="card-title text-center">' . $name . '</h5></header>

                        <div class="card-footer">

                            <div class="modal fade" id="kitty' . $name . '" tabindex="-1" role="dialog"
                                aria-labelledby="kitty' . $name . 'Title" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-center" id="kitty' . $name . 'Title">' . $name . '</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">

                                            <div class="container border border-primary">

                                                <div class="nav nav-fill nav-pills" id="v-pills-tab-' . $name . '" role="tablist">
                                                    ' . $this->show_edit_period_form($name) . $this->show_Caption_Periods($kitty) . '
                                                </div>

                                                <div id="v-pills-tabContent-' . $name . '" class="tab-content">
                                                ' 
                                                    . $this->show_Period_of_Life("v-pills-" . $name . "-twoWeeks", "active") 
                                                    . $this->show_Period_of_Life("v-pills-" . $name . "-oneMonth", "")
                                                    . $this->show_Period_of_Life("v-pills-" . $name . "-twoMonth", "") . 
                                                '   
                                                </div>

                                                <div class="container alert alert-info" role="alert">
                                                    <p>' . $long_descryption . '</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            ' . $this->show_detail_kitty($kitty) . '

                            <div class="modal fade" id="kitty' . $name . 'Documents" tabindex="-1"
                                role="dialog" aria-labelledby="kitty' . $name . 'Title" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-center" id="kitty' . $name . 'Title">Метрика</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <a data-fancybox="cats_kitty_' . $name . '_Documents" href="images/cats/kitty/metriks/J/Juan.jpg">
                                                <img class="img-fluid"
                                                    title="купить норвежского котенка в москве путешествие в икстлан с проводниками"
                                                    src="images/cats/kitty/metriks/J/Juan.jpg"
                                                    alt="котята норвежской">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                ' . $this->get_modal_delete_kitty_form($id) . '
            </div>';
        }

        return $result;

    }

    public function events_for_delete_kitty() {

        $kitten = R::findCollection('kitty');
        $result = '';

        while ($kitty = $kitten->next()) {

            $id = $kitty['id'];
            
            $result = $result . 
                "$('#delete_kitty" . $id . "').on('click', function() {
                    $.post( 'src/DB/kitty_CRUD/kitty_delete.php', { 'kitten_id' : " . $id . " }, function() {
                        $('#modalDeleteKitty" . $id . "').modal('hide')
                    });
                });";
        }

        echo $result;

    }

    private function show_detail_kitty($kitty) {

        $id                = $kitty['id'];
        $name              = $kitty['name'];
        $short_descryption = $kitty['short_descryption'];
        $long_descryption  = $kitty['long_descryption'];
        $state_id          = $kitty['states_id'];
        $state_descryption = $kitty['state_descryption'];

        $state = R::findOne('states', 'where id = ?', array($state_id));

        $template_show_detail_kitty = 
        '<p class="text-center">' . $short_descryption . '</p>
        <div class="d-flex flex-column justify-content-center bd-highlight">
            <button class="flex-fill bd-highlight btn btn-' . $state['color'] . ' m-1"
                data-placement="top" data-toggle="popover" title="' . $state['name'] . '"
                data-content="' . $state_descryption . '">
                ' . $state['name'] . '
            </button>
            <button type="button"
                class="flex-fill bd-highlight btn btn-primary m-1"
                data-toggle="modal" data-target="#kitty' . $name . 'Documents">
                Документы
            </button>
            <button type="button"
                class="flex-fill bd-highlight btn btn-primary m-1"
                data-toggle="modal" data-target="#kitty' . $name . '">
                Подробнее
            </button>
        </div>';

        $template_edit_detail_kitty = 
        '<div class="modal-body">
            <input type="hidden" name="kitty_id" value="' . $id . '">
            <div class="form-group">                                   
                <label for="name">Имя</label>
                <textarea name="name" class="form-control" rows="1" required>' . $name . '</textarea>                                  
            </div>
            <div class="form-group">                                   
                <label for="short_descryption">Краткое описание</label>
                <textarea name="short_descryption" class="form-control" rows="1" required>' . $short_descryption . '</textarea>                                  
            </div>
            ' . $this->show_choice_state($kitty) . '
            <div class="form-group">                                   
                <label for="state_descryption">Описание состояния</label>
                <textarea name="state_descryption" class="form-control" rows="1" required>' . $state_descryption . '</textarea>                                  
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary btn-block my-1" type="submit">Сохранить</button>
        </div>'; 

        if (!$this->have_Rules()) {
            return $template_show_detail_kitty;           
        } else {
            return
            '<form action="/Ixtlan-php/src/DB/kitty_CRUD/kitty_edit_detail.php" method="post">
                ' . $template_edit_detail_kitty . '
            </form>
            ' . $this->img_controller->show_img_Editor_Form($name . '-edit', 'Изменить главное фото можно здесь', '/Ixtlan-php/src/DB/kitty_CRUD/kitty_main_photo_add.php')
            . '<button data-toggle="modal" data-target="#modalDeleteKitty' . $id . '" kitty_id=' . $id . ' class="btn btn-block btn-danger my-1">Удалить</button>';
        }
    }

    private function have_Rules() {
        return true;
    }

    public function show_add_brood_form() {

        if (!$this->have_Rules()) {
            return '';
        } else {

            return     
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_brood" aria-expanded="false" aria-controls="add_brood">
                Добавить помет
            </button>
            <form id="add_brood" style="background-color: rgba(23, 162, 184, 0.2);" class="collapse" action="/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_add.php" method="post">
                <div class="modal-body">                                   
                    <label for="name_of_brood">Литера помета</label>
                    <textarea name="name_of_brood" class="form-control" rows="1" required></textarea>                                  
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                </div>
            </form>';

        }

    }

    public function show_life_states_form() {

        if (!$this->have_Rules()) {
            return '';
        } else {

            if (!$this->have_Rules()) {
                return '';
            } else {
    
                $states_view = '';
                $states      = R::findCollection('states');
        
                while ($state = $states->next()) {
    
                    $id     = $state['id'];
                    $name   = $state['name'];
                    $checks = 
                    '<div style="left: 4em;" class="position-absolute">
                        <input name="checks[]" value="' . $id . '" class="form-check-input" type="checkbox">
                    </div>';
    
                    $states_view = $states_view . 
                        '<tr class="table-secondary">
                            <th class="position-relative">' . $checks . '</th>
                            <th scope="row">' . $id . '</th>
                            <td>' . $name . '</td>
                        </tr>';
    
                }
            }

            return
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_state" aria-expanded="false" aria-controls="add_state">
                Добавить статус
            </button>

            <div style="background-color: rgba(23, 162, 184, 0.2);" id="add_state" class="collapse m-2">

                <hr>

                <form action="/Ixtlan-php/src/DB/kitty_CRUD/state_CRUD/state_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="name_of_state">Имя статуса</label>
                        <textarea name="name_of_state" class="form-control" rows="1" required></textarea>                                  
                    </div>
                    <div class="modal-body">                                   
                        <label for="color_of_button">Цвет кнопки</label>
                        <textarea name="color_of_button" class="form-control" rows="1" required></textarea>                                  
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                    </div>
                </form>

                <form id="form_delete_state" class="m-2" action="/Ixtlan-php/src/DB/kitty_CRUD/state_CRUD/state_delete_group.php" method="post"> 
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr class="table-success">
                                <th scope="col">Отметить</th>
                                <th scope="col">Идентификатор состояние</th>
                                <th scope="col">Представление состояния</th>
                            </tr>
                        </thead>
                        <tbody>
                            ' . $states_view . '
                        </tbody>
                    </table>
                </form>
                <button data-toggle="modal" data-target="#modalDeleteState" class="btn btn-sm btn-block btn-danger my-1">Удалить отмеченные</button>
                    ' . $this->get_modal_delete_state() . '
            </div>';

        }   

    }

    private function get_modal_delete_kitty_form($id) {

        return
        '<div class="modal fade" id="modalDeleteKitty' . $id . '" tabindex="-1" kitten_id="' . $id . '" role="dialog" aria-labelledby="modalDeleteKittyTitle' . $id . '" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление котенка</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Опасная операция! Удаление котенка приведет к удалению всей связанной с ним информации.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_kitty' . $id . '" type="button" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

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
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#life_periods" aria-expanded="false" aria-controls="life_periods">
                Добавить период
            </button>
            <div style="background-color: rgba(23, 162, 184, 0.2);" id="life_periods" class="collapse m-2">

                <hr>

                <form action="/Ixtlan-php/src/DB/kitty_CRUD/period_CRUD/period_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="name_of_period">Название периода</label>
                        <textarea name="name_of_period" class="form-control" rows="1" required></textarea> 
                        <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>                                 
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
                </form>
                <button data-toggle="modal" data-target="#modalDeleteBrood" class="btn btn-sm btn-block btn-danger my-1">Удалить отмеченные</button>
                ' . $this->get_modal_delete_brood() . '
            </div>';

        }

    }

    private function get_modal_delete_brood() {

        return
        '<div class="modal fade" id="modalDeleteBrood" tabindex="-1" role="dialog" aria-labelledby="modalDeleteBroodTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление периодов</h5>
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

    private function get_modal_delete_state() {

        return
        '<div class="modal fade" id="modalDeleteState" tabindex="-1" role="dialog" aria-labelledby="modalDeleteStateTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление состояния</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Опасная операция! Удаление состояния переведет всех котят в статус "Свободен".
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_state" type="button" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    /*public function show_form_delete_broods() {

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

    }*/

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
                . ' 1111 Добавить в id помет 1111  ' . $this->img_controller->show_img_Editor_Form($name_kitten, 'Добавить фото можно здесь','/Ixtlan-php/src/DB/kitty_CRUD/img_CRUD/img_add.php') . '
            </div>';

        }

    }

    public function show_add_kitty_form() {

        if (!$this->have_Rules()) {
            return '';
        } else {

            return     
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_kitty" aria-expanded="false" aria-controls="add_kitty">
                Добавить котенка
            </button>

            <div style="background-color: rgba(248, 249, 250, 0.5);" id="add_kitty" class="collapse m-2">

                <form class="container container-fluid" action="/Ixtlan-php/src/DB/kitty_CRUD/kitty_add.php" method="post">

                    <div class="modal-body">

                        <div class="form-group">                                   
                            <label for="name_of_kitty">Имя котенка</label>
                            <textarea name="name_of_kitty" class="form-control" rows="1" required></textarea>                                  
                        </div>

                        <div class="form-group">                                   
                            <label for="short_descryption">Краткое описание</label>
                            <textarea name="short_descryption" class="form-control" rows="1" required></textarea>                                  
                        </div>

                        <div class="form-group">                                   
                            <label for="long_descryption">Полное описание</label>
                            <textarea name="long_descryption" class="form-control" rows="3" required></textarea>                                  
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                    </div>
                
                </form>
                
            </div>';

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

    private function show_choice_state($kitty) {

        $states        = R::findCollection('states');
        $current_state = R::findOne('states', 'where id = ?', array($kitty['states_id']));

        $result = 
        '<label for="states">Выбор состояния</label>
        <select id="myselect_state_' . $kitty['name'] . '" name="state" class="custom-select my-1 mr-sm-2">
            <option value="' . $current_state['id'] . '" selected>' . $current_state['name'] . '</option>';

        while ($state = $states->next()) {
            $result = $result . '<option value="' . $state['id'] . '">' . $state['name'] . '</option>';
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

    public function init_Dropzones_for_main_photo($suffix) {

        $kitty_table = R::findCollection('kitty');

        while ($kitty = $kitty_table->next()) {

            $id   = $kitty['id'];
            $name = $kitty['name'];

            echo 
            'Dropzone.options["myDropzone' . $name . $suffix . '"] = {
                init: function() {
                    this.on("sending", function(file, xhr, formData) {
                        formData.append("kitty_id", "' . $id . '");
                        formData.append("brood_id", $("#kitty' . $name . '").attr("brood_id"));
                    });
                }
            }
            ';

        }

    }


}