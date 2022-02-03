<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Style/style.css">
    <title>Cadastrar funcionário</title>
</head>
<body>
    <div>
        <h1>Cadastrar funcionario</h1>
        <form method="POST" action="../model/controleFuncionario.php">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome">

            <label for="cargo">Cargo</label>
            <input type="text" name="cargo" id="cargo">

            <button type="submit" name="opcao" value="cadastrar">Cadastrar</button>
            

        </form>
        
    </div>
    <div >
    <a href="./mostrarFuncionario.php" class="buttonListar">Listar Funcionários</a>
    </div>
    
</body>
</html>