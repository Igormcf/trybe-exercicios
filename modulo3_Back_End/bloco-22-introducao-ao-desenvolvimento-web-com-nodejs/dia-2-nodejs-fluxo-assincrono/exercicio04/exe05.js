//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises;

async function persons() {
  const result = await fs.readFile('./simpsons.json', 'utf-8');
  const dataPerson = JSON.parse(result);

  const findPerson = dataPerson.find((item) => item.name === 'Nelson Muntz');

  const family = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const dataFamily = JSON.parse(family);

  dataFamily.push(findPerson);

  fs.writeFile('./simpsonsFamily.json', JSON.stringify(dataFamily))
}

function main() {
  persons();
}

main();