
import * from './addition';

var assert = require('assert');

console.log(add_two_numbers(1,2));

describe('Array', function() {

  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


describe('Simple Math test', function() {

	describe('power of two', function() {
		it('3*3 = 9', function() {
			assert.equal(3*3, 9);
		});
	});

	describe('1 + 1 = 2', function() {
		it('1 + 1 = 2', function() {
			assert.equal(add_two_numbers(1, 1), 2);
		});
	});

});
