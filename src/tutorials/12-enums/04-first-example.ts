enum UserRole {
	Admin,
	Manager,
	Employee,
}

type User = {
	id: number;
	name: string;
	role: UserRole;
	contact: [string, string];
};

function createUser(user: User): User {
	return user;
}

// Make sure the king object conforms exactly to the User type
let king: User = {
	id: 1,
	name: "Ayaan Ali",
	role: UserRole.Admin,
	contact: ["emperror@gmail.com", "+0011232323"],
};

const myUser = createUser(king);
console.log(myUser);
