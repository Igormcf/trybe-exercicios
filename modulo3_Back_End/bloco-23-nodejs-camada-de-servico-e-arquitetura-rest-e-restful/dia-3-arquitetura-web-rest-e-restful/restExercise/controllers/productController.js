const express = require('express');

const productModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await productModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await productModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado!' })
  }

  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(400).json({ message: 'Informações de produto inválidas!' });
  }

  const newProduct = await productModel.add(name, brand);

  return res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const product = await productModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado!' });
  }

  await productModel.exclude(req.params.id);

  res.status(204).json();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(400).json({ message: 'Informações de produto inválidas' });
  }

  const product = await productModel.getById(req.params.id);

  if (product === null) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  await productModel.update(req.params.id, name, brand);

  return res.status(200).json({ name, brand });
});

module.exports = router;