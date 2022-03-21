//expression
let car = class {

}

//declaration
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(`${this.make} ${this.model} ${this.year}`)
  }
}

let myCar = new Car('bmw', '745', 2010);
myCar.print();

class SportsCar extends Car {
  revEngine() {
    console.log('vrrroom goes the ' + this.model);
  }
}

let mySportsCar = new SportsCar('dodge', 'viper', 2011);
mySportsCar.print();
mySportsCar.revEngine();



