const rescue = require('express-rescue');
const userModel = require('../models/User');

// Pedimos para o model buscar todos os usuários
module.exports = rescue(async (_req, res) => {
  const allUsers = await userModel.findAll();

  res.status(200).json(allUsers);
});