class Worker {
  #name;
  #surname;
  #rate;
  #days;

  constructor (name, surname, rate, days){
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }

  get name() {
    return this.#name;
  } 
  get surname() {
    return this.#surname;
  } 
  get rate() {
    return this.#rate;
  } 
  get days() {
    return this.#days;
  } 

  getSalary(){
    console.log(`Зарплата ${this.name} ${this.surname} составляет: ${this.rate * this.days}$`);
    return
  }
}


export {Worker};