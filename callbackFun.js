

function firstFunction() {
	setTimeout(function() {
		console.log('I always should come first!');
	}, 200);
}

function lastFunction() {
	console.log('I am always last to finish :(');
}

function outOfOrder() {
	firstFunction();
	lastFunction();
}

outOfOrder();