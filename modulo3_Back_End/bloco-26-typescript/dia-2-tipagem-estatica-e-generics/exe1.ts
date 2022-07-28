import Colors from "./utils/Colors";
import Directions from "./utils/Directions";
import Doors from "./utils/Doors";

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log('Carro ligado');
  }

  turnOff(): void {
    console.log('Carro desligado');
  }

  turn(direction: Directions): void {
    console.log(`Virando o carro para a ${direction}`);
  }

  speedUp():void {
    console.log('Acelerando o carro');
  }

  speedDown():void {
    console.log('Desacelerando o carro');
  }

  stop():void {
    console.log('Parando o carro');
  }

  honk():void {
    console.log('Buzinando');
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a porta ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a porta ${door}`);
  }
}

export default Car;