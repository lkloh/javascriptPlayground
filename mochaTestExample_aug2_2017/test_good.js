
var assert = require('assert');
var typesOfYears = require('./typesOfYears');

describe('isLeapYear', function() {
	describe('for years divisible by 4', function() {
	  	it('should return "true" when the year is not multiple of 100', function() {
		  	assert.equal(typesOfYears.isLeapYear(1996), true);
		});

		it('should return "false" when the year is a multiple of 100, and not a multiple of 400', function() {
		  	assert.equal(typesOfYears.isLeapYear(1900), false);
		});

		it('should return "true" when the year is a multiple of 400', function() {
		  	assert.equal(typesOfYears.isLeapYear(2000), true);
		});
	});

	describe('for years not divisible by 4', function() {
	  	it('should return "false" when the year is not multiple of 100', function() {
		  	assert.equal(typesOfYears.isLeapYear(2001), false);
		});
	});
});

