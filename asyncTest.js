
var Promise = require('promise');

function inOrder() {
  return new Promise((resolve, reject) => {
      console.log('foo');
      resolve();
    }).then(() => {
      console.log(`bar ${4 * 3454645}`);
    }).then(() => {
      console.log('buzz');
    });
}

inOrder();
