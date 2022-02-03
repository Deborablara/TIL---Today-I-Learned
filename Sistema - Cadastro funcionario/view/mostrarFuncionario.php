<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Style/style.css">
    <title>Mostrar Funcionário</title>
</head>
<body>
    <div>
        <h1>Mostrar Funcionários</h1>
        <div class="div-listar">
            <?php
                include '../control/crudFuncionario.php';

                $resultado = mostrarFuncionario();

                if($resultado){
                    while($resultadoSeparado=mysqli_fetch_assoc($resultado)){
                        echo 
                        'Nome: ', $resultadoSeparado['nome'], '<br>',
                        'Cargo: ', $resultadoSeparado['cargo'], '<br>',
                        "<a href='editarFuncionario.php?codigo=$resultadoSeparado[codigo]'>Editar</a>",
                        '<br><br>';
                    }
                }
            ?>
        </div>
        <a href="./cadastrarFuncionario.php" class="voltar">Voltar</a>
        
    </div>
    
</body>
</html>