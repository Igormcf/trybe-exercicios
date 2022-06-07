const PESO_EX = 72;
const ALTURA_EX_EM_CM = 173;

function calculadoraImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaMetrosEQuadrado = (altura / 100) ** 2;

  const resultado = (peso / alturaMetrosEQuadrado);

  return resultado;
}

function imc() {
  const resultImc = calculadoraImc(PESO_EX, ALTURA_EX_EM_CM);

  console.log(`IMC: ${resultImc.toFixed(2)}`)
}

module.exports = { imc };