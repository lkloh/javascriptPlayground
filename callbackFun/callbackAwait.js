
function firstFunction() {
	return new Promise(resolve => {
		setTimeout(function() {
			resolve('I always should come first!');
		}, 200);
	});
}

function lastFunction() {
	return 'I am always last to finish :(';
}

async function callMe() {
	console.log(await firstFunction());
	console.log(lastFunction());
}

callMe();

