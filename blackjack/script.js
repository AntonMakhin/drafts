const messageEl = document.getElementById('message');

function updateUI() {
  const body = document.querySelector('body');
  body.style.background = 'green';
  body.style.color = 'white';
  body.style.fontSize = '35px';
  body.style.textAlign = 'center'

  const h1 = document.querySelector('h1');
  h1.style.color = 'goldenrod';


  const div = document.querySelector('div');
  div.style.marginTop = '50px';

  messageEl.style.fontStyle = 'italic';

  const myBtn = document.getElementById('myBtn');
  myBtn.style.color = '#016f32';
  myBtn.style.background = 'goldenrod';
  myBtn.style.width = '250px';
  myBtn.style.height = '50px';
  myBtn.style.borderRadius = '5px';
  myBtn.style.border = 'none';
  myBtn.style.fontSize = '25px';
  myBtn.style.fontWeight = 'bold';
  myBtn.style.marginBottom = '2px'

  const newCardBtn = document.getElementById('newCardBtn');
  newCardBtn.style.color = '#016f32';
  newCardBtn.style.background = 'goldenrod';
  newCardBtn.style.width = '250px';
  newCardBtn.style.height = '50px';
  newCardBtn.style.borderRadius = '5px';
  newCardBtn.style.border = 'none';
  newCardBtn.style.fontSize = '25px';
  newCardBtn.style.fontWeight = 'bold';

}

updateUI();

let cards;
const cardsEl = document.getElementById('cardsEl');
let isAlive;
let hasBlackJack;

let player = {
  name: '',
  chips: 0
}

const playerEl = document.getElementById('player-el');


function getRandomCard() {
  let number = Math.floor(Math.random() * 13 + 1);
  if (number == 1) {
    return 11;
  } else if (number > 10) {
    return 10;
  }
  return number;
}

function startGame() {
  if (!player.name && !player.chips) {
    player.name = prompt('What is your name, please?', '');
    player.chips = prompt('How much are you willing to spend : $?', '');
    playerEl.innerHTML = player.name + ': $' + player.chips;
  }

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  isAlive = true;
  hasBlackJack = false;
  renderGame();
}

function renderGame() {
  const sumEl = document.getElementById('sumEl');
  let sum = 0;

  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    sum += element;
  }

  if (sum < 21) {
    message = 'A new card?';
  } else if (sum === 21) {
    message = 'Black jack!';
    hasBlackJack = true;
  } else {
    message = 'You are out!';
    isAlive = false;
  }

  messageEl.innerHTML = message;

  sumEl.innerHTML = 'Sum: ' + sum;

  cardsEl.innerHTML = 'Cards: ' + cards.join(' - ');

}


function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    renderGame();
  }
}

