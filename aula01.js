//Imprimir dados no terminal/console
/*console.log("Olá, Mundo!"); //Alguma informação mais comum
console.warn("Algum aviso aqui!"); //Algum aviso para deixar no terminal
console.error("Aconteceu algum erro!"); //Quando queira printar algum erro mais especifico

pessoa = { nome: "Augusto", sobrenome: "Ortolan", idade: 24 };
pessoa1 = { nome: "João", sobrenome: "Silva", idade: 18 };
console.table([pessoa, pessoa1]); //Printando os dados de uma forma mais organizada
*/

//Tipos de variáveis no JavaScript
/*
nome = "Augusto";
console.log(typeof nome); //String

idade = 24;
peso = 55.5;
console.log(typeof idade, typeof peso); //Number

maioridade = idade >= 18;
console.log(typeof maioridade); //Boolean

listaDeFrutas = ["Melancia", "Maçã", "Laranja", "Uva"];
console.log(Array.isArray(listaDeFrutas)); //Verificação se é uma lista, vai devolver true
console.log(Array.isArray(maioridade));

pessoa = { nome: "Augusto", sobrenome: "Ortolan", idade: 24 };
console.log(typeof pessoa); //object
*/

//Estruturas de condição - IF
/*maioridade = 18;
idade = 17;

if (idade >= maioridade) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}*/

/*idade = 2;

if (idade >= 18) {
  console.log("Adulto");
} else if (idade > 13) {
  console.log("Adolescente");
} else if (idade >= 3) {
  console.log("Criança");
} else {
  console.log("Bebê");
}*/

//Switch Case - Utilizado para valores estaticos, por exemplo enums ou constantes
/*situacao = "PENDENTE";
switch (situacao) {
  case "PENDENTE":
    console.log("Seu pedido está pendente");
    break;
  case "EM_SEPARACAO":
    console.log("Seu pedido está em separação");
    break;
  case "ENVIADO":
    console.log("Seu pedido foi enviado");
    break;
  case "FINALIZADO":
    console.log("Seu pedido foi finalizado");
    break;
  default:
    throw Error("Situação nao encontrada");
}*/

//Laços de repetição

//WHILE
/*idade = 5;
while (idade < 18) {
  console.log("Não é adulto ainda: ", idade);
  idade;
}*/

/*idade = 25;
while (idade >= 18) {
  console.log("Não é criança: ", idade);
  idade--;
}*/

//FOR: FOR LOOP, FOR IN, FOR OF

//FOR LOOP -- sabe o tamanho da lista
/*listaDeFrutas = ["Melancia", "Maçã", "Laranja", "Uva"];
for (i = 0; i < listaDeFrutas.length; i++) {
  console.log("Índice: ", i, "Fruta: ", listaDeFrutas[i]);
}

//FOR IN -- percorre objetos
objeto = { a: 1, b: 2, c: 3 };
for (chave in objeto) {
  console.log(chave, objeto[chave]);
}

//FOR OF - percorre listas
for (fruta of listaDeFrutas) {
  console.log(fruta);
}*/

//Funções

//Maneira tradicional
/*function mostraInter() {
  console.log("Internacional");
}

function mostraGremio() {
  console.log("Grêmio");
}

mostraInter();
mostraGremio();*/

function soma(a, b) {
  return a + b;
}

console.log(soma(10, 5));

function mostraNome(nome, nickname) {
  console.log("My name is " + nickname + ", " + nome);
}

mostraNome("James Bond", "Bond");

somaNumeros = (a, b) => {
  return a + b;
};
console.log(somaNumeros(10, 5));
