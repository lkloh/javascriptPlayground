// https://stackoverflow.com/questions/5000415/call-a-function-after-previous-function-is-complete

function firstFunction() {
	var r = $.Deferred();
	setTimeout(function() {
		console.log('I always should come first!');
	}, 200);
	return r;
}

function lastFunction() {
	console.log('I am always last to finish :(');
}

firstFunction().done(lastFunction());

