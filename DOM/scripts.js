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

element.style.backgroundColor = "#f9f3D2";
