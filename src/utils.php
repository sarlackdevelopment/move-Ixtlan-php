<?php

class Utils {

    public static function showModalDeleteForm($title, $message) {

        return
        '<div class="modal fade" id="modalDeleteImg" tabindex="-1" role="dialog" aria-labelledby="modalDeleteImgTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">' . $title . '</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">' . $message . '</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Я передумала</button>
                        <button id="delete_img" class="btn btn-danger">Я все поняла. Удалить</button>
                    </div>
                </div>
            </div>
        </div>'; 
    }

    public static function getPreloader() {
        return
        '<section class="container loader d-flex bd-highlight" id="p_prldr">
            <div class="loader-inner align-self-center p-2 bd-highlight">
                <div class="loader-inner">
                    <div class="loader-inner">
                        <div class="loader-inner">
                            <div class="loader-inner">
                                <div class="loader-inner">
                                    <div class="loader-inner">
                                        <div class="loader-inner">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>';
    }

    public static function is_session_started() {
        if ( php_sapi_name() !== 'cli' ) {
            if ( version_compare(phpversion(), '5.4.0', '>=') ) {
                return session_status() === PHP_SESSION_ACTIVE ? TRUE : FALSE;
            } else {
                return session_id() === '' ? FALSE : TRUE;
            }
        }
        return FALSE;
    }

    public static function getModalSignUpForm($redirect) {

        return
        '<section id="modalSignUp" class="modal fade py-2 testimonial" tabindex="-1" role="dialog" aria-labelledby="modalSignUpTitle" aria-hidden="true">    
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalSignUpTitle">' . LocalConstants::mainLocal()['authentication_title'] . '</h5>
                        <button type="button" class="close" data-dismiss="modal"aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body shadow-lg rounded auth-background">
                        
                        <div class="nav nav-fill nav-pills d-flex justify-content-center my-2" id="v-pills-auth" role="tablist">
                            <a class="nav-link active" id="v-pills-sign_in-tab" data-toggle="pill" href="#v-pills-sign_in"
                                role="tab" aria-controls="v-pills-sign_in" aria-selected="true">' . LocalConstants::mainLocal()['sign_in_title'] . '</a>
                            <a class="nav-link" id="v-pills-sign_up-tab" data-toggle="pill" href="#v-pills-sign_up" role="tab"
                                aria-controls="v-pills-sign_up" aria-selected="false">' . LocalConstants::mainLocal()['sign_up_title'] . '</a>
                        </div>

                        <div class="tab-content">

                            <section class="container tab-pane fade show active" id="v-pills-sign_in" role="tabpanel" aria-labelledby="v-pills-sign_in-tab">
                                <div class="row">
                                    <div class="col-md-12 py-1 border">
                                        <h4 class="pb-4 text-center">' . LocalConstants::mainLocal()['invitation_sign_in_title'] . '</h4>
                                        <form id="sign_in_form" method="post" action="src/auth/sign_in.php">
                                            <div class="form-row">
                                                <div id="group_login_sign_in" class="form-group col-md-12">
                                                    <label for="login_sign_in">' . LocalConstants::mainLocal()['login_title'] . '</label>
                                                    <input id="login_sign_in" name="login" placeholder="login" class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div id="group_password_sign_in" class="form-group col-md-12"> 
                                                    <label for="password_sign_in">' . LocalConstants::mainLocal()['password_title'] . '</label>                                         
                                                    <input id="password_sign_in" name="password" placeholder="password" class="form-control" type="password">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <button id="sign_in_submit" type="button" class="btn btn-block btn-light">' . LocalConstants::mainLocal()['sign_in_title'] . '</button>
                                            </div>
                                            <input type="hidden" name="redirect" value="' . $redirect . '">
                                        </form>
                                    </div>
                                </div>
                            </section>

                            <section class="container tab-pane fade" id="v-pills-sign_up" role="tabpanel" aria-labelledby="v-pills-sign_up-tab">
                            
                                <div class="row">
                                    <div class="col-md-4 py-1 bg-primary text-white">
                                        <div class="card-body text-center">
                                            <p style="word-wrap: break-word;">' . LocalConstants::mainLocal()['sign_up_description'] . '</p>
                                        </div>
                                    </div>
                                    <div class="col-md-8 py-1 border">
                                        <h4 class="pb-4">' . LocalConstants::mainLocal()['invitation_sign_up_title'] . '</h4>
                                        <form id="sign_up_form" method="post" action="src/auth/sign_up.php">
                                            <div class="form-row">
                                                <div id="group_login_sign_up" class="form-group col-md-6">
                                                    <label for="login_sign_up">' . LocalConstants::mainLocal()['login_title'] . '</label>
                                                    <input id="login_sign_up" name="login" placeholder="login" class="form-control" type="text">
                                                </div>
                                                <div id="group_email_sign_up" class="form-group col-md-6">
                                                    <label for="email_sign_up">' . LocalConstants::mainLocal()['email_title'] . '</label>
                                                    <input id="email_sign_up" type="email" name="email" class="form-control" placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="form-row">  
                                                <div id="group_password_sign_up" class="form-group col-md-12"> 
                                                    <label for="password_sign_up">' . LocalConstants::mainLocal()['password_title'] . '</label>                                         
                                                    <input id="password_sign_up" name="password" placeholder="password" class="form-control" type="password">
                                                </div>                                            
                                            </div>
                                            <div class="form-row">  
                                                <div id="group_confirmpassword_sign_up" class="form-group col-md-12">
                                                    <label for="confirmpassword_sign_up">' . LocalConstants::mainLocal()['repeat_password_title'] . '</label>                                          
                                                    <input id="confirmpassword_sign_up" name="confirmpassword" placeholder="confirm password" class="form-control" type="password">
                                                </div>                                            
                                            </div>                       
                                            <div class="form-row">
                                                <button id="sign_up_submit" type="button" class="btn btn-block btn-light">' . LocalConstants::mainLocal()['sign_up_title'] . '</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                            </section>
                        </div>
                    </div>
                </div>
            </div>         
        </section>';

    }

    public static function getModalApproveEmail() {

        return
        '<section id="modalApproveEmail" class="modal fade py-2 testimonial" tabindex="-1" role="dialog" aria-labelledby="modalApproveEmailTitle" aria-hidden="true">          
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Подтверждение электронной почты</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body shadow-lg rounded auth-background">
                        <div id="approve_email_spinner"></div>
                        <p id="approve_email_caption" class="text-center">Для подтверждения адреса электронной почты указанной при регистрации нужно отправить письмо по данному адресу.
                            После того как письмо придет, следовать инструкциям указанном в нём</p>
                    </div>
                    <div class="modal-footer shadow-lg rounded">
                        <button id="approve_email" class="btn btn-primary">Отправить письмо</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </section>';

    }

    public static function getModalEditUserSettings() {

        $login = '';
        $email = '';

        if (isset($_SESSION['login'])) {

            $current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));

            if ($current_user !== null) {
                $login = $current_user->login;
                $email = $current_user->email;
            }

        }
        
        return
        '<section id="modalEditUserSettings" class="modal fade py-2 testimonial" tabindex="-1" role="dialog" aria-labelledby="modalEditUserSettingsTitle" aria-hidden="true">          
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">' . LocalConstants::mainLocal()['edit_user_setting_title'] . '</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body shadow-lg rounded auth-background">
                        <form id="edit_user_settings_form" method="post" action="src/auth/edit_user_settings.php">
                            <div class="form-row">
                                <div id="group_login_edit_user_settings" class="form-group col-md-6">
                                    <label for="login_edit_user_settings">' . LocalConstants::mainLocal()['login_title'] . '</label>
                                    <input id="login_edit_user_settings" name="login" placeholder="login" class="form-control" type="text" value="' . $login . '">
                                </div>
                                <div id="group_email_edit_user_settings" class="form-group col-md-6">
                                    <label for="email_edit_user_settings">' . LocalConstants::mainLocal()['email_title'] . '</label>
                                    <input id="email_edit_user_settings" type="email" name="email" class="form-control" placeholder="email" value="' . $email . '">
                                </div>
                            </div>
                            <div class="form-row">  
                                <div id="group_password_edit_user_settings" class="form-group col-md-12"> 
                                    <label for="password_edit_user_settings">' . LocalConstants::mainLocal()['password_title'] . '</label>                                         
                                    <input id="password_edit_user_settings" name="password" placeholder="password" class="form-control" type="password">
                                </div>                                            
                            </div>
                            <div class="form-row">  
                                <div id="group_confirmpassword_edit_user_settings" class="form-group col-md-12">
                                    <label for="confirmpassword_edit_user_settings">' . LocalConstants::mainLocal()['repeat_password_title'] . '</label>                                          
                                    <input id="confirmpassword_edit_user_settings" name="confirmpassword" placeholder="confirm password" class="form-control" type="password">
                                </div>                                            
                            </div>                       
                        </form>
                    </div>
                    <div class="modal-footer shadow-lg rounded">
                    <button id="edit_user_settings" class="btn btn-primary">' . LocalConstants::mainLocal()['save_title'] . '</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">' . LocalConstants::mainLocal()['close_title'] . '</button>
                    </div>
                </div>
            </div>
        </section>';

    }

    public static function authSection() {

        if (!isset($_SESSION['login'])) {
            $result = '<button class="btn btn-sm form-inline btn-light mr-2" data-toggle="modal" data-target="#modalSignUp">' . LocalConstants::mainLocal()['sign_in_up_title'] . '</button>';      
        } else {
            
            $current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));
            if ($current_user === null) {
                $result = '<button class="btn btn-sm form-inline btn-light mr-2" data-toggle="modal" data-target="#modalSignUp">' . LocalConstants::mainLocal()['sign_in_up_title'] . '</button>';  
            } else {
                $approve      = $current_user->approve;

                $result = 
                '<button type="button" class="btn btn-link text-warning mr-3 form-inline" data-toggle="modal" data-target="#modalEditUserSettings">'
                    . $_SESSION['login'] .
                '</button>';

                if (!$approve) {
                    $result = $result . 
                    '<button type="button" class="btn btn-link text-warning form-inline" data-toggle="modal" data-target="#modalApproveEmail">
                        &lt Email не подтвержден &gt
                    </button>';
                }

                $result = $result . '<button id="sign_out" type="button" class="btn btn-light form-inline mr-3">' . LocalConstants::mainLocal()['sign_out_title'] . '</button>';
            }
            
        }

        return $result;
    }

    /* TODO перенести в утилиты */
    public static function formAddLanguage() {

        return 
        '<div class="container d-flex justify-content-between align-items-center shadow">

            <h5 class="m-2">Параметры локализации</h5>

            <div id="switchContainerLang" class="switchContainer">
                <div class="switchBg"></div>
                <div class="switchBtn"></div>
            </div>

        </div>
        
        <div id="collapse_add_lang" class="collapse" aria-labelledby="add_lang_panel">                   
            <div class="d-flex flex-column shadow m-3">
                ' . self::listLang() . ' 
                <button type="button" class="btn btn-warning m-2" data-toggle="modal" data-target="#modalAddLanguage">Добавить язык</button>
            </div>
        </div>';

    }

    /* TODO перенести в утилиты */
    private static function listLang() {
        
        $result    = '';
        $languages = R::findCollection('languages');

        while ($current_language = $languages->next()) {

            $id            = $current_language['id'];
            $caption       = $current_language['caption'];
            $short_caption = $current_language['short_caption'];

            $icon_path = $current_language['icon_path'];
            $icon = ($icon_path !== null) ? '<img src="' . $icon_path . '" style="width: 1.5em; heigth: 1.5em;">'
                : '<img src="images/lang/pencil-alt-solid.svg" style="width: 1.5em; heigth: 1.5em;">';
    
            $result = $result . 
            '<tr class="table-primary" data-table_lang_id="' . $id . '">              
                <td>' . $caption . '</td>
                <td>' . $short_caption . '</td>
                <td>
                    <button id="icon_lang_' . $id . '" type="button" class="btn btn-link" data-toggle="modal" data-target="#modalEditIconLanguage" data-id="' . $id . '">
                        ' . $icon . '
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-link" 
                        data-toggle="modal"
                        data-target="#modalAddLanguage"
                        data-caption="' . $caption . '"
                        data-short-caption="' . $short_caption . '"
                        data-id="' . $id . '"
                    >
                        <img src="images/lang/edit-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#modalDeleteLanguage" data-id="' . $id . '">
                        <img src="images/lang/trash-alt-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                    </button>
                </td>
            </tr>';

        }

        return
        '<table id="table_lang" class="table table-striped table-sm">
            <thead align="center" valign="middle">
                <tr class="table-primary">
                    <th scope="col">Имя</th>
                    <th scope="col">кратко</th>
                    <th scope="col">картинка</th>
                    <th scope="col">ред.</th>
                    <th scope="col">удал.</th>
                </tr>
            </thead>
            <tbody align="center" valign="middle">
                ' . $result . '
            </tbody>
        </table>';

    }

    /* TODO перенести в утилиты */
    public static function getModalAddLanguage() {

        return
        '<section id="modalAddLanguage" class="modal fade py-2 testimonial" tabindex="-1" role="dialog" aria-labelledby="modalAddLanguageTitle" aria-hidden="true">          
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                    <div class="modal-header bg-primary">

                        <h5 class="modal-title">Добавление языка</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>

                    <div id="body_add_lang" class="modal-body table-primary">

                        <label for="language_caption">Наименование языка</label>                                         
                        <input id="language_caption" name="language_caption" placeholder="Наименвание языка" class="form-control" type="text">
    
                        <label for="language_sort_caption">Аббревиатура языка (латинскими буквами)</label>                                         
                        <input id="language_sort_caption" name="language_sort_caption" placeholder="Аббревиатура языка" class="form-control mb-2" type="text">

                    </div>

                    <div class="modal-footer bg-primary">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button id="add_language" type="button" class="btn btn-warning">Сохранить</button>
                    </div>

                </div>
            </div>
        </section>';

    }

    /* TODO перенести в утилиты */
    public static function getModalEditIconLanguage() {

        return
        '<section id="modalEditIconLanguage" class="modal fade py-2 testimonial" tabindex="-1" role="dialog" aria-labelledby="modalEditIconLanguageTitle" aria-hidden="true">          
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                    <div class="modal-header bg-primary">

                        <h5 class="modal-title">Удаление языка</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>

                    <div id="body_dropzone" class="modal-body table-primary"></div>

                    <div class="modal-footer bg-primary">
                        <button type="button" class="btn btn-block btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>

                </div>
            </div>
        </section>';

    }

    /* TODO перенести в утилиты */
    public static function getModalDeleteLanguage() {

        return
        '<section id="modalDeleteLanguage" class="modal fade py-2 testimonial" tabindex="-1" role="dialog" aria-labelledby="modalDeleteLanguageTitle" aria-hidden="true">          
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">

                    <div class="modal-header bg-primary">

                        <h5 class="modal-title">Добавление / редактирование флага страны</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>

                    <div class="modal-body table-primary">
                        Ты точно хочешь удалить язык? Если удалишь его, то удалиться весь контент на этом языке.    
                    </div>

                    <div class="modal-footer bg-primary">
                        <button id="delete_language" type="button" class="btn btn-danger" data-dismiss="modal">Удалить</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>

                </div>
            </div>
        </section>';

    }

    public static function getToggleNews() {

        return 
        '<div class="container d-flex justify-content-between align-items-center shadow">
            <h5 id="caption_news_panel_show" class="m-2">
                ' . LocalConstants::mainLocal()['show_news_panel'] . 
            '</h5>
            <h5 id="caption_news_panel_hide" class="m-2">
                ' . LocalConstants::mainLocal()['hide_news_panel'] . '
            </h5>
            <div id="switchContainer" class="switchContainer">
                <div class="switchBg"></div>
                <div class="switchBtn"></div>
            </div>
        </div>

        <svg id="toggle_svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                </filter>
            </defs>
        </svg>';

    }

    public static function strongBanner() {

        function banner_body($kitty_id) {

            $result_fancybox = '';
            $result_owl      = '';

            $periods_id = '';

            $imgs = R::findCollection('imgkitty', 'where kitty_id = ? order by periods_id desc', array($kitty_id));
            while ($img = $imgs->next()) {

                if (($periods_id !== '') and ($periods_id !== $img['periods_id'])) {
                    break;
                }

                $periods_id = $img['periods_id'];
                $path      = $img['path'];

                $result_owl = $result_owl .
                '<div class="item">
                    <img
                        title="норвежская лесная кошка особенности характера купить норвежского котенка в москве"
                        src="' . $path . '" alt="продажа норвежской">
                </div>';
                $result_fancybox = $result_fancybox .
                '<div class="col-lg-3 col-md-4 col-6 thumb">
                    <a data-fancybox="cats_kitty_' . $kitty_id . '_' . $periods_id . '"
                        href="' . $path . '">
                        <img class="img-fluid"
                            title="норвежская лесная кошка особенности характера норвежская лесная кошка описание и характер"
                            src="' . $path . '" alt="купить котенка в москве">
                    </a>
                </div>';
            }

            return 
            '<div class="container mt-1 alert alert-primary" role="alert">
                <div class="owl-carousel">
                    ' . $result_owl . '
                </div>
                <div class="container alert alert-primary" role="alert">
                    <div class="row">
                        ' . $result_fancybox . '
                    </div>
                </div>
            </div>';

        }

        $local  = UtilsLocal::currentLanguage()['short_caption'];
        $result = '';

        $kitty = R::findOne('kitty', 'where banner = ? and _local = ?', array('1', $local));

        if ($kitty === null) {
            return '';
        } else {

            $kitty_id           = $kitty['id'];
            $banner_header      = $kitty['banner_header'];
            $banner_description = $kitty['banner_description'];

            return
            '<div class="modal fade" id="banner_kitty" tabindex="-1" role="dialog" aria-labelledby="banner_kittyTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="banner_kittyTitle">' . $banner_header . '</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> 
                        <div class="modal-body">
                            ' . banner_body($kitty_id) . '
                            <div class="container container-fluid alert alert-info" role="alert">
                                <p>' . $banner_description . '</p>
                            </div>
                        </div>    
                        <div class="modal-footer">
                            <button type="button" class="btn btn-block btn-secondary" data-dismiss="modal">
                                ' . LocalConstants::mainLocal()['close_title'] . '
                            </button>
                        </div>
                    </div>
                </div>
            </div>';
        }

    } 

    public static function showModalCustomBanner() {

        return
        '<div class="modal fade" id="modalCustomBanner" tabindex="-1" role="dialog" aria-labelledby="modalCustomBannerTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Информация баннера</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="banner_header">Заголовок рекламного баннера</label>
                                <input type="text" class="form-control" id="banner_header" required>
                            </div>
                            <div class="form-group">
                                <label for="banner_description">Описание рекламного баннера</label>
                                <input type="text" class="form-control" id="banner_description" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="kittyToBanner" class="btn btn-primary">Сохранить</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>'; 
    }

    public static function showModalRemoveBanner() {
        return
        '<div class="modal fade" id="modalRemoveBanner" tabindex="-1" role="dialog" aria-labelledby="modalRemoveBannerTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Удаление баннера</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Уверена что хочешь удалить баннер?</p>
                    </div>
                    <div class="modal-footer">
                        <button id="kittyFromBanner" class="btn btn-danger">Да, уверена</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>'; 
    }

    public static function showModalPhotoKittyContent() {

        return
        '<div class="modal fade" id="kittyPhotoContent" tabindex="-1" role="dialog"
            aria-labelledby="kittyPhotoContentTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="kittyPhotoContentTitle"></h5>
                        <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="container">
                            <div id="photoKittyContent"></div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-block btn-secondary" data-dismiss="modal">
                            ' . LocalConstants::mainLocal()['close_title'] . '
                        </button>
                    </div>
                </div>
            </div>
        </div>';

    }

}

