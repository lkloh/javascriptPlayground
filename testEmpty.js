

// http://underscorejs.org/#isEmpty
// install: npm install underscore
// compile: node-es6 testEmpty.js

var _ = require('underscore');

console.log(`Null: ${_.isEmpty(null)}`);
console.log(`Undefined: ${_.isEmpty(undefined)}`);
console.log(`Empty set: ${_.isEmpty({})}`);
console.log(`Non-empty set: ${_.isEmpty({a: 1})}`);

