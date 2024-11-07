<!DOCTYPE html>
<html>
<head>
    <title>Resultado de la Calculadora</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #282c34;
            color: #fff;
        }
        .result-container {
            background-color: #333;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            text-align: center;
        }
        .result-text {
            font-size: 36px;
            color: #0f0;
            margin: 10px 0;
        }
        .back-link {
            font-size: 18px;
            color: #00f;
            text-decoration: none;
        }
        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="result-container">
        <?php
        if ($_POST['radio1'] == "suma") {
            $resultado = $_POST['valor1'] + $_POST['valor2'];
            echo "<div class='result-text'>La suma es: $resultado</div>";
        } elseif ($_POST['radio1'] == "resta") {
            $resultado = $_POST['valor1'] - $_POST['valor2'];
            echo "<div class='result-text'>La resta es: $resultado</div>";
        } elseif ($_POST['radio1'] == "multiplicacion") {
            $resultado = $_POST['valor1'] * $_POST['valor2'];
            echo "<div class='result-text'>La multiplicación es: $resultado</div>";
        } elseif ($_POST['radio1'] == "division") {
            if ($_POST['valor2'] != 0) {
                $resultado = $_POST['valor1'] / $_POST['valor2'];
                echo "<div class='result-text'>La división es: $resultado</div>";
            } else {
                echo "<div class='result-text'>Error: No se puede dividir entre cero.</div>";
            }
        }
        ?>
        <a href="index.html" class="back-link">Volver a la calculadora</a>
    </div>
</body>
</html>
