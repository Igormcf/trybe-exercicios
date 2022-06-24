const express = require('express');

const router = express.Router();

const createUser = require('../middlewares/createUser');

const findAll = require('../middlewares/getAllUsers');

const findId = require('../middlewares/getId');

const updateUser = require('../middlewares/updateUser');

router.post('/', createUser);

router.get('/', findAll);

router.get('/:id', findId);

router.put('/:id', updateUser);

module.exports = router;