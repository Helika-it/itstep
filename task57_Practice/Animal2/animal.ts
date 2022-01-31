class Animal {
  food:string;
  location:string;
  view:string;

  constructor(food:string, location:string, view:string){
    this.food = food;
    this.location = location;
    this.view = view;
  }

  makeNoise():void{
    console.log(`${this.view} бегает.`);
  }

  eat():void{
    console.log(`${this.view} ест.`);
  }

  sleep():void{
    console.log(`${this.view} спит.`);
  }

}

export {Animal};