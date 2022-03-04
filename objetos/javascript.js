//objetos: conjunto de variaveis e funções, que são chamadas de propriedades e métodos - nome (chave) e valor. Separar propriedades por VIRGULA

//objeto pessoa PROPRIEDADES:
var pessoa = {
  nome: "Renata",
  idade: 28,
  profissão: "Geógrafa",
  possuiFaculdade: true,
};
console.log(pessoa);
console.log(pessoa.nome, pessoa.idade, pessoa.profissão);
console.log(typeof pessoa);

//METODOS: propriedade que possui uma função no local do seu valor
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return lado * 4;
  },
};
console.log(quadrado.area(10));
console.log(quadrado.perimetro(10));

//objetos servem para organizar o código em pequenass partes reutilizaveis
addEventListener("click", function () {
  console.log(Math.random());
});

//objeto sempre é criado utilizando chaves
var menu = {
  width: 800,
  height: 50,
  backgroundcolor: "#eeeeee",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.esconder = function () {
  console.log("Escondi");
};
var bg = menu.backgroundcolor;

// Crie um objeto com os seus dados pessoais

var dadosPessoais = {
  nome: "Renata",
  sobrenome: "Tambani",
  gatos: 4,
  telefone: "43999207720",
  nomeCompleto() {
    return this.nome + this.sobrenome;
  },
};
console.log(dadosPessoais.nomeCompleto());

// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Au-au";
    } else {
      return "nada";
    }
  },
};

console.log(cachorro.latir("homem"));
