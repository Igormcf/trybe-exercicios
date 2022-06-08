/* Escreva código para consumir a função construída no exercício anterior.
- Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: `Math.floor(Math.random() * 100 + 1)`.
- Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
- Utilize `then` e `catch` para manipular a Promise retornada pela função:
  1. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  2. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. */

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

let num1 = Math.floor(Math.random() * 100 + 1);
let num2 = Math.floor(Math.random() * 100 + 1);
let num3 = Math.floor(Math.random() * 100 + 1);

exeOne(num1, num2, num3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

  
  
// Outra forma de resolver:

/* function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  Criamos um novo array de 3 posições
  e utilizamos o `map` para gerar um número aleatório
  para cada posição do Array
   
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  console.log(randomNumbers);

  return randomNumbers;
}

exeOne(...callDoMath())
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message)); */