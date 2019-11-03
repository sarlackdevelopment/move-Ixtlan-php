<?php

require_once '../../src/utils.php';

if ( Utils::is_session_started() === FALSE ) session_start();

require_once '../../configDB.php';
require_once '../../libs/phpmailer/PHPMailerAutoload.php';
require_once '../../const_local.php';

/*********************************************************************************************************/
/* Подтверждаем электронную почту */
/*********************************************************************************************************/

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host       = 'smtp.mail.ru';  				  // Specify main and backup SMTP servers
$mail->SMTPAuth   = true;                             // Enable SMTP authentication
$mail->Username   = 'Sarlack_Work@mail.ru';           // Ваш логин от почты с которой будут отправляться письма
$mail->Password   = 'Xenomorf1988';                   // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port       = 465;                              // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('Sarlack_Work@mail.ru');               // от кого будет уходить письмо?
//$mail->addAddress('Sarlack_Work@mail.ru');            // Кому будет уходить письмо 
$mail->addAddress($_SESSION['email']);
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = LocalConstants::mainLocal()['approving_email'];

//$token           = bin2hex(random_bytes(64));
$token           = bin2hex(mt_rand(100000000000000000, 1000000000000000000));
$ref_for_approve = '<a href="' . $_SERVER['HTTP_REFERER'] . '?token=' . $token . '">' . LocalConstants::mainLocal()['do_approve_email'] . '</a>';

$mail->Body    = LocalConstants::mainLocal()['complete_approve_email_part_one']
    . ' ' . $ref_for_approve . ' ' 
    . LocalConstants::mainLocal()['complete_approve_email_part_two'];
$mail->AltBody = '';

$sending_is_done = $mail->send();
// TODO - Инвертировать на боевом сервере
if ($sending_is_done) {
    $current_user = R::findOne('users', 'where login = ?', array($_SESSION['login']));
    $current_user->token = $token;
    R::store($current_user);
}

echo json_encode($sending_is_done);
