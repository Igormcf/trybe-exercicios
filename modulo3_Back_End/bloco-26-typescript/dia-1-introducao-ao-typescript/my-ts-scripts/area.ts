const unidadesArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function conversorArea(value: number, fromUnit: string, toUnit: string) {
  const doIndex = unidadesArea.indexOf(fromUnit);
  const paraIndex = unidadesArea.indexOf(toUnit);
  const expoente = (paraIndex - doIndex);

  return value * Math.pow(100, expoente);
}