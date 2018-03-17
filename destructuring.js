
// Javascript destructuring: no order needed
let p = {x: 10, y: 20, z: 30};
let {z, y, x} = p;
console.log(`x: ${x}, y: ${y}, z: ${z}`);

let pp = {xx: 10, yy:20};
let {zz, yy, xx} = pp;
console.log(`xx: ${xx}, yy: ${yy}, zz: ${zz}`);


function destructure({z=30, y=20, x=10}) {
  console.log(`x: ${x}, y: ${y}, z: ${z}`);
}

destructure({x: 11, y: 22, z: 33}); // all arguments present
destructure({x: 11, y: 22}); // one argument missing
