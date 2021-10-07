import {Animal} from "./animal.js";
import {Dog} from "./dog.js";
import {Cat} from "./cat.js";
import {Horse} from "./horse.js";
import {Vet} from "./vet.js";


let dog = new Dog("Снупик", "сухой корм", "дома");

dog.eat();
dog.sleep();
dog.makeNoise();

let cat = new Cat("Барс", "мясо", "на столе");

cat.eat();
cat.sleep();
cat.makeNoise();

let horse = new Horse("Геркулес", "зерно", "на улице");

horse.eat();
horse.sleep();
horse.makeNoise();

let vet = new Vet();

//vet.treatAnimal(dog);
//vet.treatAnimal(cat);
//vet.treatAnimal(horse);

let Animals = [];

Animals.push(dog);
Animals.push(cat);
Animals.push(horse);

console.log(Animals);

Animals.forEach(function(item){
  vet.treatAnimal(item);
})