let ask = 'TOWER';

switch (ask.toLowerCase()) {
    case 'pawn':
        console.log('Frontais com 2 casas no início e apenas 1 até o fim do jogo');
        break;
    case 'tower':
        console.log('Sem restrições para a esquerda e direita');
        break;
    case 'horse':
        console.log('Forma um "L" andando 3 casas');
        break;
    case 'bishop':
        console.log('Diagonal sem restição');
        break;
    case 'queen':
        console.log('Horizontais, verticais e diagonais sem restrições');
        break;
    case 'king':
        console.log('Uma casa para qualque direção');
        break;
    default:
        console.log('Erro: peça inválida');
        break;
};

/* Outra forma que consegui chegar:

let ask = 'TOWER';
let result = ask.toLowerCase() || ask.toUpperCase();

switch (result) {
    case 'pawn':
        console.log('Frontais com 2 casas no início e apenas 1 até o fim do jogo');
        break;
    case 'tower':
        console.log('Sem restrições para esquerda e direita');
        break;
    case 'horse':
        console.log('Forma um "L" andando 3 casas');
        break;
    case 'bishop':
        console.log('Diagonal sem restição');
        break;
    case 'queen':
        console.log('Horizontais, verticais e diagonais sem restrições');
        break;
    case 'king':
        console.log('Uma casa para qualque direção');
        break;
    default:
        console.log('Erro: peça inválida');
        break;
};
 */