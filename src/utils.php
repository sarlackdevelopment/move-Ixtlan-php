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

    public static function getModalSignUpForm() {

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

}