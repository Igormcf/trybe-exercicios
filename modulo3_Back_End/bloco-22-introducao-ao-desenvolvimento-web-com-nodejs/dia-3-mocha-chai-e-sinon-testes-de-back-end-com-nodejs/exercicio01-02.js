const verificaNum = (num) => {
  if (num > 0) {
    return 'positivo';
  } else if (num < 0){
    return 'negativo';
  } else {
    return 'neutro';
  }
}

module.exports = verificaNum;