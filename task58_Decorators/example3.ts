function readable(onlyRead : boolean){ //! как у декоратора можно исп-вать параметры / dekorator readable
 
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) { //! / (ссылка на конструктор, название метода с которым работает, что с этим методом можно сделать(см.документацию напр: PropertyDescriptor - можно ли изменять метод))
        descriptor.writable = !onlyRead;
    };
}
 
class User {
 
    name: string;
    constructor(name: string){
        this.name = name;
    }
 
    @readable(false) //! запретит редактирование метода
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
tom.print = function(){console.log("print has been changed");}
tom.print();