const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.use('/product', productController);

module.exports = router;