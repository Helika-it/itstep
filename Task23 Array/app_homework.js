/*
Операции с массивами
важность: 5
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
*/
console.log("Операции с массивами:");
//1
console.log("* Создайте массив styles с элементами «Джаз» и «Блюз».");

let styles = ["Джаз", "Блюз"];
console.log(styles);

//2
console.log("* Добавьте «Рок-н-ролл» в конец.");

styles.push("Рок-н-ролл");
console.log(styles);

//3
console.log("* Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.");

let n = Math.floor((styles.length-1)/2);
styles[n] = "Классика";
console.log(styles);

//4
console.log("* Удалите первый элемент массива и покажите его.");

console.log(styles.shift() );
console.log(styles);

//5
console.log("* Вставьте «Рэп» и «Регги» в начало массива.");

styles.unshift("Рэп", "Регги");
console.log(styles);


// ==== "Ряд Тейлора для экспоненты"
/*
for(let x = 112, E = 0.0001, i = 1, k = 2, speed = 0, sum = x; sum = sum + ((x ** i) / k); ((x ** i) / k) < E; i++, k = k * i);

console.log((x ** i) / k);
console.log(sum);*/

console.log("** Ряд Тейлора для экспоненты")
let x = 112,
 E = 0.0001, 
 i = 2, 
 k = 2,
 speed = x, 
 sum = 0;

 while (speed < E) {
  sum = sum + speed;
  i++;
  k = k * i;
  speed = (x ** i) / k;
  console.log(speed);

 }
 console.log(speed);
console.log(sum);