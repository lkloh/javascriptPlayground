// https://stackoverflow.com/questions/5000415/call-a-function-after-previous-function-is-complete

function firstFunction() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('I always should come first!');
			resolve('Success');
		}, 200);
	});
}

function lastFunction() {
	console.log('I am always last to finish :(');
}

firstFunction().then(lastFunction);

