//Imprimir triângulo de asteríscos no lado esquedo:

let n = 5;
let item = '*';
let linha = '';

for (let index = 0; index <= n; index += 1){
    console.log(linha);
    linha += item;
}