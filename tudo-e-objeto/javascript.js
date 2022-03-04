//tudo é objeto: strings, numeros, booleano, objetos e mais, possuem propriedades e métodos. Por isso são objetos

var nome = "Renata";

nome.length;
nome.charAt();
nome.replace("ta", "tah");
console.log(nome.charAt(3) + " " + nome.length + nome.replace("ta", "tah"));

var altura = 1.8;

altura.toString();
altura.toFixed();

console.log(
  "Altura: " +
    altura.toString() +
    " tipo: " +
    typeof altura.toString() +
    " altura arredondada: " +
    altura.toFixed()
);

//funções tambem possuem metodos e propriedades

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado.toString());

//elementos do dom
var btn = document.querySelector(".btn");

//objetos revolucionaram a programação: Web API's são métodos e propriedades que permitem a interação JavaScript e Browser (addEventListener, querySelector) - API (comunicação entre duas máquinas, código com código)

// nomeie 3 propriedades ou métodos de strings
var sobrenome = "Tambani";
sobrenome.repeat(3);

console.log(sobrenome.repeat(3));
("repeat, slice, fixed, length, etc;");
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
//btn.addEventListener
//btn.appendChild
//btn.innerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
