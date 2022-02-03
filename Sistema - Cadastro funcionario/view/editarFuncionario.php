<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Style/style.css">
    <title>Editar funcionário</title>
</head>
<body>
    <div>
        <h1>Editar funcionario</h1>
        <?php

            include '../control/crudFuncionario.php';

            $codigo = $_GET["codigo"];
            $resultado = mostrarFuncionarioAlterar($codigo);
            $resultadoSeparado = mysqli_fetch_assoc($resultado);


        ?>
        <form method="POST" action="../model/controleFuncionario.php">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" value="<?php echo $resultadoSeparado['nome']; ?>">

            <label for="cargo">Cargo</label>
            <input type="text" name="cargo" id="cargo" value="<?php echo $resultadoSeparado['cargo']; ?>">
            
            <input type="hidden" name="codigo" value="<?php echo $resultadoSeparado['codigo'] ?>">

            <button type="submit" name="opcao" value="alterar">Editar</button>
            <button type="submit" name="opcao" value="excluir">Excluir</button>
            

        </form>
        <a href="./mostrarFuncionario.php" class="voltar">Voltar</a>
    </div>
    
</body>
</html>