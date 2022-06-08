//Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const fs = require('fs').promises;

async function persons() {
  const resultPerson = await fs.readFile('./simpsons.json', 'utf-8');
  const dataPerson = JSON.parse(resultPerson);

  const findMaggie = dataPerson.find((item) => item.name === 'Maggie Simpson');

  const resultFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const dataFamily = JSON.parse(resultFamily);
  const removeNelson = dataFamily.filter((item) => item.name !== 'Nelson Muntz');

  removeNelson.push(findMaggie);

  fs.writeFile('./simpsonsFamily.json', JSON.stringify(removeNelson));
}

function main() {
  persons();
}

main();