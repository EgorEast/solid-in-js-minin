// Open Close Principle
// Принцип открытости-закрытости (Открыт к расширению, но закрыт к модификации)

class Shape {
	area() {
		throw new Error('Area method should be implemented');
	}
}

class Square extends Shape {
	constructor(size) {
		super();
		this.size = size;
	}
	area() {
		return this.size ** 2;
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}
	area() {
		return this.radius ** 2 * Math.PI;
	}
}
class Rect extends Shape {
	constructor(width, heigth) {
		super();
		this.width = width;
		this.heigth = heigth;
	}
	area() {
		return this.width * this.heigth;
	}
}

class Triangle extends Shape {
	constructor(a, b, c) {
		super();
		this.a = a;
		this.b = b;
		this.c = c;
		this.p = (a + b + c) / 2;
	}
	area() {
		return Math.sqrt(
			this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)
		);
	}
}

class AreaCalculator {
	constructor(shapes = []) {
		this.shapes = shapes;
	}
	sum() {
		return this.shapes.reduce((acc, shape) => {
			acc += shape.area();
			return acc;
		}, 0);
	}
}
const calc = new AreaCalculator([
	new Square(20),
	new Circle(10),
	new Circle(5),
	new Rect(10, 20),
	new Triangle(3, 5, 5),
]);
console.log(calc.sum());
