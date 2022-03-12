class User{
    name: string;
    messages: string[];
    
    constructor(name:string){
        this.name = name;
        this.messages = [];
    }
}
export {User}