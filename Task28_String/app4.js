// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

str = 'я учу javascript!';

//1:
console.log(str.slice(2, 5) ); 
console.log(str.slice(6, 16) ); 

//2:
console.log(str.substring(2, 5) ); 
console.log(str.substring(6, 16) ); 

//3:
console.log(str.substr(2, 3) ); 
console.log(str.substr(6, 10) ); 