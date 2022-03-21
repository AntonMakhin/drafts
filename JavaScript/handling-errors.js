function beforeTryCatch() {
  let obj = undefined;
  console.log(obj.b);
  console.log('if the previous line of code throws an exception you\'ll never see this.');
}

//beforeTryCatch();

function afterTryCatch() {
  try {
    let obj = undefined;
    console.log(obj.b);
    console.log('if the previous line of code throws an exception you\'ll never see this.');

  } catch (error) {
    console.log('I caught an exception: ' + error.message);

  } finally {
    console.log('this will happen no matter what.');
  }

  console.log('My app is still running');
}

afterTryCatch();

function performCalculaiton(obj) {
  if (!obj.hasOwnProperty('b')) {
    throw new Error('Object missing property');
  }
  //continue with calculation
  return 6;
}

function performHigherLevelOperation() {
  let obj = {};
  let value = 0;
  try {
    value = performCalculaiton(obj);
  } catch (error) {
    console.log(error.message);
  }

  if (value == 0) {
    //contingency
    //retry logic
  }
}

performHigherLevelOperation();
