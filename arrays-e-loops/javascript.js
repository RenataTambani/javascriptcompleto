//array: grupos de valores geralmente relacionados.
//Servem para guardarmos diferentes valores em uma única variável. []

var videoGames = ["Switch", "PS4", "XBox", "3ds"];
console.log(videoGames[0], videoGames[1]);
//console.log(videoGames.pop()); //remove o ultimo item e retorna ele
console.log(videoGames); //sem o ultimo item XBox
//console.log(videoGames.push("Nintendo")); //adiciona ao final da array
console.log(videoGames.length);

//for loop: fazem algo repetidamente até que uma condição seja atingida
//(inicio, condição e incremento) ---> incremento: adicionar um (++)
// console.log(1);
// console.log(2);
// console.log(3);  -----> nao é otimizado, por isso se usa o loop

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

//while loop

var i = 0;
while (i < 50) {
  console.log(i);
  i = i + 5;
}

//utilizar o loop para interagir com itens da array
var videoGames = ["Switch", "PS4", "XBox", "3ds"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(item);
  console.log(videoGames[item]);
}

//o loop irá parar caso encontre a palavra BREAK
var videoGames = ["Switch", "PS4", "XBox", "3ds"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

//for each: é um método que executa uma função para cada item da array.
//é uma forma mais simples de utilizar um loop com array (ou array-like)
var frutas = ["Banana", "Pera", "Maçã", "Abacaxi"];
frutas.forEach(function (fruta, index) {
  console.log("nome da fruta + indice = " + fruta, index);
});

//EXERCICIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < copa.length; i++) {
  console.log("O Brasil ganhou a copa de " + copa[i]);
  //console.log(Ò Brasil ganhou a copa de ${copa[i]})
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log("A ultima fruta da lista é " + ultimaFruta);
