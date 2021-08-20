// Liskov Substitution Principle

class Person {}

class Member extends Person {
	access() {
		console.log('У тебя есть доступ');
	}
}

class Guest extends Person {
	isGuest = true;
}

class Frontend extends Member {
	canCreateFrontend() {}
}

class Backend extends Member {
	canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
	access() {
		throw new Error('У тебя нет доступа! Иди к себе!');
	}
}

function openSecretDoor(member) {
	member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany()); // There should be member

//==============================================================

class Component {
	render() {
		return `<div>Component</div>`;
	}
}

class HeaderComponent extends Component {
	onInit() {}
}

class FooterComponent extends Component {
	afterInit() {}
}

class HOC extends Component {
	render() {
		throw new Error('Render is impossible here');
	}
	wrapComponent(component) {
		component.wrapped = true;
		return component;
	}
}

function renderComponent(component) {
	console.log(component.render());
}
renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
