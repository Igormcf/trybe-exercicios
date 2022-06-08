// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;

async function readAll() {
  const result = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(result);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

function main() {
  readAll();
}

main();


// Solução com .then

/* function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpsons = JSON.parse(fileContent);
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
      strings.forEach((string) => console.log(string));
    });
}

function main() {
  readAll();
}
main(); */
