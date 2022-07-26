"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function conversor(value, fromUnit, toUnit) {
    const doIndex = unidades.indexOf(fromUnit);
    const paraIndex = unidades.indexOf(toUnit);
    const expoente = (paraIndex - doIndex);
    return value * Math.pow(10, expoente);
}
//A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor para conversão: \n');
    const unidadeBase = readline_sync_1.default.keyInSelect(unidades, 'Escolha um número para a unidade base:');
    const unidadeParaConversao = readline_sync_1.default.keyInSelect(unidades, 'Escolha um número para a conversão:');
    const unidBase = unidades[unidadeBase - 1];
    const unidFinal = unidades[unidadeParaConversao - 1];
    const result = conversor(value, unidBase, unidFinal);
    const message = `${value}${unidBase} é igual a ${result}${unidFinal}`;
    return message;
}
;
exec();
