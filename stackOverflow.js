
function causesOverflow() {
  const arr = [];
  const large = new Array(200000).fill(1);
  arr.push(...large);
  return arr;
}

causesOverflow();


