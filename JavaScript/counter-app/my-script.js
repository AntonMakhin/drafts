let name = 'Anton';
let greeting = 'Hey, ';
let welcomeEl = document.getElementById('welcomeEl');
function showGreeting() {
    welcomeEl.innerHTML = greeting + name;
    welcomeEl.innerHTML += "🙌"
}

showGreeting();


let countEl = document.getElementById('count');
let count = 0;

function incrementCount() {
  count++;
  countEl.innerHTML = count;
}

function save() {
  let saveEl = document.getElementById('saveEl');
  saveEl.innerHTML+=  `${count} - `;
  count = 0;
  countEl.innerHTML = count;
}


