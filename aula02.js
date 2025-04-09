//var - let - const
/*var nome = "Augusto";
console.log(nome);
nome = "João";
console.log(nome);

let idade = 24;
idade = 18;
console.log(idade);

let x = 10;
if (1 == 1) {
  let x = 20;
  console.log(x);
}
console.log(x);

const CODIGO_IMPOSTO = 44; //nunca pode ser alterada
console.log(CODIGO_IMPOSTO);*/

const digaOla = () => {
  console.log("OLá");
};

// digaOla();

/*function mostraInter() {
    setTimeout = primeiro parametro vai ser uma arrow function e o segundo parametro vai ser o tempo predefinido do delay
  setTimeout(() => {
    console.log("Internacional");
  }, 2000);
}

function mostraGremio() {
  console.log("Grêmio");
}

mostraInter();
mostraGremio();*/

function mostraInter(resolverPromessa) {
  return new Promise((resolve, reject) => {
    if (resolverPromessa) {
      setTimeout(() => {
        resolve("Internacional");
      }, 1000);
      return;
    }
    reject("Time não encontrado");
  });
}

console.log(mostraInter(true));

/*mostraInter(true)
  .then((resposta) => console.log(resposta))
  .catch((error) => console.error("Ocorreu um erro!", error));

mostraInter(false)
  .then((resposta) => console.log(resposta))
  .catch((error) => console.error("Ocorreu um erro!", error));*/

async function main() {
  try {
    console.log("1");
    const time = await mostraInter(true);
    console.log(time);
    console.log("2");
  } catch (error) {
    console.error("Ocorreu um erro!", error);
  }
}

main();
