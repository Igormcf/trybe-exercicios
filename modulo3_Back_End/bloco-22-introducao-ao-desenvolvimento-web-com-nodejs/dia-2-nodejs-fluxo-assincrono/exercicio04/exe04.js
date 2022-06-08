//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const fs = require('fs').promises;

async function persons() {
  const result = await fs.readFile('./simpsons.json', 'utf-8');
  const dataPerson = JSON.parse(result);

  const array = [1, 2, 3, 4];

  const newFilter = dataPerson.filter((item) => array.includes(Number(item.id)));

  fs.writeFile('./simpsonsFamily.json', JSON.stringify(newFilter));
}

function main() {
  persons()
}

main()