const express = require('express');
const app = express();
app.use(express.json());

// ex1: Crie uma rota GET /ping que deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});