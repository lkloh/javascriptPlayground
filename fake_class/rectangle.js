
class Rect {

	constructor(h, w) {
		this.height = h;
		this.width = w;
	}

	get area() {
		return this.calcArea();
	}

	calcArea() {
		return this.height * this.width;
	}

	isSquare() {
		return this.height == this.width;
	}

	toStr() {
		if (this.isSquare()) {
			return "Square";
		} else {
			return "Rectangle";
		}
	}

}


module.exports = Rect;

