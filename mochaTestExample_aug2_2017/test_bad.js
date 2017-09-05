
var assert = require('assert');
var typesOfYears = require('./typesOfYears');

describe('isLeapYear', function() {
	it('(year % 4 == 0) and (year % 100 != 0) ==> false', function() {
	  	assert.equal(typesOfYears.isLeapYear(1996), true);
	});

	it('(year % 400 != 0) ==> false', function() {
	  	assert.equal(typesOfYears.isLeapYear(1900), false);
	});

	it('(year % 400 == 0) ==> true', function() {
	  	assert.equal(typesOfYears.isLeapYear(2000), true);
	});

	it('(year % 4 != 0) ==> false', function() {
		assert.equal(typesOfYears.isLeapYear(2001), false);		
	});
});

