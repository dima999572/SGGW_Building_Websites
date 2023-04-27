<?php
session_destroy();
session_start();

if(isset($_POST['logout'])) { 
  session_destroy(); 
  header("Location: pages/login_form.php");
  exit(); 
}

if (isset($_POST['submit'])) {
  $_SESSION['username'] = $_POST['username'];

  $_SESSION['surname'] = $_POST['surname'];

  $_SESSION['street'] = $_POST['street'];
  
  $_SESSION['city'] = $_POST['city'];

  $_SESSION['city'] = $_POST['city'];

  $_SESSION['house_number'] = $_POST['house_number'];

  $_SESSION['apartament_number'] = $_POST['apartament_number'];

  $_SESSION['prawko'] = $_POST['prawko'];

  $_SESSION['plec'] = $_POST['plec'];

  $_SESSION['comments'] = $_POST['comments'];

  $_SESSION['phone_number'] = $_POST['phone_number'];

  $_SESSION['date_of_birth'] = $_POST['date_of_birth'];

  $_SESSION['pesel'] = $_POST['pesel'];

  $_SESSION['index'] = $_POST['index'];

  header('Location: pages/end_page.php');
  exit;
}
?>