//Imprimir triângulo de asteríscos no lado direito:

let n = 5;
let item = '*';
let linha = '';
let base = n;

for (let index = 0; index <= n; index += 1){

    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1){
        if (colunaIndex < base){
            linha += ' ';
        } else {
            linha += item;
        }
    } 
    console.log(linha);
    linha = '';
    base -= 1;
}

