let hi = () => {
  console.log('hey');
}

hi();


let hey = (name) => {
  console.log(`howdy ${name}`);
}

hey('Sam');

let names = ['sam', 'bob', 'charley'];
names.map((name) => {console.log(`howdy ${name}`)});
