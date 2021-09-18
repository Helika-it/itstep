//reduce, reduceRight:
//19. Дан массив с числами. Найдите сумму этих чисел.

let a = [3, 4, 1, 2, 7];

console.log(a);

let result = a.reduce((sum, current) => sum + current, 0);

console.log(result);

//-----------------

/*
let a = [3, 4, 1, 2, 7];

console.log(a);

let result = a.reduceRight((sum, current) => sum + current, 0);

console.log(result);
*/