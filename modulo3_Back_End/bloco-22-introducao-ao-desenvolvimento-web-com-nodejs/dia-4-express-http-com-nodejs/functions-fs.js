const fs = require('fs').promises;

async function readSimpsons () {
  const persons = await fs.readFile('./simpsons.json', 'utf-8');
  const result = JSON.parse(persons);
  return result;
}

function writeSimpsons (person) {
  return fs.writeFile('./simpsons.json', JSON.stringify(person));
}

module.exports = { readSimpsons, writeSimpsons };