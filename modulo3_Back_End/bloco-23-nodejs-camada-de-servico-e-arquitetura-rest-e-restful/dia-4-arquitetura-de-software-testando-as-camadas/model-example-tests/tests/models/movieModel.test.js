const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Procura um filme pelo id', () => {
  before(() => {
    const resultExecute = [[]];

    sinon.stub(connection, 'execute').resolves(resultExecute);
  });

  after(() => {
    connection.execute.restore();
  });

  describe('não encontra o id informado', () => {

    it ('retorna null', async () => {
      const response = await MoviesModel.getById();

      expect(response).to.be.equal(null);
    });
  });

  describe('quando encontra o id informado', () => {
    before(() => {
      const resultExecute = {
          id: 1, 
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };

      sinon.stub(MoviesModel, 'getById').resolves(resultExecute);
    });

    after(() => {
        MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById();

      expect(response).to.be.a('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesModel.getById();

      expect(response).to.be.not.empty;
    });

    it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });

  });
});