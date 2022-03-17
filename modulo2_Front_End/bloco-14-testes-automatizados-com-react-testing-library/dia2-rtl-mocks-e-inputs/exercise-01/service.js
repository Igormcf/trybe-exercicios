//01 - Crie uma função que gere um número aleatório:
//Defina uma função que gere um número aleatório entre 0 e 100.
//Desenvolva os testes para essa função.
//Utilize o mock e defina o retorno padrão como 10.
//Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const numAle = () => {
 Math.floor(Math.random() * 101);
};

/*04 - Crie três funções:
Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
Elabore a terceira função: essa função deve receber duas strings e concatená-las.
A. Faça o mock das funções para com os seguintes casos:
  Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
  Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
  Implemente, na terceira função: ela deve receber três strings e concatená-las.
B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
C. Após criar os testes, restaure a implementação da primeira função:
  Faça o teste necessário para garantir que a implementação da função foi restaurado. */

const caixaAlta = (param) => {
  return param.toUpperCase();
}

const primeiraLetra = (param) => {
  return param.charAt(0);
}

const concate = (param1, param2) => {
  return `${param1}${param2}`;
}

module.exports = { numAle, caixaAlta, primeiraLetra, concate };
