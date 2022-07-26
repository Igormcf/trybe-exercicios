const unidadesMassa = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function conversorMassa(value: number, fromUnit: string, toUnit: string): number {
  const doIndex = unidadesMassa.indexOf(fromUnit);
  const paraIndex = unidadesMassa.indexOf(toUnit);
  const expoente = (paraIndex - doIndex);

  return value * Math.pow(10, expoente);
}