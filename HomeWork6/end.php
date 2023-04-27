<?php

session_start();

$username = $_SESSION['username'];
$surname = $_SESSION['surname'];
$street = $_SESSION['street'];
$city = $_SESSION['city'];
// if ($city = "Wybierz"){
    // $city = "";
// }
$house_number = $_SESSION['house_number'];
$apartament_number = $_SESSION['apartament_number'];
$prawko = $_SESSION['prawko'];
$plec = $_SESSION['plec'];
$comments = $_SESSION['comments'];
$phone_number = $_SESSION['phone_number'];
$date_of_birth = $_SESSION['date_of_birth'];
$pesel = $_SESSION['pesel'];
$index = $_SESSION['index'];

?>