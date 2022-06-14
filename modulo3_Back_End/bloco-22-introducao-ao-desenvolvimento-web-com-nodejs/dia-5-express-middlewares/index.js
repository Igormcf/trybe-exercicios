const express = require('express');
const app = express();
const signupRouter = require('./Routers/signupRouter');
const salesRouter = require('./Routers/salesRouter');
const handleError = require('./Middlewares/handleError');

app.use(express.json());


app.use('/signup', signupRouter);

app.use('/sales', salesRouter);


app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.use(handleError);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});