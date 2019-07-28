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

    public function show_list_of_Broods() {

        $broods = R::findCollection('broods');
        $active = 'active';
    
        while ($brood = $broods->next()) {

            $hash = 'v-pills-headingBrood_' . $brood['id'];
            $name = $brood['name'];

            echo
            '<a style="font-size: 1em;" class="mx-auto nav-link ' . $active . '" id="' . $hash . '-tab"
                data-toggle="pill" href="#' . $hash . '" role="tab"
                aria-controls="' . $hash . '" aria-selected="true">' . $name . '</a>';

            $active = '';
        }

    }

    public function show_Breed($brood_id, $active) {

        $target_breed = R::findOne('broods', 'where id = ?', array($brood_id));

        $female_parent_id = $target_breed['female_parent_id'];
        $male_parent_id   = $target_breed['male_parent_id'];

        $parent_section = '';

        if ($female_parent_id == NULL) {
            $parent_section = $parent_section . 
            '<form class="container container-fluid" action="/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_parent_edit.php" method="post">
                ' . ( $this->have_Rules() ? $this->show_choice_parent('female', $brood_id) : '') . '
                <button class="btn btn-block btn-info my-1" type="submit">Сохранить</button>
            </form>';
        } else {
            $parent_section = $parent_section . $this->show_parent($female_parent_id, $brood_id);
        }

        if ($male_parent_id == NULL) {
            $parent_section = $parent_section . 
            '<form class="container container-fluid" action="/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_parent_edit.php" method="post">
                ' . ( $this->have_Rules() ? $this->show_choice_parent('male', $brood_id) : '') . '
                <button class="btn btn-block btn-info my-1" type="submit">Сохранить</button>
            </form>';
        } else {
            $parent_section = $parent_section . $this->show_parent($male_parent_id, $brood_id);
        }

        echo
        '<section class="tab-pane fade show ' . $active . '" id="v-pills-headingBrood_' . $brood_id . '" role="tabpanel"
            aria-labelledby="v-pills-headingBrood_' . $brood_id . '-tab">
                ' . $this->show_life_periods_form($brood_id) . '
            <div style="background-color: rgba(248, 249, 250, 0.5);" class="card">

                <div class="card-body">
                    <div class="card-deck">
                        ' . $parent_section. '
                    </div>
                    <h5 class="text-center m-3">Помет "' . $target_breed['symbol'] . '" (14.11.2018)</h5><hr>
                    ' . $this->show_add_kitty_form($brood_id) . $this->show_kitty($brood_id) . '
                </div>
            </div>
            ' . $this->show_delete_broods_form($brood_id) . '
        </section>';

    }

    public function show_All_Breed() {

        $broods = R::findCollection('broods');

        $active = 'active';
        while ($brood = $broods->next()) {
            $this->show_Breed($brood['id'], $active);
            $active = '';
        }

    }

    /* private function show_form_common_photo() {

        return
        '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_common_photo" aria-expanded="false" aria-controls="add_common_photo">
            Добавить общие фото
        </button>
        <div id="add_common_photo" class="container container-fluid collapse mb-2">
            ' . $this->img_controller->show_img_Editor_Form('common', 'Добавить общие фото можно здесь', '/Ixtlan-php/src/DB/kitty_CRUD/img_common_CRUD/img_common_add.php') . '
        </div>';

    } */

    private function show_form_common_photo() {

        return
        '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_common_photo" aria-expanded="false" aria-controls="add_common_photo">
            Добавить общие фото
        </button>
        <div id="add_common_photo" class="container container-fluid collapse mb-2">
            <div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Добавить общее фото можно здесь</span>
                <form id="my-dropzone-common" 
                    class="dropzone container container-fluid mb-2" 
                    action="/Ixtlan-php/src/DB/kitty_CRUD/img_common_CRUD/img_common_add.php">
                </form>
            </div>
        </div>';

    }

    public function show_common_photo() {

        $form_common_photo = '';

        if ($this->have_Rules()) {
            $form_common_photo = $this->show_form_common_photo();
        } 

        echo
        '<section class="tab-pane fade border-bottom border-primary" id="v-pills-common" role="tabpanel">
            ' . $form_common_photo . '
            <div class="owl-carousel border border-primary" style="background-color: rgba(248, 249, 250, 0);">        
                ' . $this->img_controller->show_Owl_Common_Photo('imgcommon') . '
            </div>
            <div class="container alert alert-primary" role="alert">
                ' . $this->img_controller->show_Fancybox_Common_Photo('imgcommon', 'commonphoto', '/Ixtlan-php/src/DB/kitty_CRUD/img_common_CRUD/img_common_delete.php') . '
            </div>
        </section>';

    }

    public function show_parent($parent_id, $brood_id) {

        $result = '';

        $parent = R::findOne('catsadult', 'where id = ?', array($parent_id));
        $brood  = R::findOne('broods', 'where id = ?', array($brood_id));

        $short_descryption = $parent['short_descryption'];
        $long_descryption  = $parent['long_descryption'];
        $gender            = $parent['gender'];
        $name              = $parent['name'];
        $main_photo_id     = $parent['main_photo_id'];

        $data_target    = $name . $brood['symbol'];
        $kind_of_parent = ($gender == 'male') ? 'Vater' : 'Mutter';

        $main_photo = R::findOne('imgcatsadult', 'where id = ?', array($main_photo_id));

        $result = 
        '<div style="background-color: rgba(248, 249, 250, 0);" class="card">
            <form action="/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_parent_edit.php" method="post">' 
                . ( $this->have_Rules() ? $this->show_choice_parent($gender, $brood_id) : '') . '
                <button class="btn btn-block btn-info my-1" type="submit">Сохранить</button>
            </form>
            <h6 class="text-center">' . $kind_of_parent . '<h6>
            <img class="card-img-top" title="норвежская лесная кошка купить норвежская лесная купить в москве норвежская лесная кошка описание породы"
                src="' . $main_photo['path'] . '" alt="котенок норвежской лесной">
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
                                            ' . $this->img_controller->show_Owl_Img('imgcatsadult', 'catsadult_id', $parent_id) . '
                                        </div>

                                    </div>

                                    <div class="container">
                                        <div class="row">   
                                            ' . $this->img_controller->show_Fancybox_Img('imgcatsadult', 'catsadult_id', $parent_id, '', '', true) . '                    
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

    private function show_choice_parent($gender, $brood_id) {

        $parents = R::findCollection('catsadult', 'where gender = ?', array($gender));
        $breed   = R::findOne('broods', 'where id = ?', array($brood_id));

        if ($gender == 'male') {
            $current_parent        = R::findOne('catsadult', 'where id = ?', array($breed['male_parent_id']));
            $caption_choice_parent = 'Выбор отца';
        } else {
            $current_parent        = R::findOne('catsadult', 'where id = ?', array($breed['female_parent_id']));
            $caption_choice_parent = 'Выбор матери';
        }

        $result = 
        '<input type="hidden" name="brood_id" value="' . $brood_id . '">
        <input type="hidden" name="gender" value="' . $gender . '">
        <label for="parent">' . $caption_choice_parent . '</label>
        <select name="parent" class="custom-select my-1 mr-sm-2">
            <option value="' . $current_parent['id'] . '">' . $current_parent['name'] . '</option>';

        while ($parent = $parents->next()) {
            $result = $result . '<option value="' . $parent['id'] . '">' . $parent['name'] . '</option>';
        }
        $result = $result . '</select>';

        return $result;

    }

    public function show_Period_of_Life($kitty_id, $period_id, $active) {

        $id = "periods_photo_" . $kitty_id . "_" . $period_id;

        return
        '<section class="tab-pane fade show ' . $active . '" id="' . $id . '" role="tabpanel" aria-labelledby="' . $id . '-tab">

            ' . $this->show_edit_period_form($kitty_id, $period_id) . '

            <div class="container mt-1 alert alert-primary" role="alert">

                <div class="owl-carousel">
                    ' . $this->show_img_period($kitty_id, $period_id) . '
                </div>

            </div>

            <div class="container alert alert-primary" role="alert">

                <div class="row">
                    ' . $this->show_img_period_fancybox($kitty_id, $period_id) . '
                </div>

            </div>

        </section>';
    }

    private function show_img_period($kitty_id, $period_id) {

        $result = '';
        $imgs   = R::findCollection('imgkitty', 'where kitty_id = ? and periods_id = ?', array($kitty_id, $period_id));

        while ($img = $imgs->next()) {
            $result = $result . 
            '<div class="item">
                <img title="rere котята норвежской лесной москва норвежские лесные котята купить котята норвежской лесной кошки цена"
                    src="' . $img['path'] . '"
                    alt="норвежские лесные красавицы">
            </div>';
        }

        return $result;

    }

    private function show_img_period_fancybox($kitty_id, $period_id) {

        $result     = '';
        $checkboxes = '';
        $imgs       = R::findCollection('imgkitty', 'where kitty_id = ? and periods_id = ?', array($kitty_id, $period_id));

        while ($img = $imgs->next()) {

            if ($this->have_Rules()) {
                $checkboxes = '<input style="top: 1em; left: 1em;" type="checkbox" class="position-absolute" name="checks[]" value="' . $img['id'] . '">';
            }

            $result = $result . 
            '<div class="col-lg-3 col-md-4 col-6 thumb">
                <a data-fancybox="cats_kitty_' . $kitty_id . '_' . $period_id . '"
                    href="' . $img['path'] . '">
                    <img class="img-fluid" title="норвежские лесные котята котенок норвежской лесной норвежские лесные котята купить"
                        src="' . $img['path'] . '"
                        alt="норвежские лесные котята">
                </a>
                ' . $checkboxes . '
            </div>';

        }

        if (!$this->have_Rules()) {
            return $result;
        } else {

            $id = $period_id . '_' . $kitty_id;

            return
            '<form id="delete_form' . $id . '" action="/Ixtlan-php/src/DB/kitty_CRUD/img_CRUD/img_delete.php" method="post">
                <div class="form-row">
                    ' . $result . '
                </div>
            </form>' . $this->img_controller->show_delete_form($id, 'Удаление изображений', 'Удалить отмеченные изображения?');

        }

    }

    public function show_Caption_Periods($kitty, $brood_id) {

        $periods = R::getAll(
            'SELECT periods.id, periods.name FROM periods AS periods INNER JOIN broods_periods AS broods_periods ON periods.id = broods_periods.periods_id AND broods_periods.broods_id = ?', 
                array($brood_id));
        
        $kitty_id = $kitty['id'];
        $active   = 'active';
        $result   = '';

        if (count($periods) != 1) {

            foreach ($periods as $period) {
        
                $period_id   = $period['id'];
                $period_name = $period['name'];
            
                $result = $result . 
                    '<a class="nav-link ' . $active . '" id="periods_photo_' . $kitty_id . '_' . $period_id . '-tab" data-toggle="pill"
                        href="#periods_photo_' . $kitty_id . '_'  . $period_id . '" role="tab" aria-controls="periods_photo_' . $kitty_id . '_'  . $period_id . '" aria-selected="true">
                        ' . $period_name . '</a>';
            
                $active = '';

            }

        }
        
        return $result;
        
    }

    public function show_Content_Periods($kitty, $brood_id) {

        $periods = R::getAll(
            'SELECT periods.id, periods.name FROM periods AS periods INNER JOIN broods_periods AS broods_periods ON periods.id = broods_periods.periods_id AND broods_periods.broods_id = ?', 
                array($brood_id));

        $kitty_id = $kitty['id'];
        $active   = 'active';
        $result   = '';

        foreach ($periods as $period) {

            $period_id = $period['id'];

            $result = $result . $this->show_Period_of_Life($kitty_id, $period_id, $active);

            $active = '';    
                
        }

        return $result;

    }

    public function show_kitty($brood_id) {

        $kitten = R::findCollection('kitty', 'where broods_id = ?', array($brood_id));
        $result = '';

        while ($kitty = $kitten->next()) {

            $kitty_id         = $kitty['id'];
            $name             = $kitty['name'];
            $long_descryption = $kitty['long_descryption'];
            $main_photo       = $kitty['main_photo'];
            
            $result = $result .   
            '<div class="card-deck mt-4">
                <article style="background-color: rgba(23, 162, 184, 0.2);" class="card container container-fluid">
                    <a href="#" data-toggle="modal" data-target="#kitty' . $kitty_id . '"><img
                        class="card-img-top rounded-circle"
                        title="порода кошек норвежская лесная фото питомник норвежских лесных кошек фото котят норвежской кошки"
                        src="' . $main_photo . '" alt="котята норвежской"></a>

                    <div class="card-body">

                        <header><h5 class="card-title text-center">' . $name . '</h5></header>

                        <div class="card-footer">

                            <div class="modal fade" id="kitty' . $kitty_id . '" tabindex="-1" role="dialog"
                                aria-labelledby="kitty' . $kitty_id . 'Title" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-center" id="kitty' . $kitty_id . 'Title">' . $name . '</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">

                                            <div class="container border border-primary">

                                                <div class="nav nav-fill nav-pills" id="v-pills-tab-' . $kitty_id . '" role="tablist">
                                                    ' . $this->show_Caption_Periods($kitty, $brood_id) . '
                                                </div>

                                                <div id="v-pills-tabContent-' . $kitty_id . '" class="tab-content">
                                                    ' . $this->show_Content_Periods($kitty, $brood_id) . '   
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

                            <div class="modal fade" id="kitty' . $kitty_id . 'Documents" tabindex="-1"
                                role="dialog" aria-labelledby="kitty' . $kitty_id . 'Title" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-center" id="kitty' . $kitty_id . 'Title">Метрика</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <a data-fancybox="cats_kitty_' . $kitty_id . '_Documents" href="images/cats/kitty/metriks/J/Juan.jpg">
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
                ' . $this->get_modal_delete_kitty_form($kitty_id) . '
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

    public function events_for_delete_period() {

        $broods = R::findCollection('broods');
        $result = '';

        while ($brood = $broods->next()) {

            $result = $result . 
                "$('#delete_period" . $brood['id'] . "').on('click', function() {           
                    $('#form_delete_period" . $brood['id'] . "').submit();
                });";

        }

        echo $result;

    }

    public function events_for_delete_brood() {

        $broods = R::findCollection('broods');
        $result = '';

        while ($brood = $broods->next()) {

            $id = $brood['id'];
            
            $result = $result . 
                "$('#delete_brood" . $id . "').on('click', function() {
                    $.post('/Ixtlan-php/src/DB/kitty_CRUD/brood_CRUD/brood_delete.php', { 'brood_id' : " . $id . " }, function() {
                        $('#modalDeleteBrood" . $id . "').modal('hide')
                    });
                });";
        }

        echo $result;

    }

    public function events_for_delete_img() {

        $imgskitty = R::getAll('SELECT periods_id AS periods_id, kitty_id AS kitty_id FROM imgkitty GROUP BY periods_id, kitty_id');
        $result    = '';

        foreach ($imgskitty as $current_img) {

            $id = $current_img['periods_id'] . '_' . $current_img['kitty_id'];

            $result = $result . 
                '$("#delete' . $id . '").on("click", function() {
                    $("#delete_form' . $id . '").submit();
                });';

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
                data-toggle="modal" data-target="#kitty' . $id . 'Documents">
                Документы
            </button>
            <button type="button"
                class="flex-fill bd-highlight btn btn-primary m-1"
                data-toggle="modal" data-target="#kitty' . $id . '">
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
            ' . $this->img_controller->show_img_Editor_Form($id, 'Изменить главное фото можно здесь', '/Ixtlan-php/src/DB/kitty_CRUD/kitty_main_photo_add.php')
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

    public function show_life_periods_form($brood_id) {

        if (!$this->have_Rules()) {
            return '';
        } else {

            $periods_view = '';

            $periods = R::getAll(
            'SELECT periods.id, periods.name FROM periods AS periods INNER JOIN broods_periods AS broods_periods ON periods.id = broods_periods.periods_id AND broods_periods.broods_id = ?', 
                array($brood_id));

            foreach ($periods as $period) {

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
            '<button class="btn btn-sm btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#life_periods' . $brood_id . '" aria-expanded="false" aria-controls="life_periods' . $brood_id . '">
                Добавить период
            </button>
            <div style="background-color: rgba(23, 162, 184, 0.2);" id="life_periods' . $brood_id . '" class="collapse m-2">

                <hr>

                <form action="/Ixtlan-php/src/DB/kitty_CRUD/period_CRUD/period_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="name_of_period">Название периода</label>
                        <textarea name="name_of_period" class="form-control" rows="1" required></textarea> 
                        <input type="hidden" name="brood_id" value="' . $brood_id . '">
                        <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>                                 
                    </div>
                </form>

                <form id="form_delete_period' . $brood_id . '" class="m-2" action="/Ixtlan-php/src/DB/kitty_CRUD/period_CRUD/period_delete_group.php" method="post"> 
                    <input type="hidden" name="brood_id" value="' . $brood_id . '">
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
                <button data-toggle="modal" data-target="#modalDeletePeriod' . $brood_id . '" class="btn btn-sm btn-block btn-danger my-1">Удалить отмеченные</button>
                ' . $this->get_modal_delete_period($brood_id) . '
            </div>';

        }

    }

    private function show_delete_broods_form($brood_id) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return
            '<button data-toggle="modal" data-target="#modalDeleteBrood' . $brood_id . '" class="btn btn-bg btn-block btn-danger my-1">Удалить помет</button>'
             . $this->get_modal_delete_brood($brood_id);
        }

    }

    private function get_modal_delete_brood($brood_id) {

        return
        '<div class="modal fade" id="modalDeleteBrood' . $brood_id . '" tabindex="-1" role="dialog" aria-labelledby="modalDeleteBroodTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление периодов</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Опасная операция! Удаление помета повлечет за собой удаление всех фотографий котят этого помета.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_brood' . $brood_id . '" type="button" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    private function get_modal_delete_period($brood_id) {

        return
        '<div class="modal fade" id="modalDeletePeriod' . $brood_id . '" tabindex="-1" role="dialog" aria-labelledby="modalDeletePeriodTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление периодов</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Опасная операция! Удаление периода повлечет за собой удаление всех фотографий котят этого помета, связанных с ним.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_period' . $brood_id . '" type="button" class="btn btn-danger">Я все поняла. Удалить</button>
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

    public function show_edit_period_form($kitten_id, $period_id) {

        if (!$this->have_Rules()) {
            return '';
        } else {
            return     
            '<button class="btn btn-bg btn-info btn-block my-1 kitten_get" 
                type="button" data-toggle="collapse" data-target="#add_period' . $kitten_id . '_' . $period_id . '" aria-expanded="false" 
                aria-controls="add_period' . $kitten_id  . '_' . $period_id . '">
                Добавить фото
            </button>

            <div id><div>

            <div id="add_period' . $kitten_id . '_' . $period_id . '" class="container container-fluid collapse mb-2">
                <hr>

                <div class="container container-fluid border border-info rounded">
                    <span class="bg-info d-flex justify-content-center text-dark mt-2">Добавить qwerty фото можно здесь</span>
                    <form id="my-dropzone-i' . $kitten_id . '-i' . $period_id . '" 
                        class="dropzone container container-fluid mb-2" 
                        action="/Ixtlan-php/src/DB/kitty_CRUD/img_CRUD/img_add.php">
                    </form>
                </div>
            </div>';

        }

    }

    public function show_add_kitty_form($brood_id) {

        if (!$this->have_Rules()) {
            return '';
        } else {

            return     
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_kitty' . $brood_id . '" aria-expanded="false" aria-controls="add_kitty">
                Добавить котенка
            </button>

            <div style="background-color: rgba(248, 249, 250, 0.5);" id="add_kitty' . $brood_id . '" class="collapse m-2">

                <form class="container container-fluid" action="/Ixtlan-php/src/DB/kitty_CRUD/kitty_add.php" method="post">

                    <div class="modal-body">

                        <input type="hidden" name="brood_id" value="' . $brood_id . '">

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

    /* public function show_Init_Dropzones_common_photo() {

        echo
        'Dropzone.options["myDropzoneCommon"] = {
            init: function() {
                this.on("sending", function(file, xhr, formData) {
                    formData.append("tmp", "tmp");
                });
            }
        }
        ';

    } */

    public function show_Init_Dropzones_kitten_main_photo() {

        $kitty_table = R::findCollection('kitty');

        while ($kitty = $kitty_table->next()) {

            echo 
            'Dropzone.options["myDropzone' . $kitty['id'] . '"] = {
                init: function() {
                    this.on("sending", function(file, xhr, formData) {
                        formData.append("kitty_id", "' . $kitty['id'] . '");
                        formData.append("brood_id", "' . $kitty['broods_id'] . '");
                    });
                }
            }
            ';

        }

    }

}