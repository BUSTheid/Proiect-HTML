<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$database = "proiect-html";

// Create a connection to the database
$connection = mysqli_connect($servername, $username, $password, $database);

// Check if the connection was successful
if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the form data
  $nume = $_POST['nume'];
  $telefon = $_POST['telefon'];
  $livrare = $_POST['livrare'];
  $adresa = $_POST['adresa'];
  $codProdus = $_POST['cod_produs'];
  $cantitate = $_POST['cantitate'];

  // Insert the data into the database
  $query = "INSERT INTO comenzi (nume, telefon, livrare, adresa, cod_produs, cantitate) 
              VALUES ('$nume', '$telefon', '$livrare', '$adresa', '$codProdus', '$cantitate')";

  if (mysqli_query($connection, $query)) {
    echo "Comanda a fost inregistrata cu succes!";
  } else {
    echo "Eroare la inregistrarea comenzii: " . mysqli_error($connection);
  }
}

// Close the database connection
mysqli_close($connection);
?>