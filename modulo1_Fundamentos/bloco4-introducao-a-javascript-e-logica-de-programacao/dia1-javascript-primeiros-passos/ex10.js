const custo = 177.50;
const venda = 237.80;
const custoTotal = custo + (0.20 * custo);



if ((custo <= 0) || (venda <= 0)) {
    console.log('Erro: valor de entrada menor que zero.');
} else {
    const lucro = (venda - custoTotal) * 1000;
    console.log(lucro);
}
