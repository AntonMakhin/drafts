let names = ['bob', 'ben', 'bill', 'adam'];
let others = ['jack', 'mary', 'suzie'];

let lost = [4, 8, 16, 15];
let fibonacci = [1, 1, 2, 3, 5];

//push, pop, shift, unshift

//concat
let combine = lost.concat(fibonacci);
console.log(combine);

//join  - joins elem with something
console.log(fibonacci.join('~'));

//reverse
console.log(names.reverse());

//sort  - alphabetical order
console.log(names.sort());

//indexOf
console.log(names.indexOf('ben'));

//lastIndexOf
console.log(fibonacci.lastIndexOf(1));

//map
names.map((name) => {console.log(`howdy ${name}`)});

//filter
let filtered = combine.filter((x) => {if (x <= 6) return x;});
console.log(filtered);

//forEach
names.forEach((name) => console.log(`hey ${name}`));

//every - true or false
console.log(filtered.every((num) => num < 2));

//some  - true or flase
console.log(fibonacci.some((num) => num == 5));













