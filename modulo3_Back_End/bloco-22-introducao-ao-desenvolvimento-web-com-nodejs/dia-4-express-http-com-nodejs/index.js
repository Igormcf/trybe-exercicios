const express = require('express');
const app = express();
app.use(express.json());

// ex1: Crie uma rota GET /ping que deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

// ex2: Crie uma rota POST /hello
//Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello ${ name }!` });
});

// ex3: Crie uma rota POST /greetings 🚀
//Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
//Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
//Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});