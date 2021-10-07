class Animal {
  food;
  location;
  name;
  
  constructor(name,food,location){
    this.food = food;
    this.location = location;
    this.name = name
  }

  makeNoise(){
    console.log(`${this.name} издает звуки.`);
  }
    

  eat(){
    console.log(`${this.name} ест ${this.food}`);
  }


  sleep(){
    console.log(`${this.name} спит.`);
  }
  
}

export {Animal};