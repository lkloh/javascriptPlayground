

const assert = require('assert');

function myParsedNum(potentialNumber) {
	var result = Number.parseInt(potentialNumber);
	return Number.isNaN(result) ? null : result;
}

console.log('test');
assert.equal(null, myParsedNum(''));
assert.equal(null, myParsedNum(null));
assert.equal(0, myParsedNum(0));
assert.equal(0, myParsedNum('0'));
assert.equal(17, myParsedNum('17'));
assert.equal(17, myParsedNum(17));