//Fazer uma pirâmide com n asteriscos de base:

let n =5;
let item = '*';
let linha = '';

let centro = (n+1) / 2;
let ladoEsquerdo = centro;
let ladoDireito = centro;

for (let linhaIndex = 0; linhaIndex <= centro; linhaIndex += 1){
    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1){
        if(colunaIndex > ladoEsquerdo && colunaIndex < ladoDireito){
            linha += '*';
        } else {
            linha += ' ';
        }
    }
    console.log(linha);
    linha = '';
    ladoDireito += 1;
    ladoEsquerdo -= 1;
}
