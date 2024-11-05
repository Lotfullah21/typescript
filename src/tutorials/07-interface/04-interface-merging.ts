interface Person {
	name: string;
}

interface DogOwner {
	name: string;
	dogName: string;
}

interface Manager extends Person {
	managePeople(): void;
	deletesTasks(): void;
}

let manager: Manager = {
	name: "ahmad",
	managePeople() {
		console.log("manager people");
	},
	deletesTasks() {
		console.log("delegates the tasks");
	},
};

function getEmployee(): Manager | DogOwner | Person {
	let num: number = Math.random() * 100;
	if (num < 30) {
		return { name: "ahmad" };
	} else if (num > 30 && num < 60) {
		return { name: "king", dogName: "Wafa" };
	} else {
		return {
			name: "king",
			dogName: "Wafa",
			managePeople() {
				console.log("hello manager");
			},
			deletesTasks() {
				console.log("Hello delegator");
			},
		};
	}
}

let employee: Manager | DogOwner | Person = getEmployee();

function isManager(employee: Manager | DogOwner | Person): employee is Manager {
	if ("managePeople" in employee) {
		return true;
	}
	return false;
}

if (isManager(employee)) {
	employee.managePeople();
	console.log("Indeed a manager");
}

console.log(isManager(employee));
