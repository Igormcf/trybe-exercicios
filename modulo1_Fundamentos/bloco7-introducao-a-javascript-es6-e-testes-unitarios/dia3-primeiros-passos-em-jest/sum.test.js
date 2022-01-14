const sum = require('./sum');

describe('Verifica a funcao sum', () => {
  it('Deve retornar a soma dos parametros', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it("Deve retornar menssagem de erro se ambos os paramentros nao forem numeros", () => {
    expect(() => {sum(4, '5')}).toThrowError();
    expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
  });
})