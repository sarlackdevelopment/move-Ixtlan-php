<?php

require_once 'check_rules.php';
require_once 'const_local.php';
require_once 'src/utils.php';
require_once 'src/local/utils.php';

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

        // TODO 
        //    1. Грузить архив только при необходимости
        //    2. Позиционировать подушку на первую в списке
        //    3. Попробовать заюзать gzip

        echo Utils::showModalCustomBanner();
        echo Utils::showModalRemoveBanner();
        echo Utils::showModalPhotoKittyContent();

        $local = UtilsLocal::currentLanguage()['short_caption'];

        $broods = R::findCollection('broods', 'where _local = ?', array($local));
        $active = 'active';
    
        while ($brood = $broods->next()) {

            $hash = 'v-pills-headingBrood_' . $brood['id'];
            $name = sprintf("%s \"%s\"", LocalConstants::mainLocal()['breed'], $brood['name']);

            echo
            '<a style="font-size: 1em;" class="mx-auto nav-link ' . $active . '" id="' . $hash . '-tab"
                data-toggle="pill" href="#' . $hash . '" role="tab"
                aria-controls="' . $hash . '" aria-selected="true">' . $name . '</a>';

            $active = '';
        }

        echo 
        '<a style="font-size: 1em;" class="mx-auto  nav-link" id="v-pills-common-archive"
            data-toggle="pill" href="#v-pills-archive" role="tab" aria-controls="v-pills-archive"
            aria-selected="false">' . LocalConstants::mainLocal()['archive_title'] . '</a>';

    }

    public function show_Breed($brood_id, $active) {

        $target_breed = R::findOne('broods', 'where id = ?', array($brood_id));

        $female_parent_id = $target_breed['female_parent_id'];
        $male_parent_id   = $target_breed['male_parent_id'];

        $parent_section = '';

        if ($female_parent_id == NULL) {
            $parent_section = $parent_section . 
            '<form class="container container-fluid" action="src/DB/kitty_CRUD/brood_CRUD/brood_parent_edit.php" method="post">
                ' . ( CHECK_RULES::ROOT() ? $this->show_choice_parent('female', $brood_id) : '') . '
                <button class="btn btn-block btn-info my-1" type="submit">Сохранить</button>
            </form>';
        } else {
            $parent_section = $parent_section . $this->show_parent($female_parent_id, $brood_id);
        }

        if ($male_parent_id == NULL) {
            $parent_section = $parent_section . 
            '<form class="container container-fluid" action="src/DB/kitty_CRUD/brood_CRUD/brood_parent_edit.php" method="post">
                ' . ( CHECK_RULES::ROOT() ? $this->show_choice_parent('male', $brood_id) : '') . '
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
                    <h5 class="text-center m-3">' .
                        sprintf("%s \"%s\" (%s)", LocalConstants::mainLocal()['breed'], $target_breed['name'], $target_breed['birth_date']) .
                    '</h5><hr>
                    ' . $this->show_add_kitty_form($brood_id) . $this->show_kitty($brood_id) . '
                </div>
            </div>
            ' . ( CHECK_RULES::ROOT() ? 
                '<button 
                    type="button" 
                    class="btn btn-sm btn-danger btn-block mb-2"
                    data-toggle="modal"
                    data-target="#modalDeleteBrood"
                    brood_id="' . $brood_id . 
                        '">Удалить помет
                </button>
                <button
                    type="button" 
                    class="btn btn-sm btn-info btn-block broodToArchive"
                    data-brood-id="' . $brood_id . 
                        '">' . ($this->inArchive($brood_id) ? 'В архив' : 'На главную') . '
                </button>
                ' : '') . '
        </section>';

    }

    private function inArchive($brood_id) {

        $brood = R::findOne('broods', 'where id = ?', array($brood_id));

        return ($brood['archive'] !== '0');

    }

    public function show_All_Breed() {

        $local = UtilsLocal::currentLanguage()['short_caption'];

        $broods = R::findCollection('broods', 'where _local = ?', array($local));

        $active = 'active';
        while ($brood = $broods->next()) {
            $this->show_Breed($brood['id'], $active);
            $active = '';
        }

        if (CHECK_RULES::ROOT()) {
            echo 
                $this->get_modal_delete_kitty_form() 
                    . $this->get_modal_delete_period() 
                    . $this->show_delete_broods_form() 
                    . $this->get_modal_delete_kitty_img()
                    . $this->get_modal_delete_state()
                    . $this->get_modal_delete_common_img();
        }

    }

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
                    action="src/DB/kitty_CRUD/img_common_CRUD/img_common_add.php">
                </form>
            </div>
        </div>';

    }

    public function show_common_photo() {

        $form_common_photo = '';

        if (CHECK_RULES::ROOT()) {
            $form_common_photo = $this->show_form_common_photo();
        } 

        echo
        '<section class="tab-pane fade border-bottom border-primary" id="v-pills-common" role="tabpanel">
            ' . $form_common_photo . '
            <div class="owl-carousel border border-primary" style="background-color: rgba(248, 249, 250, 0);">        
                ' . $this->img_controller->show_Owl_Common_Photo('imgcommon') . '
            </div>
            <div class="container alert alert-primary" role="alert">
                ' . $this->img_controller->show_Fancybox_Common_Photo() . '
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
            <form action="src/DB/kitty_CRUD/brood_CRUD/brood_parent_edit.php" method="post">' 
                . ( !CHECK_RULES::ROOT() ? '' : $this->show_choice_parent($gender, $brood_id) 
                . '<button class="btn btn-block btn-info my-1" type="submit">Сохранить</button>') . '
            </form>
            <h4 class="text-center">' . $kind_of_parent . '<h4>
            <img class="card-img-top" title="' . Utils::phrase_from_skr() . '"
                src="' . $main_photo['path'] . '" alt="' . Utils::phrase_from_skr() . '">
            <div class="card-body d-flex p-2 bd-highlight flex-column justify-content-end">
                <h5 class="card-title text-center">' . $short_descryption . '</h5>

                <button type="button" class="btn btn-primary btn-sm container-fluid"
                    data-toggle="modal" data-target="#' . $data_target . '">
                        ' . LocalConstants::mainLocal()['photo_title'] . '
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
                                <button type="button" class="btn btn-block btn-secondary" data-dismiss="modal">
                                    ' . LocalConstants::mainLocal()['close_title'] . '
                                </button>
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

    public function show_kitty($brood_id) {

        $local = UtilsLocal::currentLanguage()['short_caption'];

        $kitten = R::findCollection('kitty', 'where broods_id = ? and _local = ?', array($brood_id, $local));
        $result = '';

        while ($kitty = $kitten->next()) {

            $kitty_id         = $kitty['id'];
            $brood_id         = $kitty['broods_id'];
            $name             = $kitty['name'];
            $long_descryption = $kitty['long_descryption'];
            $main_photo       = $kitty['main_photo'];
            
            $result = $result .   
            '<div class="card-deck mt-4">
                <article style="background-color: rgba(23, 162, 184, 0.2);" class="card container container-fluid">
                    <a href="/" data-toggle="modal" data-target="#kittyPhotoContent" data-kitty-id="' . $kitty_id . '" data-brood-id="' . $brood_id . '">
                        <img
                            class="card-img-top rounded-circle"
                            title="' . Utils::phrase_from_skr() . '"
                            src="' . $main_photo . '" alt="' . Utils::phrase_from_skr() . '"></a>

                    <div class="card-body">

                        <header><h5 class="card-title text-center">' . $name . '</h5></header>

                        <div class="card-footer">
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
                                            <!--<a data-fancybox="cats_kitty_' . $kitty_id . '_Documents" href="images/cats/kitty/metriks/J/Juan.jpg">
                                                <img class="img-fluid"
                                                    title="' . Utils::phrase_from_skr() . '"
                                                    src="images/cats/kitty/metriks/J/Juan.jpg"
                                                    alt="' . Utils::phrase_from_skr() . '">
                                            </a>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>';
        }

        return $result;

    }

    private function show_detail_kitty($kitty) {

        $id                = $kitty['id'];
        $brood_id          = $kitty['broods_id'];
        $name              = $kitty['name'];
        $short_descryption = $kitty['short_descryption'];
        $long_descryption  = $kitty['long_descryption'];
        $state_id          = $kitty['states_id'];
        $state_descryption = $kitty['state_descryption'];

        $state = R::findOne('states', 'where id = ?', array($state_id));

        $state_name = '';
        switch ($state['name']) {
            case "Свободен":
                $state_name = LocalConstants::mainLocal()['free_state_male'];
                break;
            case "Свободна":
                $state_name = LocalConstants::mainLocal()['free_state_female'];
                break;
            case "Бронь":
                $state_name = LocalConstants::mainLocal()['book_state'];
                break;
            case "Интерес":
                $state_name = LocalConstants::mainLocal()['interest_state'];
                break;
            case "Обрел дом":
                $state_name = LocalConstants::mainLocal()['have_home_state_male'];
                break;
            case "Обрела дом":
                $state_name = LocalConstants::mainLocal()['have_home_state_female'];
                break;
        }
        

        $template_show_detail_kitty = 
        '<p class="text-center">' . $short_descryption . '</p>
        <div class="d-flex flex-column justify-content-center">
            <button class="flex-fill btn btn-' . $state['color'] . ' m-1"
                data-placement="top" data-toggle="popover" title="' . $state_name . '"
                data-content="' . $state_descryption . '">
                ' . $state_name . '
            </button>
            <button type="button"
                class="flex-fill btn btn-primary m-1"
                data-toggle="modal" data-target="#kitty' . $id . 'Documents">
                    ' . LocalConstants::mainLocal()['documents'] . '
            </button>
            <button type="button" data-toggle="modal" data-target="#kittyPhotoContent" class="flex-fill btn btn-primary m-1" data-kitty-id="' . $id . '" data-brood-id="' . $brood_id . '">
                ' . LocalConstants::mainLocal()['details'] . '
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
            <div class="form-group">                                   
                <label for="long_descryption">Полное описание</label>
                <textarea name="long_descryption" class="form-control" rows="3" required>' . $long_descryption . '</textarea>                                  
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

        if (!CHECK_RULES::ROOT()) {
            return $template_show_detail_kitty;           
        } else {

            $inBanner = $this->inBanner($id);

            return
            '<form action="src/DB/kitty_CRUD/kitty_edit_detail.php" method="post">
                ' . $template_edit_detail_kitty . '
            </form>

            <div class="container container-fluid border border-info rounded">
                <span class="bg-info d-flex justify-content-center text-dark mt-2">Изменить главное фото можно здесь</span>
                <form id="my-dropzone-' . $id . '" 
                    class="dropzone container container-fluid mb-2" 
                    action="src/DB/kitty_CRUD/kitty_main_photo_add.php">
                </form>
            </div>
            
            <button
                type="button" 
                class="btn btn-sm btn-' . ($inBanner ? 'info' : 'danger') . ' btn-block"
                data-toggle="modal"
                data-target="#' . ($inBanner ? 'modalCustomBanner' : 'modalRemoveBanner') . '"
                data-kitty-id="' . $id . 
            '">' . ($inBanner ? 'На передний план' : 'Убрать с переднего плана') . '</button>

            <button type="button" class="btn btn-sm btn-danger btn-block" data-toggle="modal" data-target="#modalDeleteKitty" kitty_id="' . $id . '">Удалить</button>';
        }

    }

    private function inBanner($id) {
        $brood = R::findOne('kitty', 'where id = ?', array($id));
        return ($brood['banner'] === '0');
    }

    public function show_add_brood_form() {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {

            return     
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_brood" aria-expanded="false" aria-controls="add_brood">
                Добавить помет
            </button>
            <form id="add_brood" style="background-color: rgba(23, 162, 184, 0.2);" class="collapse" action="src/DB/kitty_CRUD/brood_CRUD/brood_add.php" method="post">
                <div class="modal-body">                                   
                    <label for="name_of_brood">Литера помета</label>
                    <textarea name="name_of_brood" class="form-control" rows="1" required></textarea>
                    <label for="birth_date">Дата рождения</label>
                    <input name="birth_date" class="form-control" type="date" required>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                </div>
            </form>';

        }

    }

    public function show_life_states_form() {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {
    
            $local = UtilsLocal::currentLanguage()['short_caption'];

            $states_view = '';
            $states      = R::findCollection('states');
        
            while ($state = $states->next()) {
    
                $id    = $state['id'];
                $name  = $state['name'];
                $color = $state['color'];

                $checks = 
                    '<div style="left: 4em;" class="position-absolute">
                        <input name="checks[]" value="' . $id . '" class="form-check-input" type="checkbox" state_id="true">
                    </div>';
    
                $states_view = $states_view . 
                    '<tr class="table-secondary">
                        <th class="position-relative">' . $checks . '</th>
                        <td>' . $color . '</td>
                        <td>' . $name . '</td>
                    </tr>';

            }

            return
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_state" aria-expanded="false" aria-controls="add_state">
                Добавить статус
            </button>

            <div style="background-color: rgba(23, 162, 184, 0.2);" id="add_state" class="collapse m-2">
                <hr>
                <form action="src/DB/kitty_CRUD/state_CRUD/state_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="name_of_state">Имя статуса</label>
                        <textarea name="name_of_state" class="form-control" rows="1" required></textarea>
                        ' . $this->show_choice_color() . '                                 
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>
                    </div>
                </form>
 
                <table class="table table-striped table-sm">
                    <thead>
                        <tr class="table-success">
                            <th scope="col">Отметить</th>
                            <th scope="col">Цвет</th>
                            <th scope="col">Представление состояния</th>
                        </tr>
                    </thead>
                    <tbody>
                        ' . $states_view . '
                    </tbody>
                </table>
                <button data-toggle="modal" data-target="#modalDeleteState" class="btn btn-sm btn-block btn-danger my-1">Удалить отмеченные</button>
            </div>';

        }   

    }

    // Удаление статуса DRY

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
                        Уверена что хочешь удалить статус?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_state" type="button" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // + Удаление общих фото DRY

    private function get_modal_delete_common_img() {

        return
        '<div class="modal fade" id="modalDeleteCommonImg" tabindex="-1" role="dialog" aria-labelledby="modalDeleteCommonImgTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление общих фото</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Ты точно хочешь удалить фото?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_common_img" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // + Удаление котенка DRY

    private function get_modal_delete_kitty_form() {

        return
        '<div class="modal fade" id="modalDeleteKitty" tabindex="-1" role="dialog" aria-labelledby="modalDeleteKittyTitle" aria-hidden="true">
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
                        <button id="delete_kitty" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // + Удаление фото котят DRY

    private function get_modal_delete_kitty_img() {

        return
        '<div class="modal fade" id="modalDeleteImg" tabindex="-1" role="dialog" aria-labelledby="modalDeleteImgTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление фото</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Ты точно хочешь удалить фото?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_img" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    public function show_life_periods_form($brood_id) {

        if (!CHECK_RULES::ROOT()) {
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
                    <input name="checks[]" value="' . $id . '" class="form-check-input" type="checkbox" brood_id="' . $brood_id . '">
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

                <form action="src/DB/kitty_CRUD/period_CRUD/period_add.php" method="post">
                    <div class="modal-body">                                   
                        <label for="name_of_period">Название периода</label>
                        <textarea name="name_of_period" class="form-control" rows="1" required></textarea> 
                        <input type="hidden" name="brood_id" value="' . $brood_id . '">
                        <button class="btn btn-sm btn-block btn-info my-1" type="submit">Сохранить</button>                                 
                    </div>
                </form>       
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
                <button data-toggle="modal" data-target="#modalDeletePeriod" class="btn btn-sm btn-block btn-danger my-1" brood_id="' . $brood_id . '">Удалить отмеченные</button>
            </div>';

        }

    }

    // + Удаление помета DRY

    private function show_delete_broods_form() {

        return
        '<div class="modal fade" id="modalDeleteBrood" tabindex="-1" role="dialog" aria-labelledby="modalDeleteBroodTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление помета</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    Опасная операция! Удаление помета повлечет за собой удаление всех фотографий котят этого помета. Продолжить?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_brood" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    // + Удаление периода DRY

    private function get_modal_delete_period() {

        return
        '<div class="modal fade" id="modalDeletePeriod" tabindex="-1" role="dialog" aria-labelledby="modalDeletePeriodTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление периода</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    Опасная операция! Удаление периода повлечет за собой удаление всех фотографий котят этого помета для удаляемого периода.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_period" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>';

    }

    public function show_add_kitty_form($brood_id) {

        if (!CHECK_RULES::ROOT()) {
            return '';
        } else {

            return     
            '<button class="btn btn-bg btn-block btn-info my-1" type="button" data-toggle="collapse" data-target="#add_kitty' . $brood_id . '" aria-expanded="false" aria-controls="add_kitty">
                Добавить котенка
            </button>

            <div style="background-color: rgba(248, 249, 250, 0.5);" id="add_kitty' . $brood_id . '" class="collapse m-2">

                <form class="container container-fluid" action="src/DB/kitty_CRUD/kitty_add.php" method="post">

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

    private function show_choice_color() {

        $colors = array('primary', 'success', 'info', 'warning', 'danger', 'secondary', 'link');

        $result = 
        '<label for="color_of_button">Выбор цвета</label>
        <select name="color_of_button" class="custom-select my-1 mr-sm-2">
            <option value="' . $colors[1] . '" selected>' . $colors[1] . '</option>';

        foreach ($colors as $color) {
            $result = $result . '<option value="' . $color . '">' . $color . '</option>';
        }

        $result = $result . '</select>';

        return $result;

    }

}