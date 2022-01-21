//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, currentValue) => acc.concat(currentValue), []);
};

console.log(flatten());

//Utiliza a função .concat para concatenar os valores da matriz em uma array única