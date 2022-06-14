const express = require('express');
const router = express.Router();
const crypto = require('crypto');
/* const generateToken = require('../Functions/generateToken'); */
const { validaEmail, validaPassword, validaFirstName, validaPhone } = require('../Middlewares/index');
const rescue = require('express-rescue');

router.post('/',
  validaEmail,
  validaPassword,
  validaFirstName,
  validaPhone,
  rescue((_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token: token });
}));

module.exports = router;