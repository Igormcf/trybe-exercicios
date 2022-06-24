const rescue = require('express-rescue');
const useModel = require('../models/User');

module.exports = [
  (req, res, next) => {
    const { error } = useModel.isValid(req.body);

    if (error) return next(error);

    next();
  },
  rescue(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const update = await useModel.updateUser(id, { firstName, lastName, email, password });

    if (!update) {
      return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
    }

    return res.status(200).json(update);
  }),
];