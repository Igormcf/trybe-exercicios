const { Book } = require('../models');

const getAll = async () => {
  const response = await Book.findAll();

  return response;
};

const getId = async (id) => {
  const response = await Book.findByPk(id);

  return response;
};

module.exports = {
  getAll,
  getId,
}