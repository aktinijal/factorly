<?php
    include 'defines.php';
    include 'email_validation.php';

    $post = (!empty($_POST)) ? true: false;

    if($post){
//
//        $recepient = "grytsenko.kate.ua@gmail.com";
//        $sitename = "Lasoft";
//

        $name = stripslashes($_POST["firstname"]);
        $email = stripslashes($_POST["email"]);
        $phone = stripslashes($_POST["phone"]);
        $comment = stripslashes($_POST["comment"]);
        $subject = 'Request';
        $error = '';
        $message = "'Name:'.$name
                    'Email:'.$email
                    'Skype:'.$phone";

        if(!ValidateEmail($email)){
            $error = 'Email isn`t correct!';
        }

        if(!$error){
            // // Сообщение
            // $message = "Line 1\r\nLine 2\r\nLine 3";
            //
            // // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
            // $message = wordwrap($message, 70, "\r\n");

            // Отправляем
            $mail = mail('grytsenko.kate.ua@gmail.com', $subject, $message);

            if($mail){
                die('OK');
            }else {
                die('Not Ok');
            }

        }else{
            echo 'Error Result';
            die();
        }

    }
