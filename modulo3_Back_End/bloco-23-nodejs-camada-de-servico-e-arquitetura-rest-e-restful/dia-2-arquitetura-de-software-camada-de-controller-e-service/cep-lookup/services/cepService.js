const cepModel = require('../models/cepModel');

const CEP_REGEX = /^\d{5}-?\d{3}$/;

const findAdressByCep = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna um erro
  console.log(searchedCep, 'xablau');
  console.log(!CEP_REGEX.test(searchedCep))
  if (!CEP_REGEX.test(searchedCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }
  // Buscamos o CEP através do Model
  const cep = await cepModel.findAdressByCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      },
    };
  }

  return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrar
  const existsCep = await cepModel.findAdressByCep(cep);

  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existsCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente'
      },
    };
  }

  // Caso o CEP ainda não exista, chamamos o Model para criá-lo no banco, e devolvemos esse resultado
  return cepModel.create({ cep, logradouro, bairro, localidade,uf });
};

module.exports = {
  findAdressByCep,
  create,
};