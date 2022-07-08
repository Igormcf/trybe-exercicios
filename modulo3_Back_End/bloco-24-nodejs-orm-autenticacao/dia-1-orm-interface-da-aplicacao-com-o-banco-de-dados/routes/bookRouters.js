const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book.controller');

router.get('/', bookController.getAll);

router.get('/:id', bookController.getId);

router.post('/', bookController.create);

module.exports = router;