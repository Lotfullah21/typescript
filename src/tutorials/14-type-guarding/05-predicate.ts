type Student = {
	name: string;
	coding(): void;
};

type User = {
	name: string;
	login(): void;
};

type Person = User | Student;

const randomPerson = (): Person => {
	return Math.random() > 0.4
		? {
				name: "Ahmad",
				coding: () => {
					console.log("studying");
				},
		  }
		: {
				name: "Ayaan",
				login: () => {
					console.log("coding");
				},
		  };
};

const person = randomPerson();

function isStudent(person: Person): person is Student {
	// It means if it returns true, then person is a student.
	return "coding" in person;
}

if (isStudent(person)) {
	person.coding();
} else {
	person.login();
}

// Second method
// Check if `person` has a `coding` method before trying to log it
if ("coding" in person) {
	console.log("This person is a Student.");
	person.coding(); // Call the `coding()` method if it's a Student
} else {
	console.log("This person is a User.");
	person.login(); // Call the `login()` method if it's a User
}
