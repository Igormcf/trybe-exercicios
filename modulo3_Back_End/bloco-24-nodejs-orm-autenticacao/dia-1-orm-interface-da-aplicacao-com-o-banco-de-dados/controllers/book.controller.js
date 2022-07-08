const bookService = require('../services/book.service');

const getAll = async (req, res) => {
  const response = await bookService.getAll();

  return res.status(200).json(response);
};

const getId = async (req, res) => {
  const { id } = req.params;

  const response = await bookService.getId(id);

  return res.status(200).json(response);
};

const create = async (req, res) => {
  const response = await bookService.create(req.body);

  return res.status(201).json(response);
};

module.exports = {
  getAll,
  getId,
  create,
}