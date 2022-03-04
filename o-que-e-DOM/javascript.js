/*DOCUMENT OBJECT MODEL (DOM)
É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.*/

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

console.log(window.innerHeight); // retorna a altura do browser

window.alert("Oiii");

window.location;
console.log(window.location);

const href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5500/o-que-e-DOM/index.html") {
  console.log("HREF é igual");
}

/*
WINDOW E DOCUMENT
São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.
window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
*/
document.querySelector("h1");
document.body;
const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);
/*
NODE
Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
*/
h1Selecionado.classList;

const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener("click", function () {
  console.log("Clicou em", h1Selecionado.innerText);
});
// ativa a função callback ao click no titulo
//function callbackh1() {
//console.log("Clicou em ", h1Selecionado.innerText);
//}
//h1Selecionado.addEventListener("click", callbackh1)

//EXERCICIO

// Retorne o url da página atual utilizando o objeto window
//const hRefPagina = window.location.href;
//console.log(hrefPagina);
console.log(window.location.href);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
console.log(document.activeElement);
console.log(document.querySelector(".ativo"));

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela
console.log(innerWidth);
