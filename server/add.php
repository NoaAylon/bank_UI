<?php
   include "db.php";
    $id = $_POST['id'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $investment = $_POST['investment'];
    $balance = $_POST['balance'];


    
    $sql = "INSERT INTO table227 (user_id, name, address, investment_channel, balance) 
    VALUES ('$id', '$name', '$address', '$investment', '$balance')";
    $result = mysqli_query($connection, $sql);

        echo "<tr>";
        echo "<td contenteditable='false'>" . $id ."</td>";
        echo "<td contenteditable='true' id='name"."$id'>" . $name . "</td>";
        echo "<td contenteditable='true' id='address"."$id'>" . $address ."</td>";
        echo "<td contenteditable='true' id='inv"."$id'>" . $investment . "</td>";
        echo "<td contenteditable='true' id='balance"."$id'>" . $balance . "</td>";
        echo "<td><button type='button' id='$id' class='btn btn-info btn-sm update'>UPDATE</button></td>";
        echo "<td><button type='button' id='$id' class='btn btn-danger btn-sm delete'>DELETE</button></td>";
        echo "</tr>";


    mysqli_close($connection);

?>