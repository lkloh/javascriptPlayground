
// Javascript destructuring: no order needed
let p = {x: 10, y: 20, z: 30};
let {z, y, x} = p;
console.log(`x: ${x}, y: ${y}, z: ${z}`);

let pp = {xx: 10, yy:20};
let {zz, yy, xx} = pp;
console.log(`xx: ${xx}, yy: ${yy}, zz: ${zz}`);
