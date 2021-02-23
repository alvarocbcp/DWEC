<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titulo</title>

    <style>

    body{
        background-color: lightgrey;
    }
    .titulo{
        margin: 40px auto;
        border: 1px solid black;
        width: 50em;
        text-align: center;
        box-shadow: 10px 10px 15px rgba(0,0,0, 0.8);
    }

   .titulo p{
        margin: 0 auto;
        text-aling: center;
        font-size: 5em;
        font-family: "Impact";
        text-shadow: 2px 2px grey;
    }

    li{
        list-style-type: none;
        font-size: 1.2rem;
        transition: 0.5s;
        font-weight: bold;
    }

    li a {
        text-decoration: none;
        color: purple;
        transition: 0.5s;
        font-size: 1.3em;
    }

    li:hover a{
        transition: 0.5s;
        text-decoration: underline;
    }
    ul li{
        color: rgb(255, 164, 150);
        font-size: 1.5rem;
    }
    </style>

    <script >
        function ejecutar()
        {
            exec("Code.exe .");
        }

        document.addEventListener("DOMContentLoaded", load, false);

        function load()
        {
            let enlace = document.getElementsByClassName("enlace");
            enlace.addEventListener("click", ejecutar, false);
        }

        

    </script>
</head>

<body>


   <?php
    echo "<div class='titulo'><p>RUTA INCIAL PHP</p></div> <br>";
    if ($handle = opendir('.')) {
        $blacklist = array('.', '..', 'somedir', 'index.php');
        echo "<ul>";
        while (false !== ($file = readdir($handle))) {

            if (!in_array($file, $blacklist)) {
                echo "<li><a class='enlace' href='$file'>$file </a> " . "<span> ---" . date ('d F Y H:i:s.', filemtime($file)) . "</span>" . "</li>";
                echo "<br>";
            }

        }
        echo "</ul>";
        closedir($handle);
    }
   ?>
   <br>

    <script src="https://kit.fontawesome.com/7181872264.js"></script>
</body>
</html>
