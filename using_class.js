



function test_area() {
	console.log("test_area");

	// setup modules needed
	const Rect = require('./rectangle.js');
	const assert = require('assert');

	var square = new Rect(10, 10);
	assert.deepEqual(square.area, 100);
}

function test_toStr() {
	console.log("test_toStr");

	// setup modules needed
	const Rect = require('./rectangle.js');
	const assert = require('assert');

	var myRect = new Rect(10, 20);
	assert.deepEqual(myRect.toStr(), 'Rectangle');

	var mySq = new Rect(10, 10);
	assert.deepEqual(mySq.toStr(), 'Square');
}

function test_fake_attributes() {
	console.log("test_fake_attributes");

	// setup modules needed
	const Rect = require('./rectangle.js');
	const assert = require('assert');

	var fakeRect = { 
		'width': 10,
		'height': 20,
		'area': 10*20,
	};

	assert.deepEqual(fakeRect.width, 10);
	console.log( fakeRect.width );

	assert.deepEqual(fakeRect.height, 20);
	console.log( fakeRect.height );
}

function test_fake_function_call() {
	const sinon = require("sinon"); // for faking functions
	console.log("test_fake_function_call");

	// setup modules needed
	const Rect = require('./rectangle.js');
	const assert = require('assert');

	var fakeToStr = sinon.stub().returns("Rectangle"); // fake return value
	assert.deepEqual(fakeToStr(), "Rectangle");
}



test_area();
test_toStr();

test_fake_attributes();
test_fake_function_call();









































