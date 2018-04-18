
function causesOverflow() {
  const arr = [];
  const large = new Array(200000).fill(1);
  arr.push(...large);
  return arr;
}

function noOverflow() {
  const arr = [];
  for (let i = 0; i < 200000; i++) {
    arr.push(i);
  }
  return arr;
}

noOverflow();
causesOverflow();


