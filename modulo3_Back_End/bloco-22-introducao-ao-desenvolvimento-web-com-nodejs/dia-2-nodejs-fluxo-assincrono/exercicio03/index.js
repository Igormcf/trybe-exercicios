// Reescreva o código do exercício anterior para que utilize async/await.
//Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.

function exeOne(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
      return reject(new Error('Apenas números são aceitos'));
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  })
};

function getRandomNum() {
  return Math.floor(Math.random() * 100 + 1);
};

async function callDoMath() {
  const randomNum = Array.from({ length: 3 }).map(getRandomNum);

  try {
    const result = await exeOne(...randomNum);
    console.log(result);
  } catch (error) {
    console.error(error.message)
  }

}

callDoMath();
