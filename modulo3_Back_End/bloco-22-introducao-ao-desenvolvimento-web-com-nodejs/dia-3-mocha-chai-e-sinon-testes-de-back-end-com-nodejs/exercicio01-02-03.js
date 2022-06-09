const verificaNum = (num) => {
  if (num > 0) {
    return 'positivo';
  } else if (num < 0){
    return 'negativo';
  } else if (typeof num !== 'number') {
    return 'o parâmetro deve ser um número';
  } else {
    return 'neutro';
  }
}


module.exports = verificaNum;