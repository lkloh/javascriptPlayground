
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

}


module.exports = Rect;