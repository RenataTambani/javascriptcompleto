// comentario de uma linha

/*
comentario
com varias
linhas
*/

/*
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
*/

var numero = 20;
numero += 10; //total 30

//operador ternario: abreviação de condicionais com if e esle
// condição? "true" : "false" (retornat numero, string, etc, nao tem pq retornar booleano)

var idade = 12;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

//abreviaçoes
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Sim, possui faculdade");
else console.log("Não possui facudlade");

//EXERCICIO

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;

var darCredito =
  possuiCarro && possuiCasa ? "Crédito liberado!" : "Crédito não liberado";
console.log(darCredito);
