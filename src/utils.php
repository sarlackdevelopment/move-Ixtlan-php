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

}