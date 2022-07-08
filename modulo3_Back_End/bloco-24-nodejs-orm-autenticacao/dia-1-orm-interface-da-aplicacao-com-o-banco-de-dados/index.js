require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const routes = require('./routes/index'); 

const error = require('./middlewares/error');

app.use('/books', routes.bookRouters);

app.use(error);

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}!`);
});