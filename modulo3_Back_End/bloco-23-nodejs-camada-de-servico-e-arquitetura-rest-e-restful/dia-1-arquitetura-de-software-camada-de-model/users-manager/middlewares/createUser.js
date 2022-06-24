const joi = require('joi');
const rescue = require('express-rescue');
const userModel = require('../models/User');


// Primeiro definimos qual o schema da nossa requisição
const userSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
});

// Depois, exportamos um array de middlewares. O primeiro valida a requisição, o segundo chama o model
module.exports = [
  (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) return next(error);

    next();
  },
  rescue(async (req, res, next) => {
    // Extraímos os dados da requisição
    const { firstName, lastName, email, password } = req.body;

    // Pedimos pro model criar o usuário
    const newUser= await userModel.createUser({ firstName, lastName, email, password });

    // Com o usuário criado, devolvemos o status 201 Created, a mensagem informando sucesso na operação
    res.status(201).json(newUser);
  }),
];