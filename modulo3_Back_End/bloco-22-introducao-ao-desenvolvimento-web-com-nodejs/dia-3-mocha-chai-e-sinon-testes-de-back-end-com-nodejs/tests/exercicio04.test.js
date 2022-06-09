const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const createDocument = require('../exercicio04-05');

const retorno = 'ok';

describe('Executa a função createDocument', () => {

  before(() => {
    sinon.stub(fs, 'writeFileSync').returns(retorno);
  });
  after(() => {
    fs.writeFileSync.restore();
  });

  describe('A resposta', () => {

    it('Verifica se é uma string', () => {

      const writeAndCreate = createDocument('arquivo.txt', 'igor');

      expect(writeAndCreate).to.be.a('string');
    });

    it('Verifica se retorna "ok"', () => {

      const writeAndCreate = createDocument('arquivo.txt', 'igor');

      expect(writeAndCreate).to.be.equals(retorno);
    });
  });
});

// ./tests/escrevaArquivo.test.js
/* const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const createDocument = require('../exercicio04-05');

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = createDocument('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = createDocument('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
}); */