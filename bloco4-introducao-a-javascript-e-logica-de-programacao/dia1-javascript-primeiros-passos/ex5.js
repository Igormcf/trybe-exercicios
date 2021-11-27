const angulo2 = 45;
const angulo3 = 50;

const soma = angulo1 + angulo2 +angulo3;

if (soma === 180) {
    console.log('true');  
} else if (soma >= 0 || soma > 180) {
    console.log('false'); 
} else {
    console.log('Erro: valor inválido')
}; 



/* OUTRA FORMA DE RESOLVER 


let angulo1 = 45;
let angulo2 = 50;
let angulo3 = 85;

let soma = angulo1 + angulo2 + angulo3;

let todosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(todosPositivos){
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: valor inválido');
};
 */