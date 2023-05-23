<?php
    $conn = new mysqli("sql101.epizy.com", "epiz_33790653", "Iaj0mgTQ6M4ubh", "epiz_33790653_names");

    $q = $_REQUEST["q"];
    $hint = "";

    $sql = "SELECT * FROM names WHERE name LIKE '%$q%'";
    $result = $conn->query($sql);

    if ($result !== null && $result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $a[] = $row['name'];
        }
    }

    if ($q !== "") {
        $q = strtolower($q);
        $len=strlen($q);
        $count = 0;
        foreach($a as $name) {
            if (strtolower(substr($name, 0, 1)) === strtolower(substr($q, 0, 1))) {
                if (stristr($q, substr($name, 0, $len))) {
                    if ($count < 3) {
                        if ($hint === "") {
                            $hint = $name;
                        } else {
                            $hint .= ", $name";
                        }
                        $count++;
                    }
                } else {
                    break;
                }
            }
        }
    }


    $conn->close();
    echo $hint === "" ? "no suggestion" : $hint;
?>