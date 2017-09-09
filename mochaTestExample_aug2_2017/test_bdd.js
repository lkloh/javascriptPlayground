
var assert = require('assert');
var typesOfYears = require('./typesOfYears');

describe('isLeapYear', function() {
	context('for years divisible by 4', function() {
	  	it('returns "true" when the year is not multiple of 100', function() {
		  	assert.equal(typesOfYears.isLeapYear(1996), true);
		});

		it('returns "false" when the year is a multiple of 100, and not a multiple of 400', function() {
		  	assert.equal(typesOfYears.isLeapYear(1900), false);
		});

		it('returns "true" when the year is a multiple of 400', function() {
		  	assert.equal(typesOfYears.isLeapYear(2000), true);
		});
	});

	context('for years not divisible by 4', function() {
	  	it('returns "false" when the year is not multiple of 100', function() {
		  	assert.equal(typesOfYears.isLeapYear(2001), false);
		});
	});
});

