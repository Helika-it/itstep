//reduce, reduceRight:
//23. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти. 

let arr = [1, 2, 3, 0, 4, 5, 6];
let num = 1;
let result = arr.reduceRight(function(sum, elem) {
	if (sum > 10) {
		console.log(num);
		return;
	} else {
		num++;
		return sum + elem;
	}
}); 


//---------- РЕШЕНИЕ НАШЛА ------------------
// НЕ ВСЁ ПОНЯТНО