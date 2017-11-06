
class RectangleAllowed {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	allowedOperator() {
		this.height = 3.1415926535898;
	}
}

rectA = new RectangleAllowed(4, 5);
rectA.allowedOperator()
console.log(rectA);



class RectangleDisallowed {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	disallowedOperator() {
		var newVar = {height: 3.1415926535898, width: this.width};
		this = newVar; // comment out to make it work!
	}
}

rectB = new RectangleDisallowed(4, 5);
rectB.disallowedOperator()
console.log(rectB);



