interface Person {
	name: string;
	age?: number;
	getDetails(): void;
}

interface Employee extends Person {
	id: number;
}

let ahmad: Person = {
	name: "Ahmad",
	age: 23,
	getDetails: function () {
		console.log(`${this.name} is ${this.age} years old`);
	},
};

let ayaan: Employee = {
	name: "ayaan",
	id: 1,
	getDetails: function () {
		console.log(`${this.name}'s id is ${this.id}`);
	},
};

console.log(ayaan.name);
console.log(ayaan.getDetails());
