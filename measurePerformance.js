const performance = require("performance-now")

function doPush(sz) {
  const arr1 = new Array(sz).fill(1);
  const arr2 = new Array(sz).fill(2);
  arr1.push(...arr2);
  return arr1;
}

function doConcat(sz) {
  const arr1 = new Array(sz).fill(1);
  const arr2 = new Array(sz).fill(2);
  return arr1.concat(arr2);
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


