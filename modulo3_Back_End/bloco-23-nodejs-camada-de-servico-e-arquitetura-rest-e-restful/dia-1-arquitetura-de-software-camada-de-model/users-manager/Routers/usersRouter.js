const express = require('express');

const router = express.Router();

const createUser = require('../middlewares/createUser');

const findAll = require('../middlewares/getAllUsers');

const findId = require('../middlewares/getId');

router.post('/', createUser);

router.get('/', findAll);

router.get('/:id', findId);

module.exports = router;