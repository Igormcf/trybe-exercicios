const { expect } = require('chai');
const verificaNum  = require('../exercicio01-02');

describe('Executa a função verificaNum', () => {

  describe('Quando o número for maior que 0', () => {

    describe('A resposta', () => {

      it ('É uma string', () => {
        const result = verificaNum(1);
        expect(result).to.be.a('string');
      });

      it ('É positivo', () => {
        const result = verificaNum(1);
        expect(result).to.be.equals('positivo');
      })
    })
  });

  describe('Quando o número for menor que 0', () => {

    describe('A resposta', () => {

      it('Verifica se é uma string', () => {
        const result = verificaNum(-1);
        expect(result).to.be.a('string');
      });

      it('Verifica se é negativo', () => {
        const result = verificaNum(-1);
        expect(result).to.be.equals('negativo');
      });
    });
  });

  describe('Quando o número for igual a 0', () => {

    describe('A resposta', () => {

      it('Verifica se é uma string', () => {
        const result = verificaNum(0);
        expect(result).to.be.a('string');
      });

      it('Verifica se é neutro', () => {
        const result = verificaNum(0);
        expect(result).to.be.equals('neutro');
      });
    });
  });
})