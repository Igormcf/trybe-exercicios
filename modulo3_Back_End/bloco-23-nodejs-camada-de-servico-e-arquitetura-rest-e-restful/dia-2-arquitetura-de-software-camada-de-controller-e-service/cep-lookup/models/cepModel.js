const connection = require('./connection');

// Regex que identifica um CEP já formatado
const CEP_REGEX = /\d{5}-\d{3}/;

const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;
  console.log(cep);
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

// Formata os campos para exibição
const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const findAdressByCep = async (cepToSearch) => {
  // Removemos todos os traços, pois armazenamos o CEP
  // puro no banco
  const cepSemTraco = cepToSearch.replace('-', '');
  console.log(cepSemTraco, 'semtraco');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;';

  const [result] = await connection.execute(query, [cepSemTraco]);

  console.log(result, 'zero');
  if (!result) return null;

  return getNewCep(result);
};

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');

  const query = 'INSERT INTO  ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?);';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  // Depois de inserir, retornamos os dados, como sinal de que foram guardados no banco
  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  findAdressByCep,
  create,
}