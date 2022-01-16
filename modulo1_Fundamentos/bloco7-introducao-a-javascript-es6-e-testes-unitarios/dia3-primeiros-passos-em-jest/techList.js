function techList(technology, name) {
  technology.sort();
  let resultado = [];
  for (let index in technology) {
    let objeto = {
      tech: technology[index],
      name,
    };
    resultado.push(objeto);
  };
  if(technology.length === 0){
    return"Vazio!";
  } else {
    return resultado;
  };
};

module.exports = techList;