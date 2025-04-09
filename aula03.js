const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 25 },
  { nome: "Clara", idade: 16 },
  { nome: "Daniel", idade: 30 },
  { nome: "Eduarda", idade: 15 },
  { nome: "Felipe", idade: 18 },
  { nome: "Gabriela", idade: 14 },
  { nome: "Henrique", idade: 22 },
  { nome: "Isabela", idade: 19 },
];

const maioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);
const menoresDeIdade = pessoas.filter((pessoa) => pessoa.idade < 18);

console.log("Pessoas maiores de idade:");
console.table(maioresDeIdade);

console.log("Pessoas menores de idade:");
console.table(menoresDeIdade);

const saudacoes = pessoas.map(
  (pessoa) => `Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`
);

console.log(saudacoes);

const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
console.log(somaIdades);
