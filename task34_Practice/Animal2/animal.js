class Animal {
  food;
  location;
  view;

  constructor(food, location, view){
    this.food = food;
    this.location = location;
    this.view = view;
  }

  makeNoise(){
    console.log(`${this.view} бегает.`);
  }

  eat(){
    console.log(`${this.view} ест.`);
  }

  sleep(){
    console.log(`${this.view} спит.`);
  }

}

export {Animal};