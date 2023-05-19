<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "proiect-html";

$connection = mysqli_connect($servername, $username, $password, $database);

if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nume = $_POST['nume'];
  $telefon = $_POST['telefon'];
  $livrare = $_POST['livrare'];
  $adresa = $_POST['adresa'];
  $codProdus = $_POST['cod_produs'];
  $cantitate = $_POST['cantitate'];
  $pret_total = $_POST['pret_total'];

  $query = "INSERT INTO comenzi (nume, telefon, livrare, adresa, cod_produs, cantitate) 
              VALUES ('$nume', '$telefon', '$livrare', '$adresa', '$codProdus', '$cantitate')";

  if (mysqli_query($connection, $query)) {
    echo "Comanda a fost inregistrata cu succes!";
  } else {
    echo "Eroare la inregistrarea comenzii: " . mysqli_error($connection);
  }
}

mysqli_close($connection);

header("Location: " . $_SERVER['HTTP_REFERER']);
exit();
?>