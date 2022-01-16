/* Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. */

const { encode, decode } = require('./encodedecode');

describe('verifica as funcoes encode e decode', () => {
  it('Espera que a funcao encode seja definida', () => {
    expect(encode).toBeDefined();
  });
  it('Espera que a funcao encode exista', () => {
    expect(typeof encode).toBe('function');
  });
  it('Espera que a seja trocado por 1', () => {
    expect(encode('gata')).toEqual('g1t1');
  });
  it('Espera que e seja trocado por 2', () => {
    expect(encode('esse')).toEqual('2ss2');
  });
  it('Espera que i seja trocado por 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('Espera que o seja trocado por 4', () => {
    expect(encode('omo')).toEqual('4m4');
  });
  it('Espera que u seja trocado por 5', () => {
    expect(encode('chuchu')).toEqual('ch5ch5');
  });
  it('Verifica se retorna a string com o mesmo número de caracteres', () => {
    expect((encode('igor')).length).toEqual(4);
  });
 
  it('Espera que a funcao decode seja definida', () => {
    expect(decode).toBeDefined();
  });
  it('Espera que a funcao decode exista', () => {
    expect(typeof decode).toBe('function');
  });
  it('Espera que 1 seja trocado por a', () => {
    expect(decode('g1t1')).toEqual('gata');
  });
  it('Espera que 2 seja trocado por e', () => {
    expect(decode('2ss2')).toEqual('esse');
  });
  it('Espera que 3 seja trocado por i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('Espera que 4 seja trocado por o', () => {
    expect(decode('4m4')).toEqual('omo');
  });
  it('Espera que 5 seja trocado por u', () => {
    expect(decode('ch5ch5')).toEqual('chuchu');
  });
  it('Verifica se retorna a string com o mesmo número de caracteres', () => {
    expect((decode('igor')).length).toEqual(4);
  })
});
