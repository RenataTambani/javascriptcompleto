function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

//Ao crir uma função voce pode definir parametros
//Ao executar uma função voce pode passar argumentos

//peso e altura sao parametros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

//argumento sao valores
imc(80, 1.8);
imc(60, 1.7);
console.log(imc(80, 1.8));
console.log(imc(65, 1.67));

function teste(idade, peso) {
  const teste = idade * peso;
  return teste;
}
console.log(teste(30, 65));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
console.log(corFavorita());

//argumentos podem ser funçoes, chamadas de callback, geralmente são funçoes que correm após algum evento
//addEventListener("click", function () {
// console.log("Oi");
//});

function meuNome() {
  return "Renata";
}
addEventListener("click", meuNome);

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc2(100, 2);

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "informe a sua idade";
  } else if (idade >= 60) {
    return "Idoso";
  } else {
    return "Adulto";
  }
}
console.log(terceiraIdade(78));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(17));

//exercicio

// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado1) {
  var dado1 = 1;
  return !!dado1;
}
console.log(isTruthy());

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado + lado + lado + lado;
}
console.log("O perímetro do quadrado é " + perimetro(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var nome = "Renata";
  var sobrenome = "de Mello Tambani";
  return "Meu nome completo é " + nome + " " + sobrenome;
  //return `${nome} ${sobrenome}`;
}
addEventListener("click", nomeCompleto);
console.log(nomeCompleto());

// Crie uma função que verifica se um número é par
function par(numero) {
  if (numero % 2 === 0) {
    return "O número " + numero + " é par";
  } else {
    return "O número " + numero + " é ímpar";
  }
}
console.log(par(15));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
  // if (typeof dado === "number") {
  //   return "O tipo de dado é um número";
  // } else if (typeof dado === "string") {
  //   return "O tipo de dado é string";
  // } else {
  //   return "O dado não é nem number nem string";
  // }
}
console.log(tipoDeDado("re"));
console.log(tipoDeDado(2));
console.log(tipoDeDado(true));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Renata Tambani");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
console.log(precisoVisitar(10));

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(47));
console.log(jaVisitei(33));
