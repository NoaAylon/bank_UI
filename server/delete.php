<?php
   include "db.php";

    $id = $_POST['id'];
  
    $sql = "DELETE FROM table227 WHERE user_id= $id" ;
    $result = mysqli_query($connection, $sql);

    $sql = "SELECT * FROM table227";
    $result = mysqli_query($connection, $sql);

    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td contenteditable='false'>" . $row['user_id'] ."</td>";
        echo "<td contenteditable='true' id='name"."$row[user_id]'>" . $row['name'] . "</td>";
        echo "<td contenteditable='true' id='address"."$row[user_id]'>" . $row['address'] ."</td>";
        echo "<td contenteditable='true' id='inv"."$row[user_id]'>" . $row['investment_channel'] . "</td>";
        echo "<td contenteditable='true' id='balance"."$row[user_id]'>" . $row['balance'] . "</td>";
        echo "<td><button type='button' id='$row[user_id]' class='btn btn-info btn-sm update'>UPDATE</button></td>";
        echo "<td><button type='button' id='$row[user_id]' class='btn btn-danger btn-sm delete'>DELETE</button></td>";
        echo "</tr>";
        
    }
    mysqli_close($connection);
?>