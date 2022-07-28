import IPizza from "./exe3";
import { PizzaComum, PizzaDoce, PizzaVegetariana } from './utils/InterfacesExtendsPizzas';

const calabresa: IPizza = {
  flavor: 'Calabresa',
  slices: 8,
}

console.log(calabresa);

const marguerita: IPizza = {
  flavor: 'Marguerita',
  slices: 6,
}

console.log(marguerita);

const nutela: IPizza = {
  flavor: 'Nutela',
  slices: 4,
}

console.log(nutela);

const frango: PizzaComum = {
  flavor: "Frango",
  slices: 8,
}

console.log(frango);

const palmito: PizzaVegetariana = {
  flavor: "Palmito",
  slices: 8,
}

console.log(palmito);

const goiabadaEQueijo: PizzaDoce = {
  flavor: "Goiabada com Queijo",
  slices: 4,
}

console.log(goiabadaEQueijo);