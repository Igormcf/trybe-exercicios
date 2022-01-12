/* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals  */

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */

/* Primeira resolução */
const ordena1 = () => {
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort(function(a, b){return a - b});

  return oddsAndEvens;
}

const numOrdenados = ordena1();

console.log(`Os números ${numOrdenados} se encontram ordenados de forma crescente`); 

/* Segunda resolução */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena2 = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const agrupaNum = ordena2();

console.log(`Os números ${agrupaNum} se encontram ordenados de forma crescente`); 

/* Crie uma função que receba um número e retorne seu fatorial. */
const fatorarNum = (num) => {
  let valor = 1;

  for(let index = 1; index <= num; index += 1) {
    valor *= index;
  }
  return valor;
}
console.log(fatorarNum(7));

/* Crie uma função que receba uma frase e retorne qual a maior palavra. */
const bigWord = (frase) => {
  let big = '';
  let valor = 0;
  let words = frase.split(' ');

  for (const word of words) {
    if(word.length > valor) {
      valor = word.length;
      big = word;
    };
  };
  return big;
  
};

console.log(bigWord('eu vou comprar uma xícara'));