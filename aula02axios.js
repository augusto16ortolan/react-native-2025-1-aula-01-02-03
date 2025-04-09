const axios = require("axios");

/*async function buscaCep(cep) {
  const site = "viacep";
  const response = await axios.get(`https://${site}.com.br/ws/${cep}/json`); //Interpolação de string
  let endereco = response.data;
  console.log("Cidade: ", endereco.localidade);
}

buscaCep("99010130");
buscaCep("99560000");
*/

async function traduzirFrase(lingua, frase) {
  const response = await axios.get(
    `https://api.funtranslations.com/translate/${lingua}?text=${frase}`
  );
  console.log(response.data);
}

traduzirFrase("minion", "gremio%20nao%20tem%20mundial");
