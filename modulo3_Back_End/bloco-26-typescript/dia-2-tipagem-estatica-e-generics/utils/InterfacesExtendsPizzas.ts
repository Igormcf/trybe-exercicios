import IPizza from "../exe3";
import { Comum, Doce, Vegetariana } from './PizzaTypesFlavor';

interface PizzaComum extends IPizza {
  flavor: Comum
};

interface PizzaDoce extends IPizza {
  flavor: Doce,
  slices: 4,
};

interface PizzaVegetariana extends IPizza {
  flavor: Vegetariana,
};

export {
  PizzaComum,
  PizzaDoce,
  PizzaVegetariana,
};