//Создать 2 инициализированные переменные, описывающие имя и фамилию пользователя Васи Пупкина. Имя описать как глобальную переменную, фамилию как константу.
var firstName = "Вася";
const surName = "Пупкин";

//описать 2 глобальные неициализированные переменные в 1 строку, описывающие рост в см и вес в центнерах Васи Пупкина.
var growth, weightCentner;

//задать рост 180, вес - 0.89.
growth = 180, weightCentner = 0.89;

//создать переменную и скопировать туда вес Васи в килограммах.
var oldWeightCentner = weightCentner;

//используя описанные переменные вывести в консоль надпись: Меня зовут Вася Пупкин. Я вешу 0.89 ц. Мой рост - 180 см.
console.log("Меня зовут " + firstName + " " + surName + ". Я вешу " + weightCentner + " ц. Мой рост - " + growth + " см.")

//увеличить вес Васи на 10 кг, а рост уменьшить на 2 см.
weightCentner = weightCentner + 10 / 100;
growth -= 2;

//используя описанные переменные вывести в консоль надпись: Вася Пупкин потолстел и стоптался.
console.log(firstName + " " + surName + " потолстел и стоптался.");

//Изменить имя Васи на Петю и увелить вес Васи в 2 раза.
firstName = "Петя";
weightCentner *= 2;

//используя описанные переменные вывести в консоль надпись: Теперь я Петя Пупкин и вешу в (столько-то раз больше, рассчитать) больше, чем в молодости.
console.log("Теперь я " + firstName + " " + surName + " и вешу в " + weightCentner / oldWeightCentner + " больше, чем я в молодости.");