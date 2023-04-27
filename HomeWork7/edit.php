<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/edit.css" />
    <title>Student edition</title>
  </head>
  <body>
    <div class="container">
      <form id="form" action="#" method="POST">
        <h1>Edytuj studenta</h1>
        <div class="input-control">
          <label for="name">Imię:</label>
          <input id="name" name="name" type="text" />
        </div>
        <div class="input-control">
          <label for="surname">Nazwisko:</label>
          <input id="surname" name="surname" type="text" />
        </div>
        <div class="input-control">
          <label for="age">Wiek:</label>
          <input id="age" name="age" type="text" />
        </div>

        <button name="submit" type="submit">Edytuj</button>
      </form>
    </div>
  <?php
    session_start();
    $conn = new mysqli("localhost", "dima999572", "dima999572", "student");

    if (isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['age']) && isset($_SESSION["id"])) {
      $name = $_POST['name'];
      $surname = $_POST["surname"];
      $age = $_POST["age"];
      $id = $_SESSION["id"];

      $sql = "UPDATE student SET name='$name', surname='$surname', age='$age' WHERE id=".$id."";
      if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Data edited successfully.');</script>";
      } else {
          echo "<script>alert('Edition error.')</script>";
      }
      mysqli_close($conn);
      header("Location: main.php");
    } 
  ?>
  </body>
</html>
