
var _ = require('lodash');

function getComponentContent() {
  return _.join(['Hello', 'webpack'], ' ');
}

console.log(getComponentContent());


