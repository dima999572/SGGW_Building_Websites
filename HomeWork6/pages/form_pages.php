<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/HomeWork6/styles/form_style.css" />
    <title>Laby 6</title>
  </head>
  <body>
    <div class="container">
      <form id="form" action="/HomeWork6/form.php" method="POST">
        <h1>Cwiczenia 6</h1>
        <div class="input-control">
          <label for="username">Imię:</label>
          <input id="username" name="username" type="text" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="surname">Nazwisko:</label>
          <input id="surname" name="surname" type="text" />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="street">Ulica:</label>
          <input id="street" name="street" type="text" />
          <div class="error"></div>
        </div>
        <div class="input-control unique">
          <label>Miasto:</label>
            <select id="city" name="city" style="padding: 10px;"> 
              <option>Warszawa</option>
              <option>Kraków</option>
              <option>Łódź</option>
              <option>Wrocław</option>
              <option>Poznań</option>
              <option>Gdańsk</option>
              <option>Szczecin</option>
              <option>Bydgoszcz</option>
              <option>Lublin</option>
              <option>Białystok</option>
              <option>Katowice</option>
              <option>Gdynia</option>
              <option>Częstochowa</option>
              <option>Radom</option>
              <option>Toruń</option>
            </select>
          <div class="error"></div>
        </div>
        <div class="input-control">
          <label for="house_number">Number domu:</label>
          <input id="house_number" name="house_number" type="text" />
          <div class="error"></div>
        </div>

        <div class="input-control">
          <label for="apartament_number">Number mieszkania:</label>
          <input
            id="apartament_number"
            name="apartament_number"
            type="text"
          />
          <div class="error"></div>
        </div>

        <div class="input-control unique">
          <label>Prawko:</label>
          <ul>
            <li>
              <input type="radio" name="prawko" id="mam" id="prawko" value="Mam"/>
              <label for="mam">Mam</label>
            </li>
            <li>
              <input type="radio" name="prawko" id="niemam" id="prawko value="Nie mam"/>
              <label for="niemam">Nie mam</label>
            </li>
          </ul>
          <div class="error"></div>
        </div>

        <div class="input-control unique">
          <label>Plec:</label>
          <ul>
            <li>
              <input type="radio" id="m" class="plec" name="plec" value="M"/>
              <label for="m">M</label>
            </li>
            <li>
              <input type="radio" id="k" class="plec" name="plec" value="K"/>
              <label for="k">K</label>
            </li>
          </ul>
          <div class="error"></div>
        </div>

        <div class="input-control">
          <label for="comments">Uwagi:</label>
          <input id="comments" name="comments" type="text" />
          <div class="error"></div>
        </div>

        <div class="input-control">
          <label for="phone_number">Numer telefonu:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            placeholder="+48111222333"
          />
          <div class="error"></div>
        </div>

        <div class="input-control">
          <label for="date_of_birth">Data urodzenia:</label>
          <input type="date" id="date_of_birth" name="date_of_birth" />
          <div class="error"></div>
        </div>

        <div class="input-control">
          <label for="pesel"> Pesel:</label>
          <input
            type="text"
            id="pesel"
            name="pesel"
            placeholder="12345678901"
          />
          <div class="error"></div>
        </div>

        <div class="input-control">
          <label for="index">Kod pocztowy:</label>
          <input type="text" id="index" name="index" placeholder="xx-xxx" />
          <div class="error"></div>
        </div>

        <button type="submit" name="submit">Submit</button>

        <button type="submit" name="logout">Log out</button>
      </form>
    </div>
  </body>
</html>
