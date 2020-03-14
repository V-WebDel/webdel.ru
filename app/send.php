<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$service = $_POST['service'];
$time = $_POST['time'];
$TZ = $_POST['TZ'];


$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'viktor.webdel'; // Логин на почте
    $mail->Password   = 'toxi-2020'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('viktor.webdel@gmail.com', 'Виктор Крыжный'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('viktor.kryzhnyi@mail.ru'); 


    // Содержимое письма
    $mail->isHTML(true);

    $mail->Subject = 'Заявка с www.webdel.ru';
    $mail->Body = 
    "
    <b>Имя:</b> $name <br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b>$text<br><br>
    <b>Нужная услуга:</b>$service<br><br>
    <b>Сроки выполнения:</b>$time<br><br>
    <b>Наличие ТЗ:</b>$TZ<br><br>
    ";


    // Проверяем отравленность сообщения
    if ($mail->send()) {
        echo "$msg";
    } else {
    echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}