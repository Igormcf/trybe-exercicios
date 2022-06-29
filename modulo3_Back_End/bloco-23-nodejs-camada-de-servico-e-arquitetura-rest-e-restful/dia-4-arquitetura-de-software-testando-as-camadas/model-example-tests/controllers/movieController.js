const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
   }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
  
    const movieData = await MoviesService.getById(id);
  
    if (!movieData) {
      return res.status(404).send('Not Found');
    }
  
    return res.status(200).json(movieData);
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
};

const getAll = async (req, res) => {
  try{
    const rows = await MoviesService.getAll();
    return res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = {
  create,
  getById,
  getAll,
};