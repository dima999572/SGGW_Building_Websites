<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/index.css" />
    <title>HomeWork9</title>
    <script>
        function showHint(str) {
          if (str.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
              } else {
                  var xmlhttp = new XMLHttpRequest();
                  xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                      document.getElementById("txtHint").innerHTML = this.responseText;
                    }
                  };
                  xmlhttp.open("GET", "words.php?q=" + str, true);
                  xmlhttp.send();
                }
        }
    </script>
    </head>
    <body>
      <div class="container">
        <form id="form"> 
          <h1>Zacznij wpisywać imię w polu tekstowym poniżej:</h1>
          <div class="input-control">
            <label for="name">Imię: </label>
            <input name="name" id="name" type="text" onkeyup="showHint(this.value)">
          </div>
          <p>Sugestia: <span id="txtHint"></span></p>
        </form>
        <a href="all_code.php">
          <button type="submit" name="lookAtCode" style="padding: 10px; margin-top: 10px; color: white; background-color: rgb(41, 57, 194); border: none; border-radius: 4px;">Look at code</button>
        </a>
      </div>
    </body>
</html>