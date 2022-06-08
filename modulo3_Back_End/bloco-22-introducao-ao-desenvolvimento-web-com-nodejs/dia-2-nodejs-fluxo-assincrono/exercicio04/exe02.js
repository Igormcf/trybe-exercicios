const fs = require('fs').promises;

async function person(id) {
  const result = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(result);
  const exploreId = simpsons.find((item) => Number(item.id) === id);

  if (!exploreId) {
    throw new Error('id não encontrado'); 
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
    // Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
    // tendo como motivo o que passarmos para o `throw`.
    // Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
    //*/
  }

  return exploreId;/* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,`return` aciona o fluxo de sucesso e resolve a Promise. Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)` dentro do executor de uma Promise.*/
}

async function findPersonId() {
  const simpson = await person(5);
  console.log(simpson);
}

// Opção then:
/* function findPersonId() {
    person(1)
     .then((simpson) => console.log(simpson));
} */

findPersonId();
