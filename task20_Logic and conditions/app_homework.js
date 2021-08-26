// 2.10
// упражнение из учебника: Название JavaScript 'Какое "официальное" название JavaScript?'
let value = "JavaScript";
if (value == "ESMAScript")
{
  console.log ("Верно!");
}
else
{
  console.log ("Не знаете? ESMAScript!");
}

console.log("====================")
// Условный оператор "?" (Сколько вам лет?)

let accessAllowed,
age = 15;

if (age > 18) 
{
  accessAllowed = true;
} else
{
  accessAllowed = false;
}
console.log(accessAllowed);

// ==
age = 18;
accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);

// ==
age = 20;
accessAllowed = age > 18;
console.log(accessAllowed);

console.log("====================")
// Несколько операторов "?"

age = 2;
let message = ( age < 3) ? "Здравствуй, малыш!" :
  (age < 18) ? "Привет!" :
  (age < 100) ? "Здравствуйте!" :
  "Какой необычный возраст!";
console.log(message);

// == С использованием if..else
age = 102;
if (age < 3) {
  message = "Здравствуй, малыш!";
} else if (age < 18){
  message = "Привет!";
} else if (age < 100){
  message = "Здравствуйте!";
} else {
  message = "Какой необычный возраст!";
}
console.log(message);


// ЗАДАЧИ

console.log("====================")
//Название JavaScript (используя if..else)
console.log("Название JavaScript (используя if..else)")

value = "JavaScript";

if (value == "ESMAScript") {
  console.log ("Верно!");
} else {
  console.log ("Не знаете? ESMAScript!");
}

console.log("====================")
// упражнение из учебника: Покажите знак числа
console.log("Покажите знак числа")

let num = -15;
if (num == 0) 
{
  console.log (0);
}
else if (num < 0) 
{
  console.log (-1);
}
else 
{
  console.log (1);  
}

console.log("====================")
// Перепишите конструкцию if с использованием условного оператора '?':
console.log("Перепишите конструкцию if с использованием условного оператора '?':")

let result, 
a = 3,
b = 2;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
console.log(result)

// ===
 
a = 1,
b = 2;

result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result)

console.log("====================")
// Перепишите 'if..else' в '?'
console.log("Перепишите 'if..else' в '?'")

message;
let login = "";

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
console.log(message);

//===

login = "Директор";

message = (login == "Сотрудник") ? 'Привет' :
(login == "Директор") ? 'Здравствуйте' :
(login == " ") ? 'Нет логина' : '';
console.log(message);

console.log("====================")


// 2.11


console.log("2.11")
console.log("====================")

// Проверка значения вне диапазона
console.log("Проверка значения вне диапазона")
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

age = 1000;

if (!(age >= 14 && age <= 90)) {
  console.log ("Вне диапазона");
}
  else {
  console.log ("В диапазоне 14 и 90");
}

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

age = 20;

if (age < 14 || age > 90) {
  console.log ("Вне диапазона");
}
  else {
  console.log ("В диапазоне 14 и 90");
}

console.log("====================")

// Проверка логина

let password = "Я главный";
login = " ";

if (login == null || login == " ") {
  console.log ("Отменено");
} else if (login == "Админ") {
    if ( password == null || password == " ") {
      console.log ("Отменено");
    } else if (password == "Я главный") {
      console.log ("Здравствуйте!");
    } else {
      console.log("Неверный пароль");
    }
  }else {
  console.log ("Я вас незнаю");
  }

