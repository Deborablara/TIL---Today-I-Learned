const form = document.getElementById('form')
form.addEventListener('submit', imc)

const calcular = document.getElementById('button')

function imc(e){
    
    e.preventDefault();

    const altura  = document.getElementById('altura').value;
    const peso  = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    const valor = (peso / Math.pow(altura, 2)).toFixed(2);

    if(valor < 18.5){
        resultado.innerHTML = `Imc: ${valor}. Seu imc está abaixo do peso.`;
    }
    else if(valor >= 18.5 || valor < 24.9 ){
        resultado.innerHTML = `Imc: ${valor}. Seu imc está normal.`;
    }
    else if(valor >= 25 || valor < 29.9){
        resultado.innerHTML = `Imc: ${valor}. Seu imc com sobrepeso.`;
    }
    else if(valor >= 30 || valor <= 34.9){
        resultado.innerHTML = `Imc: ${valor}. Seu imc com Obesidade grau I.`;
    }
    else if(valor >= 35 || valor <= 39.9){
        resultado.innerHTML = `Imc: ${valor}. Seu imc com Obesidade grau II.`;
    }
    else{
        resultado.innerHTML = `Imc: ${valor}. Seu imc é Obesidade Grau III ou Mórbida`;
    }

}

calcular.addEventListener('click', imc);

function restart(){
    document.location.reload(true);
}

