const axios = require("axios");

async function buscarPersonagem(personagem) {
  const response = await axios.get(
    `https://swapi.dev/api/people?search=${personagem}`
  );
  return response.data.results[0];
}

async function buscarNave(urlNave) {
  const response = await axios.get(urlNave);
  return response.data;
}

async function buscarFilme(urlFilme) {
  const response = await axios.get(urlFilme);
  return response.data;
}

/*async function main() {
  const personagem = await buscarPersonagem("Darth Vader");

  console.log("Personagem: ", personagem.name);

  const nave = await buscarNave(personagem.starships[0]);

  console.log("Nave: ", nave.name);

  const filmeDaNave = await buscarFilme(nave.films[0]);

  console.log("Filme: ", filmeDaNave.title);
  console.log("Texto de abertura: ", filmeDaNave.opening_crawl);
}*/

/*async function main() {
  const personagem = await buscarPersonagem("Darth Vader");

  let requisicoesDosFilmes = [];
  for (let urlFilme of personagem.films) {
    //const filme = await buscarFilme(urlFilme);
    requisicoesDosFilmes.push(axios.get(urlFilme));
  }

  const responseFilmes = await Promise.all(requisicoesDosFilmes);

  console.log(responseFilmes.map((responseFilme) => responseFilme.data.title));
}*

async function main() {
  const personagem = await buscarPersonagem("Darth Vader");

  const responseFilmes = await Promise.all(
    personagem.films.map((urlFilme) => axios.get(urlFilme))
  );

  console.log(responseFilmes.map((responseFilme) => responseFilme.data.title));
}

main();
