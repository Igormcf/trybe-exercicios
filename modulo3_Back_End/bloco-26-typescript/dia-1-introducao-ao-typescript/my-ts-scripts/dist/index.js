"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const Estacoes_1 = __importDefault(require("./Estacoes"));
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
const monthsNames = Object.values(Months_1.default);
// O método .keyInSelect mostra uma interface de escolha para a pessoa usuária
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês do ano');
const estacoesSul = {
    [Estacoes_1.default.OUTONO]: [Months_1.default.MARÇO, Months_1.default.ABRIL, Months_1.default.MAIO, Months_1.default.JUNHO],
    [Estacoes_1.default.INVERNO]: [Months_1.default.JUNHO, Months_1.default.JULHO, Months_1.default.AGOSTO, Months_1.default.SETEMBRO],
    [Estacoes_1.default.PRIMAVERA]: [Months_1.default.SETEMBRO, Months_1.default.OUTUBRO, Months_1.default.NOVEMBRO, Months_1.default.DEZEMBRO],
    [Estacoes_1.default.VERÃO]: [Months_1.default.DEZEMBRO, Months_1.default.JANEIRO, Months_1.default.FEVEREIRO, Months_1.default.MARÇO],
};
const estacaoNorte = {
    [Estacoes_1.default.PRIMAVERA]: estacoesSul[Estacoes_1.default.OUTONO],
    [Estacoes_1.default.VERÃO]: estacoesSul[Estacoes_1.default.INVERNO],
    [Estacoes_1.default.OUTONO]: estacoesSul[Estacoes_1.default.PRIMAVERA],
    [Estacoes_1.default.INVERNO]: estacoesSul[Estacoes_1.default.VERÃO],
};
const hemisferios = {
    'Norte': estacaoNorte,
    'Sul': estacoesSul,
};
const choiceHemisferio = readline_sync_1.default.keyInSelect(Object.keys(hemisferios), 'Escolha um hemisfério');
const month = Object.values(Months_1.default)[choiceMonth];
const hemisferio = Object.keys(hemisferios)[choiceHemisferio];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisferio}`);
console.log(`Estações:`);
const choiseHesmisphereSeasons = Object.values(hemisferios)[choiceHemisferio];
Object.entries(choiseHesmisphereSeasons).map((item) => {
    const seasons = item[0];
    const months = item[1];
    if (months.includes(month))
        console.log(seasons);
});
