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
}

exeOne(10, 3, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

exeOne(10, 'a', 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

exeOne(3, 3, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));
  