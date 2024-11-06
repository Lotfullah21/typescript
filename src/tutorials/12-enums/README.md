## enums

an enum (short for "enumeration") is a way to define a set of named constants. It allows us to define a collection of related values that can be numbers or strings, making the code more readable and easier to maintain.

#### Types of Enums

TypeScript supports several types of enums:

`Numeric Enums`: By default, enums are assigned numeric values, starting from 0.
`String Enums`: Each member has a string value.
`Heterogeneous Enums`: Mixing both numeric and string values (less common and generally not recommended).

### 1. Numeric Enums

By default, enums in TypeScript are numeric and start from 0. You can override the starting value if needed.

##### - First example

```ts
enum Direction {
	Up, // 0
	Down, // 1
	Left, // 2
	Right, // 3
}

let dir: Direction = Direction.Up;
console.log(dir); // Output: 0
console.log(Direction.Down); // Output: 1
```

### 2. 2. String Enums

In string enums, each member is initialized with a string literal. String enums offer better readability and prevent unintentional changes to values.

```ts
enum Direction {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

let move: Direction = Direction.Left;
console.log(move); // Output: "LEFT"
```

### 3. Heterogeneous Enums

Heterogeneous enums allow both string and numeric values, although their usage is less common and generally discouraged due to decreased readability.

```ts
enum MixedEnum {
	No = 0,
	Yes = "YES",
}

console.log(MixedEnum.No); // Output: 0
console.log(MixedEnum.Yes); // Output: "YES"
```

### Practice

```ts
enum Direction {
	Up, // 0
	Down, // 1
	Left, // 2
	Right, // 3
}
interface MovementDirections {
	// Means the values should from Direction enum
	directions: Direction;
	// Allowed dirs is an array of strings
	allowedDirs: string[];
}
function getDirections(): MovementDirections {
	return { directions: Direction.Up, allowedDirs: ["LEFT", "RIGHT"] };
}
console.log(getDirections());
```

#### Reverse mapping in enum

If we are having numbers as the values for our enum constants, then we can get access the properties using integer values.

```ts
enum Status{
    PENDING = 1
    IN_PROGRESS = 2
    COMPLETED = 3
}

# Accessing enum members using integer values (reverse mapping)
status_value = 2
status = Status(status_value)
print(status)  # Output: Status.IN_PROGRESS

```

Example

```ts
enum UserRole {
	Admin = "Admin",
	Manager = "Manager",
	Employee = "Employee",
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
```

## How the iteration works

```ts
enum UserRole {
	Admin,
	Manager,
	Employee,
}
```

By default iteration starts from 0 and the next enum members get the an incremented value of it's previous neighbor.

For instance,

```text
Admin: 0
Manager:0+1 = 1
Employee: 1+1 = 2
```

If we have initialized a value other than 0, the increment will start from that value.

```text
Admin: 10
Manager:10+1 = 11
Employee: 11+1 = 12
```

Now, if we have a string initialized some where, then there will be an error, because we cannot increment a string.

```text
Admin: "Admin"
Manager:"Admin"+1 = // Error
Employee: 11+1 = 12
```
