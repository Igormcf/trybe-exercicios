const express = require('express');
const app = express();
const { readSimpsons, writeSimpsons } =  require('./functions-fs');
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

app.post('/greetins', (req, res) => {
  const { name, age } = req.body;

  if (Number(age) <= 17) return res.status(401).json({ message: 'Unauthorized' });

  return res.status(200).json({ message: `Hello, ${ name }` });
});

// ex4: Crie uma rota PUT /users/:name/:age. 🚀
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

app.put('/users/:name/:age', (req,res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${ name } e você tem ${ age } anos de idade` });
});

// ex5: Crie uma API de dados das personagens de Simpsons 🚀
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.
// Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await readSimpsons();
    
    return res.status(200).json(simpsons);
  } catch (error) {

    return res.status(500).end();
  }
});

// ex7: Crie um endpoint GET /simpsons/:id 🚀
//O endpoint deve retornar o personagem com o id informado na URL da requisição.
//Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const simpsons = await readSimpsons();

    const findSimpson = simpsons.find((item) => item.id === id);

    if (!findSimpson) {
      return res.status(404).json({ message: 'Personagem não encontrado!' });
    }

    return res.status(202).json(findSimpson);
  } catch (error) {

    return res.status(500).end();
  }
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});