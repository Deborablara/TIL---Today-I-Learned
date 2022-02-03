<?php

    include '../control/conectaBD.php';

    function cadastrarFuncionario($nome, $cargo){
        conect();
        query("INSERT INTO funcionario(nome, cargo) VALUES ('$nome', '$cargo')");
        close();

    }

    function mostrarFuncionario(){
        conect();
        $resultado = query("SELECT * FROM funcionario");
        close();
        return $resultado;
    }

    function mostrarFuncionarioAlterar($codigo){
        conect();
        $resultado = query("SELECT * FROM funcionario where codigo = $codigo");
        close();
        return $resultado;
    }

    function alterarfuncionario($codigo, $nome, $cargo){
        conect();
        query("UPDATE funcionario SET nome = '$nome', cargo = '$cargo' WHERE codigo = $codigo");
        close();
    }

    function excluirFuncionario($codigo){
        conect();
        query("DELETE FROM funcionario where codigo = $codigo");
        close();
    }
?>