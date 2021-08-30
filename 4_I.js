// Interface Segregation Principle
// Те классы, которые наследуются от базового класса, если они не используют методы базового класса, не должны от них зависеть

class Animal {
	constructor(name) {
		this.name = name;
	}
	walk() {
		console.log(`${this.name} умеет ходить.`);
	}
	swim() {
		console.log(`${this.name} умеет плавать.`);
	}
	fly() {
		console.log(`${this.name} умеет летать.`);
	}
}

class Dog extends Animal {
	fly() {
		return null;
	}
}

class Eagle extends Animal {
	swim() {
		return null;
	}
}

class Whale extends Animal {
	fly() {
		return null;
	}
	walk() {
		return null;
	}
}

const dog = new Dog('Рэкс');
dog.walk();
dog.swim();
dog.fly(); // это не правда

const eagle = new Eagle('Орёл');
eagle.fly();
eagle.swim(); // это не правда
eagle.walk();

const whale = new Whale('Большой синий друг');
whale.fly(); // это не правда
whale.swim();
whale.walk(); // это не правда
