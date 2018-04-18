
let performance = require("performance-now")

function doPush(sz) {
  const arr = [];
  for (let i = 0; i < sz; i++) {
    arr.push(i * i);
  }
  return arr;
}

function doConcat(sz) {
  let arr = [];
  for (let i = 0; i < sz; i++) {
    arr = arr.concat([i * i]);
  }
  return arr;
}

function measureFunc(func, funcArgs) {
  let start = performance();
  func(funcArgs);
  let end = performance();
  console.log(`${func.name} took ` + (end - start) + ` to run`);
}

const ARR_SIZE = 10000;
measureFunc(doPush, 1000);
measureFunc(doConcat, 1000);


