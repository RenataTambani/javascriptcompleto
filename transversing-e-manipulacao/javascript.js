////Traversing e Manipulação

//OUTERHTML, INNERHTML E INNERTEXT: Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

// const menu = document.querySelector(".menu");

// console.log(menu.outerHTML); // todo o html do elemento
// console.log(menu.innerHTML); // html interno
// console.log(menu.innerText); // texto, sem tags

// const h1 = document.querySelector("h1");
// console.log((h1.innerText = "<p>Mudei o texto do titulo no console</p>")); // a tag vai como texto
// console.log((h1.innerHTML = "<p>Mudei o texto do título no site</p>")); // a tag é renderizada

// //TRANSVERSING: Como navegar pelo DOM, utilizando suas propriedades e métodos. (se pegar lista node vem todos os textos e comentarios,  utilizando childNode por exemplo)

// const lista1 = document.querySelector(".animais-lista");
// //sempre utilizar Element!!
// console.log(lista1.parentElement); //pai
// console.log(lista1.parentElement.parentElement); //pai do pai
// console.log(lista1.previousElementSibling); //elemento acima irmao
// console.log(lista1.nextElementSibling); //elemento abaixo irmao

// console.log(lista1.children); //HTML collection com os filhos
// console.log(lista1.children[0]); //primeiro filho
// console.log(lista1.children[--lista1.children.length]); // ultimo filho

// console.log(lista1.querySelectorAll("li")); //todas as li's
// console.log(lista1.querySelector("li:last-child")); //ultimo filho

// //ELEMENT VS NODE: Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais. Geralmente estamos atrás de um elemento e não de qualquer node em si.

// const animais1 = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// animais1.appendChild(titulo);

// console.log(lista1.previousElementSibling); // elemento acima
// console.log(lista1.previousSibling); // node acima
// console.log(lista1.firstChild); // primeiro node child
// // console.log(lista1.childNodes); // todos os node child

// //MANIPULANDO ELEMENTOS: É possível mover elementos no dom com métodos de Node.

// const lista2 = document.querySelector(".animais-lista");

// //console.log(contato.appendChild(lista2)); // move lista de fotos para o final de contato
// //console.log(contato.insertBefore(lista2, titulo)); // insere a lista antes de titulo
// //console.log(contato.removeChild(titulo)); // remove titulo de contato
// //console.log(contato.replaceChild(lista2, titulo)); // substitui titulo por lista
// //console.log(contato.insertBefore(animais1, titulo));

// // NOVOS ELEMENTOS: Podemos criar novos elementos com o método createElement(). Crir uma nova DIV por exemplo
// const mapa = document.querySelector(".mapa");
// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Novo H1 embaixo do mapa";
// novoH1.classList.add("titulo");
// console.log(novoH1); //criado porem nao aparece no dom.
// mapa.appendChild(novoH1); //inserir o elemento novoH1

// const novoH2 = document.createElement("h2");
// novoH2.innerText = "Novo H2 embaixo das fotos da lista";
// novoH2.classList.add("titulo");
// console.log(novoH2);
// lista2.appendChild(novoH2);

// //CLONAR ELEMENTOS: Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode(). Por exemplo, clonar o titulo e adicionar em outra section

// const titulo = document.querySelector("h1");
// const titulo2 = document.querySelector("h1");
// const novoTitulo = titulo;
// // titulo, titulo2 e novoTitulo são iguais

// const cloneTitulo = titulo.cloneNode(true); //true sinaliza para incluir os filhos; false traz só a tag que envolve o elemento (sem o texto por exemplo)
// console.log(cloneTitulo);
// const contato = document.querySelector(".contato");
// contato.appendChild(cloneTitulo);

//EXERCÍCIO
// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
//const proximoDD = primeiroDt.nextElementSibling
const primeiroDd = document.querySelector(".faq dd");
console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
const faqLista = document.querySelector(".faq-lista");
console.log((faq.innerHTML = animais.innerHTML));
