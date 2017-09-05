
import {foo, bar} from '../foobar';

var assert = require('assert');

describe('Array', function() {
	describe('#indexOf()', function() {
	    it('should return -1 when the value is not present', function() {
	      assert.equal(-1, [1,2,3].indexOf(4));
	    });
	});
});

describe('FooBar', function() {
	describe('bar()', function() {
	    it('bar() should return foo', function() {
	      assert.equal(bar(), "foo");
	    });
	});

	describe('foo()', function() {
	    it('foo() should return bar', function() {
	      assert.deepEqual(foo(), "bar");
	    });
	});
});



