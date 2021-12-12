<?php

Header('Access-Control-Allow-Origin: *');
Header('Access-Control-Allow-Headers: *');
Header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  die("nöörün?");
}

$host = "localhost";
$user = "root";
$pass = "";
$dbname   = "kitap";



try {
  $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", "$user", "$pass");
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $w) {
  echo $w->getMessage();
  exit;
}



$_POST = json_decode(file_get_contents("php://input"), true);

$kelime = htmlspecialchars(addslashes(trim(str_replace('+', ' ', $_POST["kelime"]))));

$response = array();

$query = $db->prepare(" SELECT * FROM tr_diyanet WHERE text LIKE ?  GROUP BY id ORDER BY sure_yer DESC, sura ASC ");
$query->execute(array('%' . $kelime . '%'));


$ayetSayi = $query->rowCount();


function ara($arr, $str)
{
  foreach ($arr as $data) {
    if (strstr($str, $data))
      return true;
    break;
  }
}


if ($ayetSayi > 0) {

  $medeni = 0;
  $mekki = 0;
  $kelimeSayi = 0;


  while ($row = $query->fetch()) {

    if ($row["sure_yer"] == "Mekki") {
      $mekki++;
    } else {
      $medeni++;
    }
    $kelimeSayi += substr_count(strtoupper($row["text"]), strtoupper($kelime));
 
  }
 

  $query2 = $db->prepare(" SELECT * FROM tr_diyanet WHERE text LIKE ?  GROUP BY id ORDER BY sure_yer DESC, sura ASC ");
  $query2->execute(array('%' . $kelime . '%'));

  $response = array(
    'status' => 'success',
    'message' => $query2->fetchAll(),
    'ayetSayi' => $ayetSayi,
    'mekkiSayi' => $mekki,
    'medeniSayi' => $medeni,
    'kelimeSayi' => $kelimeSayi
  );
} else {
  $response = array('status' => 'error', 'message' => 'içerik bulunamadı.');
}
echo json_encode($response);
