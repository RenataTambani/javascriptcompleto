var possuiFaculdade = false;

if (possuiFaculdade) {
  console.log("Possui faculdade");
} else {
  console.log("Não possui faculdade");
}

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

var nome = "Renata";

if (!nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

var x = 10;
console.log(x === 11);

//retorna o ultimo valor VERDADEIRO  ou o primeiro valor FALSO. && Se a puder ser convertido em true , o operador && vai retornar o valor de b , caso contrário ele retornará a
var condicional = 5 - 10 && 10 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso", condicional);
}

//compara se uma expressao OU outra é verdadeira (ultima verdadeira)
var condicional2 = 5 - 5 || 5 + 5 || 10 - 2 || 5 - 5;
console.log(condicional2);

//switch

var corFavorita = "Amarelo";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Vermelho":
    console.log("Olhe para rosas");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  default:
    console.log("Feche os olhos");
}

//exercicio
var idade = "17";
var idadeParente = "17";

if (idade > idadeParente) {
  console.log("É maior");
} else if (idade === idadeParente) {
  console.log("É igual");
} else {
  {
    console.log("É menor");
  }
}

var expressao = 5 - 2 && 5 - " " && 5 - 2;
if (expressao) {
  console.log("Verdadeiro", expressao);
} else {
  console.log("Falso", expressao);
}

var nome = "Renata";
var idade = 30;
var possuiMestrado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiMestrado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("A China tem mais habitantes");
}

if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("False");
}
