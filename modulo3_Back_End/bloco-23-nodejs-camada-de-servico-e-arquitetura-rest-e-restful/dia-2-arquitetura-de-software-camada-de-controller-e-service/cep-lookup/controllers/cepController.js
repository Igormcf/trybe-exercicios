const rescue = require('express-rescue');
const express = require('express');
const router = express.Router();
const cepService = require('../services/cepService');
const Joi = require('joi');

router.get('/:cep', rescue(async (req, res, next) => {
  const { cep } = req.params;

  const addres = await cepService.findAdressByCep(cep);

  if (addres.error) {
    return next(addres.error);
  }

  return res.status(200).json(addres);
}));

router.post('/', rescue(async (req, res, next) => {
  // Armazenamos essa parte do schema do Joi para reutilizá-la
  const requiredNotEmptyString = Joi.string().not().empty().required();

  // Validamos o corpo da request
   const { error } = Joi.object({
     cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
     logradouro: requiredNotEmptyString,
     bairro: requiredNotEmptyString,
     localidade: requiredNotEmptyString,
     uf: requiredNotEmptyString.length(2),
   }).validate(req.body);

  // Caso haja erro de validação, iniciamos o fluxo de erro
   if (error) return next(error);

  // Caso não haja erro de validação, pedimos para o service criar o cep
  const newCep = await cepService.create(req.body);

  if (newCep.error) {
    return next(newCep.error);
  }

  return res.status(200).json(newCep);
}));

module.exports = {
  router,
};