function logger<TFunction extends Function>(target: TFunction): TFunction{ //! декоратор logger. <тип функции декоратора>
 
    let newConstructor: Function = function(name:string){
        console.log("Creating new instance");
        this.name = name;
        this.age = 23;
        this.print = function():void{
            console.log(this.name, this.age);
        }
    }
    return <TFunction>newConstructor;
}
 
@logger //!декоратор класса, т.к стоит перед классом. / Он меняет конструктор класса на конструктор logger / User от чего-то уже унаследован, но нужен другой конструктор (поля, методы) / потомки декоратор не наследуют
class User {

    name: string;
    constructor(name: string){
        this.name = name;
    }
    
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
let bob = new User("Bob");
tom.print();
bob.print();