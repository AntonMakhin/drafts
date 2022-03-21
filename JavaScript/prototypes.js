let originalCar = {
  make: 'bmw',
  model: '745',
  year: 2010,
}

let newCar = Object.create(originalCar);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));

newCar.doors = 5;
console.log(newCar.hasOwnProperty('doors'));
