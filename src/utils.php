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
                        <h5 class="modal-title" id="modalSignUpTitle">Авторизация</h5>
                        <button type="button" class="close" data-dismiss="modal"aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body shadow-lg rounded auth-background">
                        
                        <div class="nav nav-fill nav-pills d-flex justify-content-center my-2" id="v-pills-auth" role="tablist">
                            <a class="nav-link active" id="v-pills-sign_in-tab" data-toggle="pill" href="#v-pills-sign_in"
                                role="tab" aria-controls="v-pills-sign_in" aria-selected="true">Вход</a>
                            <a class="nav-link" id="v-pills-sign_up-tab" data-toggle="pill" href="#v-pills-sign_up" role="tab"
                                aria-controls="v-pills-sign_up" aria-selected="false">Регистрация</a>
                        </div>

                        <div class="tab-content">

                            <section class="container tab-pane fade show active" id="v-pills-sign_in" role="tabpanel" aria-labelledby="v-pills-sign_in-tab">
                                <div class="row">
                                    <div class="col-md-12 py-1 border">
                                        <h4 class="pb-4 text-center">Пожалуйста введите свой логин и пароль</h4>
                                        <form id="sign_in_form" method="post" action="src/auth/sign_in.php">
                                            <div class="form-row">
                                                <div id="group_login_sign_in" class="form-group col-md-12">
                                                    <label for="login_sign_in">Логин</label>
                                                    <input id="login_sign_in" name="login" placeholder="login" class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div id="group_password_sign_in" class="form-group col-md-12"> 
                                                    <label for="password_sign_in">Пароль</label>                                         
                                                    <input id="password_sign_in" name="password" placeholder="password" class="form-control" type="password">
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <button id="sign_in_submit" type="button" class="btn btn-block btn-light">Войти</button>
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
                                            <p style="word-wrap: break-word;">Зарегистрировавшись вы сможете оставлять комментарии и отзывы, а также появится возможность редактирования и сохранения персональных настроек</p>
                                        </div>
                                    </div>
                                    <div class="col-md-8 py-1 border">
                                        <h4 class="pb-4">Пожалуйста заполните информацию о себе</h4>
                                        <form id="sign_up_form" method="post" action="src/auth/sign_up.php">
                                            <div class="form-row">
                                                <div id="group_login_sign_up" class="form-group col-md-6">
                                                    <label for="login_sign_up">Логин</label>
                                                    <input id="login_sign_up" name="login" placeholder="login" class="form-control" type="text">
                                                </div>
                                                <div id="group_email_sign_up" class="form-group col-md-6">
                                                    <label for="email_sign_up">Электронная почта</label>
                                                    <input id="email_sign_up" type="email" name="email" class="form-control" placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="form-row">  
                                                <div id="group_password_sign_up" class="form-group col-md-12"> 
                                                    <label for="password_sign_up">Пароль</label>                                         
                                                    <input id="password_sign_up" name="password" placeholder="password" class="form-control" type="password">
                                                </div>                                            
                                            </div>
                                            <div class="form-row">  
                                                <div id="group_confirmpassword_sign_up" class="form-group col-md-12">
                                                    <label for="confirmpassword_sign_up">Повторите пароль</label>                                          
                                                    <input id="confirmpassword_sign_up" name="confirmpassword" placeholder="confirm password" class="form-control" type="password">
                                                </div>                                            
                                            </div>                       
                                            <div class="form-row">
                                                <button id="sign_up_submit" type="button" class="btn btn-block btn-light">Регистрация</button>
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
                        <p id="approve_email_caption" class="text-center">Для подтверждения адреса электронной почты указанной при регистрации нужно отправить письмо по данному адресу.
                            После того как письмо придет, следовать инструкциям указанном в нём</p>
                    </div>
                    <div class="modal-footer shadow-lg rounded">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button id="approve_email" class="btn btn-primary">Отправить письмо</button>
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
                        <h5 class="modal-title">Редактирование пользовательских данных</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body shadow-lg rounded auth-background">
                        <form id="edit_user_settings_form" method="post" action="src/auth/edit_user_settings.php">
                            <div class="form-row">
                                <div id="group_login_edit_user_settings" class="form-group col-md-6">
                                    <label for="login_edit_user_settings">Логин</label>
                                    <input id="login_edit_user_settings" name="login" placeholder="login" class="form-control" type="text" value="' . $login . '">
                                </div>
                                <div id="group_email_edit_user_settings" class="form-group col-md-6">
                                    <label for="email_edit_user_settings">Электронная почта</label>
                                    <input id="email_edit_user_settings" type="email" name="email" class="form-control" placeholder="email" value="' . $email . '">
                                </div>
                            </div>
                            <div class="form-row">  
                                <div id="group_password_edit_user_settings" class="form-group col-md-12"> 
                                    <label for="password_edit_user_settings">Пароль</label>                                         
                                    <input id="password_edit_user_settings" name="password" placeholder="password" class="form-control" type="password">
                                </div>                                            
                            </div>
                            <div class="form-row">  
                                <div id="group_confirmpassword_edit_user_settings" class="form-group col-md-12">
                                    <label for="confirmpassword_edit_user_settings">Повторите пароль</label>                                          
                                    <input id="confirmpassword_edit_user_settings" name="confirmpassword" placeholder="confirm password" class="form-control" type="password">
                                </div>                                            
                            </div>                       
                        </form>
                    </div>
                    <div class="modal-footer shadow-lg rounded">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button id="edit_user_settings" class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </section>';

    }

    public static function authSection() {

        if (!isset($_SESSION['login'])) {
            $result = '<button class="btn btn-sm form-inline btn-light mr-2" data-toggle="modal" data-target="#modalSignUp">Вход / Регистрация</button>';      
        } else {
            
            $current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));
            if ($current_user === null) {
                $result = '<button class="btn btn-sm form-inline btn-light mr-2" data-toggle="modal" data-target="#modalSignUp">Вход / Регистрация</button>';  
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

                $result = $result . '<button id="sign_out" type="button" class="btn btn-light form-inline mr-3">Выход</button>';
            }
            
        }

        return $result;
    }

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

    private static function listLang() {
        
        $result    = '';
        $languages = R::findCollection('languages');

        while ($current_language = $languages->next()) {

            $id            = $current_language['id'];
            $caption       = $current_language['caption'];
            $short_caption = $current_language['short_caption'];

            $checks = 
            '<div style="left: 0.5em;" class="position-absolute">
                <input name="checks[]" value="' . $id . '" class="form-check-input" type="checkbox">
            </div>';
    
            $result = $result . 
            '<tr class="table-primary">
                <th class="position-relative">' . $checks . '</th>
                <td>' . $caption . '</td>
                <td>' . $short_caption . '</td>
                <td>Путь к картинке</td>
                <td>
                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#modalAddLanguage" data-caption="' . $caption . '" data-short-caption="' . $short_caption . '">
                        <img src="images/lang/edit-solid.svg" style="width: 1.5em; heigth: 1.5em;">
                    </button>
                </td>
            </tr>';

        }

        return
        '<table id="table_lang" class="table table-striped table-sm">
            <thead>
                <tr class="table-primary">
                    <th scope="col">#</th>
                    <th scope="col">Заголовок</th>
                    <th scope="col">Аббревиатура</th>
                    <th scope="col">Изображение</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                ' . $result . '
            </tbody>
        </table>';

    }

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

                    <div class="modal-body table-primary">

                        <label for="language_caption">Наименование языка</label>                                         
                        <input id="language_caption" name="language_caption" placeholder="Наименвание языка" class="form-control" type="text">
    
                        <label for="language_sort_caption">Аббревиатура языка (латинскими буквами)</label>                                         
                        <input id="language_sort_caption" name="language_sort_caption" placeholder="Аббревиатура языка" class="form-control mb-2" type="text">

                        <div class="container container-fluid border border-info rounded">
                            <span class="bg-primary d-flex justify-content-center text-dark mt-2">Добавление флага страны</span>
                            <form id="my-dropzone-flag" class="dropzone container container-fluid mb-2" action="/Ixtlan-php/src/local/add_icon_lang.php"></form>
                        </div>

                    </div>

                    <div class="modal-footer bg-primary">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button id="add_language" type="button" class="btn btn-warning">Сохранить</button>
                    </div>

                </div>
            </div>
        </section>';

    }

    public static function currentLanguage() {

        $current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));

        if ($current_user === null) {
            return '<img src="images/lang/rusflag1.png">';
        } else {
            return '<img src="images/lang/rusflag1.png">';
        }

    }

    public static function getToggleNews() {

        return 
        '<div class="container d-flex justify-content-between align-items-center shadow">
            <h5 id="caption_news_panel_show" class="m-2">Показать панель новостей</h5>
            <h5 id="caption_news_panel_hide" class="m-2">Скрыть панель новостей</h5>
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

}