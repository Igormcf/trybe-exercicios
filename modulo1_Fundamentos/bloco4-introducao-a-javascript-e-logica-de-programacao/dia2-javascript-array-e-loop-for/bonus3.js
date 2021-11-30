/* Criação de nova array a partir da numbers, onde cada valor adicionado é o resultado da multiplicação do valor pelo seu seguinte */


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novaArray = [];

for (let index = 0; index < numbers.length; index += 1){
    if (index + 1 < numbers.length ){
        novaArray.push(numbers[index] * numbers[index + 1]);
    } else {
        novaArray.push(numbers[index] * 2)
    }
}
console.log(novaArray);
