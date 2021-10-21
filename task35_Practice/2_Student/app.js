import {Student} from "./student.js";
import {Aspirant} from "./aspirant.js";


let student = new Student("Антон", "Фёдоров", "120Б", 5);
console.log(student);

let aspirant = new Aspirant("Лев", "Иванов", "1Ф", 5, "Наука");
console.log(aspirant);

let Students = [];

Students.push(student);
Students.push(aspirant);

console.log(Students);

Students.forEach(function(item){
  console.log(item.getScholarship()) 
})

