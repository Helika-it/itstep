 //! как обертка метода (не меняя сам метод)
function log(target: Object, method: string, descriptor: PropertyDescriptor){ //! декоратор исп-ем для логирования / декоратор log
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: number[]){
        console.log(JSON.stringify(args));
        let returnValue = originalMethod.apply(this, args); //! внутренняя реализация метода add / .apply связывает метод и передаваемые аргументы
        console.log(`${JSON.stringify(args)} => ${returnValue}`) //! JSON вспомогательный формат - преобразует обьект в строковый формат для передачи
        return returnValue;
    }
} 
//! методы JSON:
//! .stringify - преобразует обьект в строковый формат
//! .parse - преобразует строковый формат в обьект
 
class Calculator{

    @log //! декоратор перед методом выводит параметры с которыми он работает, а потом работает сам метод описанный в классе
    add(x: number, y: number): number{
        return x + y;
    }

    @log //!
    sub(x: number, y: number): number{
        return x - y;
    }
}
 
let calc = new Calculator();
let z = calc.add(4, 5);
z = calc.sub(5, 4);