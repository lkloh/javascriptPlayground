
const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const REGEX = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

function isUSPhoneNumber(n) {
  return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(n);
}

function isUSPhoneNumberOptimized(n) {
  return REGEX.test(n);
}

function makeRandomStr() {
  let text = ``;
  for (var i = 0; i < 10; i++) {
    text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
  }
  return text;
}

function makeArray(NUM_ELEMS) {
  const arr = new Array(NUM_ELEMS);
  for (let i = 0; i < NUM_ELEMS; i++) {
    arr[i] = makeRandomStr();
  }
  return arr;
}

function testTime(func, arr) {
  const start = Date.now();
  
  arr.forEach(function(entry) {
    isUSPhoneNumber(entry);
  });

  const end = Date.now();
  console.log(`${func.name} took ${(end - start)} to finish`); 
}

arr = makeArray(100000);
testTime(isUSPhoneNumberOptimized, arr);
testTime(isUSPhoneNumber, arr);


