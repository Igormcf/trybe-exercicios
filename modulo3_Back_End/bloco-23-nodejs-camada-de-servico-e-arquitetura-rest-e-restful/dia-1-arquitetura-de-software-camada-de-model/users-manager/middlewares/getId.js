const rescue = require('express-rescue');
const userModel = require('../models/User');

module.exports = rescue(async (req, res) => {
 const { id } = req.params;

  const findUserId = await userModel.findById(id);

  const erroFind = {
    "error": true,
    "message": "Usuário não encontrado"
  };

  if (!findUserId) {
    return res.status(404).json(erroFind);
  }

  return res.status(200).json(findUserId);
});