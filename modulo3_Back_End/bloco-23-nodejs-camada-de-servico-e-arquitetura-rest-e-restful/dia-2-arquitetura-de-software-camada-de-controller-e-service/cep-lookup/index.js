require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const routes = require('./routes');

const middlewareError = require('./middlewares/error');

app.use(routes);

app.all('*', (res, req) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.use(middlewareError);

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}!`);
});