const porcent = 45;

if (porcent < 0 || porcent > 100) {
    console.log('Erro: porcentagem inválida. Encerrando o programa...');
} else if (porcent >= 90) {
    console.log('A');
} else if (porcent >= 80) {
    console.log('B');
} else if (porcent >= 70) {
    console.log('C');
} else if (porcent >= 60) {
    console.log('D');
} else if (porcent >= 50) {
    console.log('E');
} else {
    console.log('F');
}