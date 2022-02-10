function readable (target: Object, propertyKey: string, descriptor: PropertyDescriptor) { //! декоратор readable (аннотация) / (ссылка на конструктор, название метода с которым работает, что с этим методом можно сделать(см.документацию напр: PropertyDescriptor - можно ли изменять метод))
    descriptor.writable = false;
};
 
class User {
 
    name: string;
    constructor(name: string){
        this.name = name;
    }
 
    @readable //! декоратор метода
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
tom.print = function(){console.log("print has been changed");}
tom.print(); 