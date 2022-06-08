//Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;

async function persons(id1, id2) {
  const result = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(result);
  const filterPerson = simpsons.filter((item) => Number(item.id) !== id1 && Number(item.id) !== id2 );

  // Para escrever no arquivo o novo array filtrado:
  // await fs.writeFile('./simpsons.json', JSON.stringify(filterPerson));
  // Depois só chamar na main.

  return filterPerson;
}

async function main() {
  const filterSimpsons = await persons(10, 6);
  console.log(filterSimpsons);
}

main();