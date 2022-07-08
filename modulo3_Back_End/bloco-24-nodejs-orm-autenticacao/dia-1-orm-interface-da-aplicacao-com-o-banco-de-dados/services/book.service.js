const { Book } = require('../models');

const getAll = async () => {
  const response = await Book.findAll();

  return response;
};

const getId = async (id) => {
  const response = await Book.findByPk(id);

  return response;
};

const create = async ({ title, author, pageQuantity }) => {
  return Book.create({ title, author, pageQuantity });
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updateBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  console.log(updateBook, updateBook > 0);

  return updateBook > 0;
}

module.exports = {
  getAll,
  getId,
  create,
  update,
}