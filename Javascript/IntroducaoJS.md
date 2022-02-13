 COMENTÁRIOS:

//para comentar uma linha

/* para
   comentar
   mais
   de
   uma
   linha 
*/


TIPOS DE DADOS:

## STRING   //Para escrever textos
    "" aspas duplas
    '' aspas simples
    `` template literals ou template strings (permite usar multi linhas, quabra de linha)

## NUMBER  //Números
    33 - inteiros
    12.5 - reais - Float
    NaN - Not a Number
    Infinity - Infinito 

## BOOLEAN
    -true
    -false

## OBJECT

    -Propriedes (tamanho, cor, peso, etc) ->  Atributos
    -Funcionalidades -> Métodos

    {atributo: "valor}

    ex:
    console.log({ 
       name: "Débora",
       altura: 1.63,
       andar: function(){
           console.log("Andar);
       }
    })

## ARRAY // vetores

    ["Débora", 20]


VARIÁVEIS:

## Var

    var clima = "Quente"
    clima = "Frio" - pode reatribuir outros valores

    -> var é global e também local. Não é tão utilizada

## Let
    Variável local. Pode ser reatribuido valores, assim como var. 
    Entre var e let, preferencialmente escolher let

    let clima = "Quente"
    clima = "Frio"


## Const 

    Usado quando não queremos reatribuir valores à uma variável, o valor não pode mudar.

    const clima = "Quente"
    clima = "Frio" - isso daria erro na hora de executar, pois variável contante não muda.

## CONCATENAÇÃO E INTERPOLAÇÃO

const age = 20

-> console.log('Débora tem' + age + 'anos.') = concatenação

-> console.log(`Débora tem ${age} anos.`) = interpolação


FUNCTION:

## Declaração da função:

function createPhrase(){

    console.log('Estudar é muito bom')
}

## Execução:
createPhrase()

## Argumentos e Parametros:

const sum = function(number1, number2){
    var total = number1 + number2
    return total
}

console.log(som(2, 3)) // vai retornar 5


## arrow function

const sayMyName = () => {
    console.log('Teste')
}

## função construtora

function Person(name){
    this.name = name
}

const debora = new Person("Débora");
console.log(debora) -> retornará "Débora"





