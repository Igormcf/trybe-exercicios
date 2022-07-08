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

const update = async (req, res) => {
  const { id } = req.params;

  const response = await bookService.update(id, req.body);

  return res.status(200).json({ message: `Book ${ id } atualizado com sucesso` });
};

module.exports = {
  getAll,
  getId,
  create,
  update
}