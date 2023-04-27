<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles/main.css">
    <title>Document</title>
  </head>
  <body>
  <?php
      session_start();
      $conn = new mysqli("localhost", "dima999572", "dima999572", "student");
      if (isset($_POST["edit"])) {
        $_SESSION["id"] = $_POST["student_id"];
        $conn->close();
        header("Location: edit.php");
      }
      if (isset($_POST["delete"])) {
          $student_id = $_POST["student_id"];

          $stmt = $conn->prepare("DELETE FROM student WHERE id = ?");
          $stmt->bind_param("i", $student_id);
          $stmt->execute();

          if ($stmt->affected_rows > 0) {        
              echo "<script>alert('Student with ID $student_id was deleted successfully.');</script>";
          } else {
              echo "<script>alert('Error deleting student.');</script>";
          }

          $stmt->close();
          $conn->close();
          header("Location: main.php");
          exit;  
      }

      $conn->close();
    ?>
    <main class="table">
      <section class="table-header">
          <section class="table-insert">
            <form action="add.php" method="POST">
              <button>Dodaj</button>
            </form> 
        </section>
        <section class="data">
          <h1>Twoje dane</h1>
        </section>
      </section>
      <section class="table-body">
        <table>
          <thead>
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Wiek</th>
            </tr>
          <thead>
          <tbody>
            <?php
            $conn = new mysqli("localhost", "dima999572", "dima999572", "student");
            $sql = "SELECT * FROM student";
            $result = $conn->query($sql);

            if ($result !== null && $result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row["name"] . "</td>";
                    echo "<td>" . $row["surname"] . "</td>";
                    echo "<td>" . $row["age"] . "</td>";
                    echo "<form method='POST' action='#'>";
                    echo "<input type='hidden' name='student_id' value='".$row["id"]."'>";
                    echo "<td><button type='submit' name='edit'>Edit</button></td>";
                    echo "</form>";
                    echo "<form method='POST' action='#'>";
                    echo "<input type='hidden' name='student_id' value='".$row["id"]."'>";
                    echo "<td><button type='submit' name='delete'>Remove</button></td>";
                    echo "</form>";
                    echo "</tr>";
                    
                }
            } else {
                echo "<tr><td colspan='3'>0 records</td></tr>";
            }
            mysqli_close($conn);
            ?>
          </tbody>
        </table>
      </section>
      <div style="text-align: center;">
        <a href="all_code.html"><button type="submit" name="lookAtCode" style="padding: 10px; margin-top: 10px; color: white; background-color: rgb(41, 57, 194); border: none; border-radius: 4px;">Look at code</button></a>
      </div>    </main>
  </body>
</html>
