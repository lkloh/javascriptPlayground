
function firstFunction(callback) {
	setTimeout(function() {
		console.log('I always should come first!');
		if (callback) {
			callback();
		}
	}, 200);
}

function lastFunction() {
	console.log('I am always last to finish :(');
}

firstFunction(lastFunction);
