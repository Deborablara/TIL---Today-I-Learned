const form = document.getElementById('form');
form.addEventListener('submit', heandleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');


const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML  = 'Tentativa: ' + value;
}

function heandleSubmit(e){

    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Digite algum valor!');
        return;
    }

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick){
        playAgain();
        status.innerHTML = 'Parabens, você acertou!';
        result.style.color = '#008000';
        clear();
    } else if(numberDrawn > kick){
        status.innerHTML = 'O número é maior!';
        result.style.color = '#de4251';
        clear();
    } else if(numberDrawn < kick){
        status.innerHTML = 'O número é menor!';
        result.style.color = '#de4251';
        clear();

    }

}

function playAgain(){
    document.getElementById('btn-restart').style.display = 'flex';
    document.getElementById('btn-restart').style.justifyContent = 'center';
}

function restart(){
    document.location.reload(true)
}

function clear(){
    document.getElementById('kick').value = '';
}