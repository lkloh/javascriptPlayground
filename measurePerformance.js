const performance = require("performance-now")

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
  const start = performance();
  func(funcArgs);
  const end = performance();
  console.log(`${func.name} took ` + (end - start) + ` to run`);
}

const ARR_SIZE = 10000;
measureFunc(doPush, ARR_SIZE);
measureFunc(doConcat, ARR_SIZE);


