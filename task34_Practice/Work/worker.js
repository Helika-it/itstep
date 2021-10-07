class Worker {
  name;
  surname;
  rate;
  days;

  constructor (name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary(){
    console.log(`Зарплата ${this.name} ${this.surname} составляет: ${this.rate * this.days}$`);
    return
  }
}


export {Worker};