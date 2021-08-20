// Open Close Principle
// Принцип открытости-закрытости (Открыт к расширению, но закрыт к модификации)

class Square {
	constructor(size) {
		this.type = 'square';
		this.size = size;
	}
}

class Circle {
	constructor(radius) {
		this.type = 'circle';
		this.radius = radius;
	}
}

class AreaCalculator {
	constructor(shapes = []) {
		this.shapes = shapes;
	}
	sum() {
		return this.shapes.reduce((acc, shape) => {
			switch (shape.type) {
				case 'circle':
					acc += shape.radius ** 2 * Math.PI;
					break;
				case 'square':
					acc += shape.size ** 2;
					break;
				default:
					break;
			}
			return acc;
		}, 0);
	}
}

const calc = new AreaCalculator([
	new Square(20),
	new Circle(10),
	new Circle(5),
]);
console.log(calc.sum());
