<?php
 $host = 'localhost';
 $dbname = 'cardealer';
 $username = 'root';
 $password = 'root';
 try {
        global $conn;
        $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    } 
 catch (PDOException $pe) {
     die("Could not connect to the database $dbname :" . $pe->getMessage());
    }
?>