const handleError = require('./handleError');
const validaProduct = require('./validaProduct');
const validaInfos = require('./validaInfos');
const validaSaleDate = require('./validaSaleDate');
const validaWarranty = require('./validaWarrantyPeriod');
const validaEmail = require('./validaEmail');
const validaPassword = require('./validaPassword');
const validaFirstName = require('./validaFirstName');
const validaPhone = require ('./validaPhone');


module.exports = {
  handleError,
  validaProduct,
  validaInfos,
  validaSaleDate,
  validaWarranty,
  validaEmail,
  validaPassword,
  validaFirstName,
  validaPhone
};