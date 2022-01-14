const myRemove = require('./myRemove');

describe('Verifica a funcao myRemove', () => {
  it('Verifica se retorna o array esperado', () => {
    const arrNum = [1, 2, 3, 4, 5];
    expect(myRemove(arrNum, 3)).toEqual([1, 2, 4, 5]);
    expect(myRemove(arrNum, 3)).not.toEqual([1, 2, 3, 4, 5]);
    expect(myRemove(arrNum, 6)).toEqual([1, 2, 3, 4, 5]);
  })
})