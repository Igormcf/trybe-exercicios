/* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

const myFizzBuzz = require('./myFizzBuzz');

describe('Verifica a funcao myFizzBuzz', () => {
  it('Espera que exista a funcao myFizzBuzz', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });
  it('Verifica se o parametro recebido faz retornar o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('7')).toBe(false);
  });
});