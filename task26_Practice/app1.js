//1. Разработать функцию для генерации случайного целого числа от min до max.
console.log("1. Разработать функцию для генерации случайного целого числа от min до max.")

function createRandomWholeNumber(a,b){
  let min = a, max = b;

randomWholeNumber = Math.floor(Math.random() * (max - min + 1) + min);
return (randomWholeNumber);
}


let x = createRandomWholeNumber(10,20);
console.log(x);
