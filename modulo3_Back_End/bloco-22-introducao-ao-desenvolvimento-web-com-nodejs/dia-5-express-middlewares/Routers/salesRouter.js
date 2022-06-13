const express = require('express');
const router = express.Router();
const { validaProduct, validaInfos, validaSaleDate } = require('../Middlewares/index');
const validaWarranty = require('../Middlewares/validaWarrantyPeriod')

router.post('/',
  validaProduct,
  validaInfos,
  validaSaleDate,
  validaWarranty,
  (_req, res) => {
  res.status(201).json({ message: 'Sale created successfully!' });
});

module.exports = router