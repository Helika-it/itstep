//reduce, reduceRight:
//24. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.

let arr = [1, -2, 3, 0, 4, -5, 6, -11];
console.log(arr); 
function func(elem){return elem > 0};
let arrTemp = arr.filter(func);

let result = arrTemp.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result); 


//---------- РЕШЕНИЕ НАШЛА ------------------
// НЕ ВСЁ ПОНЯТНО

