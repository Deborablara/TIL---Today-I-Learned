//getElementById() - Obtem um elemento html através do Id

console.log(document.getElementById("blog-title"));

//getElementByClassName() - Obtem um elemento html através do nome da classe

console.log(document.getElementsByClassName("teste"));

//getElementByTagName() - Obtem um elemento html através do nome da tag

console.log(document.getElementsByTagName("meta"));

//querySelector() - retorna o primeiro elemento que corresponde a um seletor CSS especificado no documento.

document.querySelector(".example");

//querySelectorAll() - retorna o todos elementos que corresponde a um seletor CSS especificado no documento.
console.log(document.querySelectorAll("[src]"));

//textContent - altera o texto do elemento selecionado

const element = document.querySelector("h1");

element.textContent = "Olá Débora";

//também pode apenas pegar o valor que contem nele

const element = document.querySelector("h1");

console.log(element.textContent);

//innerText - Troca o texto interno do elemento html

//innerHTML - Modifica o html

//value - traz o valor do input quando está populado ou altera o valor do input. também adiciona valor ao input

//MANIPULAÇÃO DE ATRIBUTOS

const header = document.querySelector("header");
header.setAttribute("id", "header"); //adicionou o atributo id no header, com nome header

const headerID = document.querySelector("#header"); // seleciona o id do header
console.log(headerID.getAttribute("id")); // retorna o valor do id

header.removeAttribute("id"); // remove o atributo id do header

//alterando estilos

const element = document.querySelector("body");

element.style.backgroundColor = "#f9f3D2"; //muda o background de bory

//Navegando pelos elementos: parentElement e parentNode

const body = document.querySelector("body");

console.log(body.parentNode); //retorna a tag HTML, que é o nó pai de body

//Navagando pelos elementos filhos

const el = document.querySelector("body");
console.log(el.childNodes); // retorna os nós filhos de bory

//Buscando irmãos
const el = document.querySelector("header");

//nextSibling e nextElementSibling
el.nextSibling; // retorna o proximo irmão considerando o espaço vazio
el.nextElementSibling; // retorna o proximo irmão não considerando o espaço vazio
el.previousSibling; // leva em consideração o espaço vazio
el.previousElementSibling; //não leva em comsideração espaço vazio

//criando e adicionando elementos na página

// createElement

const div = document.createElement("div");
div.innerText = "Olá Devs"; //adiciona um texto interno, mas n é visto na página

//append prepend
const bory = document.querySelector("body");

body.append(div); //adiciona algo depois - prepend adiciona antes

//EVENTOS - Eventos são dispadados quando há alguma ação, como exemplo, pressionar uma tecla,
//passar o mouse por cima de algum elemento,etc
//<h1 onclick="print()"> texto </h1>

function print() {
  console.log("Print"); //Quando o clicar no h1 o texto será mostrado no console
}
