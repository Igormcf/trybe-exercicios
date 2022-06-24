const connection = require('./connection');

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  return {
    id,
    firstName,
    lastName,
    email,
  };
};

// Função responsável por criar o usuário no banco de dados
function createUser({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?);';
  // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
  return connection.execute(query, [firstName, lastName, email, password])
  // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

module.exports = {
  formatUser,
  createUser,
};