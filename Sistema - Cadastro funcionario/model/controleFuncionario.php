<?php

    include '../control/crudFuncionario.php';

    $opcao = $_POST["opcao"];

    switch($opcao){
        case 'cadastrar':
            $nome = $_POST["nome"];
            $cargo = $_POST["cargo"];
            cadastrarFuncionario($nome, $cargo);
            header("Location: ../view/cadastrarFuncionario.php");


        break;

        case 'alterar':
            alterarFuncionario($_POST["codigo"], $_POST["nome"], $_POST["cargo"]);
            header("Location: ../view/mostrarFuncionario.php");
        break;

        case 'excluir':
            excluirFuncionario($_POST["codigo"]);
            header("Location: ../view/mostrarFuncionario.php");

        break;
    }

?>