"use strict";
const unidadesMassa = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function conversorMassa(value, fromUnit, toUnit) {
    const doIndex = unidadesMassa.indexOf(fromUnit);
    const paraIndex = unidadesMassa.indexOf(toUnit);
    const expoente = (paraIndex - doIndex);
    return value * Math.pow(10, expoente);
}
