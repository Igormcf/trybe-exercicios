import readline from 'readline-sync';

const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function conversor(value: number, fromUnit: string, toUnit: string): number {
  const doIndex = unidades.indexOf(fromUnit);
  const paraIndex = unidades.indexOf(toUnit);
  const expoente = (paraIndex - doIndex);

  return value * Math.pow(10, expoente);
}
//A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.

function exec() {
  const value = readline.questionFloat('Digite o valor para conversão: \n');

  const unidadeBase = readline.keyInSelect(unidades, 'Escolha um número para a unidade base:');

  const unidadeParaConversao = readline.keyInSelect(unidades, 'Escolha um número para a conversão:');

  const unidBase = unidades[unidadeBase - 1 ];
  const unidFinal = unidades[unidadeParaConversao - 1 ];

  const result  = conversor(value, unidBase, unidFinal);

  const message = `${value}${unidBase} é igual a ${result}${unidFinal}`

  return message
};

exec();
