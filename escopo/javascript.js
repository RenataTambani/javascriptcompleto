function mostrarCarro() {
  var carro = "Fusca";
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

console.log(mostrarCarro());

if (true) {
  var carro = "Gol";
  console.log(carro);
}

if (true) {
  let mes = "Fevereiro";
  console.log(mes);
}

//bloco sempre entre {}  (não utilizar ={ } pq ele é usado só para a criação de objetos)

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
//console.log(i); // i is not defined

//EXERCICIO

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}
//console.log(var, marca, portas);
console.log(cor);

// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(40));
console.log(dividirDois(60));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
