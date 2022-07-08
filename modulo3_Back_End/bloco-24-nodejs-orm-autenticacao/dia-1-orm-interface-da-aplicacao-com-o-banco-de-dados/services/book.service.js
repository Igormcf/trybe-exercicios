const { Book } = require('../models');

const getAll = async () => {
  const response = await Book.findAll();

  return response;
};

module.exports = {
  getAll,
}