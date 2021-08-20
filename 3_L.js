// Liskov Substitution Principle

class Person {
	access() {
		console.log('У тебя есть доступ');
	}
}

class Frontend extends Person {
	canCreateFrontend() {}
}

class Backend extends Person {
	canCreateBackend() {}
}

class PersonFromDifferentCompany extends Person {
	access() {
		throw new Error('У тебя нет доступа! Иди к себе!');
	}
}

function openSecretDoor(person) {
	person.access();
}
openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new PersonFromDifferentCompany());
