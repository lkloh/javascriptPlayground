// Given a string (from an input field taking only numbers, convert to an integer). Throw error otherwise.

function convertToPositiveNumber(number) {
	var n = parseInt(number);
	if (Number.isInteger(n)) {
		if (n >= 0) {
			return n;
		}
	}
	throw new Exception(str(number) + ' is not a positive integer');
}

console.log(convertToPositiveNumber("5"));
console.log(convertToPositiveNumber(5));
console.log(convertToPositiveNumber('-1'));
