<?php
    $recepient = "grytsenko.kate.ua@gmail.com";
    $sitename = "Factorly";

    $name = trim($_POST["firstname"]);
    $phone = trim($_POST["email"]);
    $email = trim($_POST["phone"]);
//    $discipline = trim($_POST["discipline"]);
//    $date = trim($_POST["date"]);
//    $amount = trim($_POST["amount"]);
    $comment = trim($_POST["comment"]);
    $message = 'Name: $name \nPhone number: $phone \nEmail: $email \nMessage: $comment';

    $pagetitle = 'New request fro \"$sitename\"';
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
>