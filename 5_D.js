// Dependency Inversion Principle
// Любые уровни должны зависеть от абстракции, а не от конкретики

class Fetch {
	request(url = '') {
		// return fetch(url).then((r) => r.json());
		return Promise.resolve('data from fetch');
	}
}

class LocalStorage {
	get() {
		const dataFromLocalStorage = 'data from local storage';
		return dataFromLocalStorage;
	}
}

class Database {
	constructor() {
		// this.fetch = new Fetch();
		this.localStorage = new LocalStorage();
	}

	getData() {
		// return this.fetch.request('vk.com');
		return this.localStorage.get('ls key');
	}
}

const db = new Database();
console.log(db.getData());
