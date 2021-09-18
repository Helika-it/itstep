//reduce, reduceRight:
// 20 Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

let arr = [1, 2, 3, 7, 0, 4, 5, 6];
console.log(arr);
let answer = 0;
let result = arr.reduce(function(sum, elem) {
	if (elem == 0) {
		answer = sum;
	} else {
		return sum + elem;
	}
});
if(answer == undefined){answer = result};
console.log(answer); 



//---------- РЕШЕНИЕ НАШЛА ------------------
// НЕ ВСЁ ПОНЯТНО

