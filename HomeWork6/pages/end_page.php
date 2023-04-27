<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../styles/end_style.css" />
    <title>Laby 6</title>
  </head>
  <body>
    <main class=table>
    <section class="table-header">Twoje dane</section>
    <section class="table-body">
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Ulica</th>
            <th>Miasto</th>
            <th>Numer domu</th>
            <th>Numer mieszkania</th>
            <th>Prawko</th>
            <th>Plec</th>
            <th>Uwagi</th>
            <th>Numer telefonu</th>
            <th>Data urodzenia</th>
            <th>Pesel</th>
            <th>Kod pocztowy</th>
          </tr>
        </thead>
        <tbody>
          <?php include('../end.php'); ?>
          <tr>
          <td><?php echo $username; ?></td>
          <td><?php echo $surname; ?></td>
          <td><?php echo $street; ?></td>
          <td><?php echo $city; ?></td>
          <td><?php echo $house_number; ?></td>
          <td><?php echo $apartament_number; ?></td>
          <td><?php echo $prawko; ?></td>
          <td><?php echo $plec; ?></td>
          <td><?php echo $comments; ?></td>
          <td><?php echo $phone_number; ?></td>
          <td><?php echo $date_of_birth; ?></td>
          <td><?php echo $pesel; ?></td>
          <td><?php echo $index; ?></td>
          </tr>
        </tbody>
      </table>
    </section>
    </div>
    </main>
  </body>
</html>
