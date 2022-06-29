const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)',
      [title, directedBy, releaseYear],
    );

  return {
    id: result.insertId,
  };
};

const getById = async (id) => {
  const [result] = await connection.execute('SELECT * FROM movies WHERE id = ?;', [id]);

  if (result.length === 0) return null;

  const { title, directed_by: directedBy, release_year: releaseYear } = movie[0];

  return {
    id,
    title,
    directedBy,
    releaseYear,
  };
};

function formatMovies({ id, title, directed_by: directedBy, release_year: releaseYear }) {
  return {
    id,
    title,
    directedBy,
    releaseYear
  };
};

const getAll = async () => {
  try {
    const [rows] = await connection.execute('SELECT * FROM movies');

    return rows.map(formatMovies);
  } catch (err) {
    return process.exit(1);
  }
};

module.exports = {
  create,
  getById,
  getAll,
};