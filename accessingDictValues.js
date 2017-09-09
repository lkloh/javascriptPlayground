


function accessByDot(d) {
	console.log('\n\n');
	for (key in d) {
		console.log(d.key);
	}
}

function accessByBracket(d) {
	console.log('\n\n');
	for (key in d) {
		console.log(d[key]);
	}
}



d = {'A': 'Alice', 'B': 'Bob', 'C': 'Carol'};

console.log('\n\nUsing dot notation, we have: ' + d.A);
console.log('\n\nUsing bracket notation, we have: ' + d['A']);

accessByBracket(d);
accessByDot(d);



