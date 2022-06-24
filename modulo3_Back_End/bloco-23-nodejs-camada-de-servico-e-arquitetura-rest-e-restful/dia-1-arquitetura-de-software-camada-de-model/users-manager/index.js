const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

const usersRouter = require('./Routers/usersRouter');

const error = require('./middlewares/error');

app.use('/users', usersRouter);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.use(error);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta '${PORT}'`);
});