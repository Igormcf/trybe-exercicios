const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book.controller');

const rescue = require('express-rescue');

router.get('/', rescue(bookController.getAll));

router.get('/:id', rescue(bookController.getId));

router.post('/', rescue(bookController.create));

router.put('/:id', rescue(bookController.update));

router.delete('/:id', rescue(bookController.delet));

module.exports = router;