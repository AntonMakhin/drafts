const body = document.querySelector('body');
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ulEl');
let leads = [];

function updateUI() {
  body.style.margin = 0;
  body.style.padding = '10px';
  body.style.fontFamily = 'Arial, Helvetica, sans-serif';
  body.style.minWidth = '400px';

  inputEl.style.paddingLeft = '10px';
  inputEl.style.paddingRight = '10px';
  inputEl.style.width = '100%';
  inputEl.style.boxSizing = 'border-box';
  inputEl.style.height = '40px';

  inputBtn.style.background = 'green';
  inputBtn.style.color = 'white';
  inputBtn.style.marginTop = '10px';
  inputBtn.style.borderRadius = '5px';
  inputBtn.style.height = '50px';
  inputBtn.style.width = '150px';
  inputBtn.style.border = 'none';
  inputBtn.style.fontSize = '20px';

  ulEl.style.listStyle = 'none';
  ulEl.style.paddingLeft = '0';
  ulEl.style.marginTop = '20px';

}

updateUI();

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href='${leads[i]}' target ='_blank'>${leads[i]}</a></li>`;
    /* let li = document.createElement('li');
    li.innerHTML = leads[i];
    ulEl.append(li); */
  }
  ulEl.innerHTML = listItems;
  let lists = document.getElementsByTagName('li');
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.marginTop = '5px';
  }
  let anchors = document.getElementsByTagName('a');
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].style.color = 'green';
  }
}


inputBtn.addEventListener('click', function () {
  leads.push(inputEl.value);
  inputEl.value = '';
  renderLeads();
});
