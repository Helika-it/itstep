//Дана строна квадрата. Расчитать его периметр
var sideSquare = 3;
console.log(perimeterSquare = sideSquare*4);

//Дан радиус окружности. Найти площадь круга.(Число пи взять из модуля Math)
var radiusCircle = 2;
console.log(squareCircle = Math.PI * radiusCircle **2);

//Дан 2 катета a и b в прямоугольном треугольнике. Найти гипотенузу с.
var a = 2, b = 3;
var c = (a**2 + b**2) **(1/2);
console.log(c);

//Дано 2 переменных. Обменять их значения, используя 3 переменную.
var firstVariable = 2, secondVariable = 3, thirdVariable;
thirdVariable = firstVariable, firstVariable = secondVariable, secondVariable = thirdVariable;
console.log(firstVariable, secondVariable);

//Дано 2 переменных. Обменять их значения, используя только арифметические операции и не используя другие переменные.
var oneVariable = 4, twoVariable = 5;
oneVariable = oneVariable + twoVariable;
twoVariable = oneVariable - twoVariable;
oneVariable = oneVariable - twoVariable;
console.log(oneVariable, twoVariable);

//Дано 3-х значное число. Найти сумму его цифр (123 -> 6).
var numberSum = 123;
var itom3 = numberSum % 10;
var itom2 = ((numberSum - itom3) / 10) % 10;
var itom1 = (numberSum - itom3 - itom2 * 10) / 100;
var sum = itom1 + itom2 + itom3;
console.log(sum);

//Дано 3-х значное число. Получить число, записанное из цифр данного в обратном порядке (123 -> 321). 
var number = 123;
var itom_3 = number % 10;
var itom_2 = ((number - itom_3) / 10) % 10;
var itom_1 = (number - itom_3 - itom_2 * 10) / 100;
var reverse = itom_1 + itom_2 * 10 + itom_3 * 100;
console.log(reverse);

//Вася взял кредит в 1000 рублей под 10% на 3 года. Сколько Вася  переплатит, если Всю сумму он заплатит в самом конце.
var credit = 1000;
var percent = 10;
var termСredit = 3;
var overpayment1 = credit * (percent/100);
var overpayment2 = (credit + overpayment1) * (percent/100);
var overpayment3 = (credit + overpayment1 + overpayment2) * (percent/100);
var overpayment = overpayment1 + overpayment2 + overpayment3;
console.log(overpayment);

//Даны 2 значения min и max. Написать выражение, которое генерирует случаное число в промежутке от  min до max включительно (Math.random(), Math.floor() в помощь)
var min = 2;
var max = 6;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);