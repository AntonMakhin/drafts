function changeRed() {
  let box = document.getElementById('redBox');
  box.style.background = (box.style.background == 'red')? 'green': 'red';
  }


var counter = (function() {

  let count = 0;
  function print(message) {
    console.log(message + '---' + count);
  }

  return {
   // value: count,
   get: function() {return count;},
   
   set: function(value) {count = value;},

    increment: function() {
       count += 1;
       print('after increment: ');       
    },
    
    reset: function() {
      print('before reset: ');
      count = 0;
      print('after reset: ');
    },
  }
})();
counter.increment();
counter.increment();
counter.set(7);
console.log(counter.get());
counter.reset();

function openMe() {
  document.getElementById('demo').className = "opened";
}

function closeMe() {
  document.getElementById('demo').className = 'closed';
}

function showID(elm) {
  alert(elm.id);
}