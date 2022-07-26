import { exit } from 'process';
import readline from 'readline-sync';
import Months from './Months';
import Estacoes from './Estacoes';

/* Exercicio 01
type Character = {
  nickname: string;
  class: string;
  stats: { agi: number, str: number, int: number, hp: number, mp: number };
  createdAt: Date;
};

const characters: Character[] = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: Character, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter); */

// Exercicio 04
const monthsNames = Object.values(Months);

// O método .keyInSelect mostra uma interface de escolha para a pessoa usuária
const choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês do ano');

const estacoesSul = {
  [Estacoes.OUTONO]: [Months.MARÇO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Estacoes.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Estacoes.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Estacoes.VERÃO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARÇO],
};

const estacaoNorte = {
  [Estacoes.PRIMAVERA]: estacoesSul[Estacoes.OUTONO],
  [Estacoes.VERÃO]: estacoesSul[Estacoes.INVERNO],
  [Estacoes.OUTONO]: estacoesSul[Estacoes.PRIMAVERA],
  [Estacoes.INVERNO]: estacoesSul[Estacoes.VERÃO],
};

const hemisferios = {
  'Norte': estacaoNorte,
  'Sul': estacoesSul,
}

const choiceHemisferio = readline.keyInSelect(Object.keys(hemisferios), 'Escolha um hemisfério');

const month = Object.values(Months)[choiceMonth];

const hemisferio = Object.keys(hemisferios)[choiceHemisferio];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisferio}`);
console.log(`Estações:`);

const choiseHesmisphereSeasons = Object.values(hemisferios)[choiceHemisferio];

Object.entries(choiseHesmisphereSeasons).map((item) => {
  const seasons = item[0];
  const months = item[1];

  if (months.includes(month)) console.log(seasons);
});