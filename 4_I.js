// Interface Segregation Principle
// Те классы, которые наследуются от базового класса, если они не используют методы базового класса, не должны от них зависеть

class Animal {
	constructor(name) {
		this.name = name;
	}
}

const swimmer = {
	swim() {
		console.log(`${this.name} умеет плавать.`);
	},
};

const flier = {
	fly() {
		console.log(`${this.name} умеет летать.`);
	},
};

const walker = {
	walk() {
		console.log(`${this.name} умеет ходить.`);
	},
};

class Dog extends Animal {}

class Eagle extends Animal {}

class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Рэкс');
dog.walk();
dog.swim();

const eagle = new Eagle('Орёл');
eagle.fly();
eagle.walk();

const whale = new Whale('Большой синий друг');
whale.swim();
