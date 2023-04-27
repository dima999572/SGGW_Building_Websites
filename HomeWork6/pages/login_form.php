  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/HomeWork6/styles/login_style.css" />
      <style>body{background-color: #151718;} h1{color: #99a5af;}</style>
      <title>Document</title>
    </head>
    <body>
    <?php
      session_start();
      if(isset($_SESSION['login'])){
        header('location: form_pages.php');
      }
      if($_SERVER["REQUEST_METHOD"] == "POST") {
        $valid_username = "admin";
          $valid_passwd = "admin123";
      }
       if (isset($_POST['login']) && isset($_POST['passwd'])) {
         $username = $_POST['login'];
         $passwd = $_POST['passwd'];
  
         if ($username === $valid_username && $passwd === $valid_passwd) {
           $_SESSION['login'] = $username;
           header('Location: form_pages.php');
           exit;
         } else {
           echo "<script>alert('Invalid login or password.'); window.location.href='login_form.php';</script>";
         }
        }
    ?>
      <div class="container">
        <form id="form" action="#" method="POST">
          <h1>Zaloguj się</h1>
          <div class="input-control">
            <label for="login">Login:</label>
            <input id="login" name  ="login" type="text" placeholder="admin"/>
            <div class="error"></div>
          </div>
          <div class="input-control">
            <label for="passwd">Hasło</label>
            <input
              id="passwd"
              name="passwd"
              type="password"
              placeholder="admin123"
            />
            <div class="error"></div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div style="text-align: center;">
        <a href="all_code.html"><button type="submit" name="lookAtCode" style="padding: 10px; margin-top: 10px; color: white; background-color: rgb(41, 57, 194); border: none; border-radius: 4px;">Look at code</button></a>
      </div>
    </body>
  </html>
