import {Animal} from "./animal";
import {Dog} from "./dog";
import {Cat} from "./cat";
import {Horse} from "./horse";
import {Vet} from "./vet";

let dog = new Dog("корм", "дома", "Cобака");

dog.sleep();
dog.eat();
dog.makeNoise();

let cat = new Cat("мясо", "на столе", "Кот");

cat.sleep();
cat.eat();
cat.makeNoise();

let horse = new Horse("овёс", "в загоне", "Лошадь");

horse.sleep();
horse.eat();
horse.makeNoise();

let vet = new Vet();

vet.treatAnimal(dog);
vet.treatAnimal(cat);
vet.treatAnimal(horse);

let animals = [];

animals.push(dog.view);
animals.push(cat.view);
animals.push(horse.view);

animals.forEach(function(item){
  console.log(item);
});