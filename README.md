## Installation

### 1. Create an app

```sh
npm create vite@latest typescript -- --template vanilla-ts
cd typescript
npm install
npm run dev

```

### 2. Github Initialization

```sh
git init
git add .
git commit -m "Initial commit"

```

```sh
# Link to a GitHub Repository
git remote add origin <your-repo-url>
# Push Your Code to GitHub
git push -u origin main
# or If you don't need the remote changes:
git push -f origin main


```

## Union type

It allows us to have multiple types for one variable.

```ts
let age: number | string = 20;
age = 26;
console.log(age);
age: "twenty six";
console.log(age);
```

Even though we have assigned two different values, but because we have already specified the type, typescript does not complain about it.
We can have either number or string.

## Any type

by using `any` keyword, we can assign any type of values to our variables.

## Arrays

```ts
let number: number[] = [2, 4, 6, 8, 10];
console.log(number);

let names: string[] = ["ahmad", "ayaan"];
console.log(names);

// Error
// let kings: [] = ["king"];
// console.log(kings);
```

We can also have different kind of fruits

```ts
const fruits: (boolean | number | string)[] = ["apples", "peaches", 12];
console.log(fruits);
```

## Objects

```ts
let apple: { name: string; year: number } = { name: "apple", year: 1983 };
console.log(apple);

let mouse = { name: "dell", cost: 23 };
let mic = { name: "sony", cost: 40 };
let coffee = { name: "david off" };

let items: { readonly name: string; cost?: number }[] = [mouse, mic, coffee];
console.log(items);
```

## Function

We can pass the type to the parameters and the arguments of a function.

```ts
function greeting(name: string) {
	console.log(`Hello ${name}`);
}
greeting("Ahmad");
```

#### 1. Optional parameter

When passing an optional parameter to a function, we need to pass a fall back or default value in case if the optional value is not provided, otherwise we will get error.

```ts
function totalCost(price: number, discount?: number): number {
	// It will causes the error in compilation time
	return price - discount;
}
let priceAfterDiscount = totalCost(100, 10);
console.log(priceAfterDiscount);
```

```ts
function totalCost(price: number, discount?: number): number {
	return price - (discount || 0);
}

let priceAfterDiscount = totalCost(100, 10);
console.log(priceAfterDiscount);
```

#### 2. Default parameters

We can pass the default values to our parameters as well

```ts
function totalCost(price: number, discount: number = 0): number {
	return price - discount;
}

let priceAfterDiscount = totalCost(100, 10);
console.log(priceAfterDiscount);
```

#### reduce

The reduce method in JavaScript is used to reduce an array to a single value by applying a function to each element of the array and accumulating the result.

```ts
array.reduce((accumulator, currentValue, currentIndex, array) => {
	// logic to apply
}, initialValue);
```

## Type Guarding

We can check the type of our parameters at run time and based on that execute our logic.

```ts
function multiply(input: string | number) {
	if (typeof input === "number") {
		console.log(input * 10);
	}
	console.log(`Hello ${input}`);
}

multiply(12);
multiply("Ahmad");
```

## Objects inside functions

If we are having objects as params, we need to use type annotation

```ts
function createEmploy({ id }: { id: number }): {
	id: number;
	isActive: boolean;
} {
	return { id, isActive: id % 2 !== 0 };
}

console.log(createEmploy({ id: 12 }));
 { id }: { id: number }, which means "destructure id from an object, where id is a number."
```

## Referencing vs Online

##### 1. Passing by reference

When we pass an object by reference, even if we have additional properties than than the ones specified at the function, we won't get an error.
If we pass an online object, we will get an error.

```ts
function createCompany(company: { name: string; field: string }): {} {
	return `${company.name} is to server in the field of ${company.field}`;
}
let companyDetails = {
	name: "Dhi",
	field: "Computer Science",
	year: 2022,
};
```

##### 2. Passing Inline Object:

When you pass an object inline (i.e., directly in the function call), TypeScript performs a stricter excess property check. If the object has extra properties that are not declared in the function's parameter type, TypeScript will throw an error.

```ts
// Error
console.log(createCompany(companyDetails));
console.log(
	createCompany({
		name: "Dhi",
		field: "Computer Science",
		year: 2022,
	})
);
```

### Why This Happens:

Pass by Reference (Variable): TypeScript trusts that when an object is stored in a variable, it might be used in different contexts and not all of its properties will necessarily be relevant. Thus, TypeScript allows you to pass such objects without errors, even if they contain extra properties.

Pass by Inline (Object Literal): TypeScript performs strict checks on object literals to ensure that only the required properties are present. This is because when an object is passed directly in a function call, TypeScript expects it to exactly match the type specified in the function signature.

## Type aliasing

It is a way to give a name to a type, it can represent any kind of data types.
We have to find a way to define a type property in one place and use that type for all of the same data.

```js
let dhi: { name: string, field: string, id: number } = {
	name: "Dhi",
	field: "Technology",
	id: 1,
};
let gfg: { name: string, field: string, id: number } = {
	name: "gfg",
	field: "Technology",
	id: 2,
};
let cornell: { name: string, field: string, id: number } = {
	name: "Cornell ",
	field: "Science",
	id: 3,
};

function createCompany(company: { name: string, field: string, id: number }): {
	name: string,
	field: string,
	id: number,
} {
	console.log(`${company.name} is to server in the field of ${company.field}`);
	return company;
}
```

#### After adding type

```ts
type Colleges = { name: string; field: string; id: number };
let dhi: Colleges = {
	name: "Dhi",
	field: "Technology",
	id: 1,
};
let gfg: Colleges = {
	name: "gfg",
	field: "Technology",
	id: 2,
};
let cornell: Colleges = {
	name: "Cornell ",
	field: "Science",
	id: 3,
};

function createCompany(company: Colleges): Colleges {
	console.log(`${company.name} is to server in the field of ${company.field}`);
	return company;
}
```

Usage of type aliasing

```ts
type StringOrNumber = string | number;
let value: StringOrNumber;
value = 10;
value = "hello";
```

```ts
type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";
```

### Challenge

```ts
type Employees = { name: string; department: string; id: number };
type Manager = { name: string; employees: Employees[]; id: number };
type Union = Employees | Manager;

function staffDetails(staff: Union) {
	if ("employees" in staff) {
		console.log(staff.employees.length);
	} else {
		console.log("person is an employee");
	}
}

let dhi: Employees = {
	name: "Ahmad",
	department: "Technology",
	id: 1,
};
let manager: Manager = {
	name: "John",
	id: 2,
	employees: [dhi],
};

staffDetails(dhi); // Output: "Ahmad is an employee in the Technology department."
staffDetails(manager); // Output: "John is a manager with 1 employees."
```

#### If there are similar properties

```ts
type Employees = { name: string; department: string; id: number };
type Manager = { name: string; id: number; department: string; salary: number };
type Union = Employees & { salary: number };

let dhi: Employees = {
	name: "Ahmad",
	department: "Technology",
	id: 1,
};
let manager: Union = {
	name: "John",
	id: 2,
	department: "Gen AI",
	salary: 1203223,
};
```

```ts
type Employees = { name: string; department: string; id: number };
type Union = Employees & { salary: number };

let dhi: Employees = {
	name: "Ahmad",
	department: "Technology",
	id: 1,
};
let manager: Union = {
	name: "John",
	id: 2,
	department: "Gen AI",
	salary: 1203223,
};
```

## Interface

#### 1. Type aliasing

```ts
type Book = {
	isbn: number;
	title: string;
	author: string;
	genera: string;
};
const deepWork: Book = {
	isbn: 123,
	title: "Deep learning with python",
	author: " François Chollet",
	genera: "Artificial Intelligence",
};
```

#### 2. Interface

```ts
interface Book {
	isbn: number;
	title: string;
	author: string;
	genera: string;
}

const python: Book = {
	isbn: 123,
	title: "Deep learning with python",
	author: " François Chollet",
	genera: "Artificial Intelligence",
};
```

## Arrow functions

Inside an object, we cannot access to the current object's property using `this`, because `this` points to a global object rather than the local object we are currently working on.

## Interface merging and extension

### 1. Merging

```ts
interface Person {
	name: string;
	getDetails(): void;
}
// Merging age property and type
interface Person {
	age: number;
}
let ahmad: Person = {
	name: "Ahmad",
	age: 26,
	getDetails: function () {
		console.log(`${this.name} is ${this.age} years old`);
	},
};
```

### 2. Extension

We can extend the interface of one object on the interface of another object.
We use `extends` keyword to extent the property.

```ts
interface Employee extends Person {
	id: number;
}
```

Employee interface extends on top of person types, but not vice versa. For instance, the person type don't have access to type property.

```ts
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
```

## Type predicate

We tell what kind of object a function should return.

We are asserting adn telling it should return a manager apart from boolean.

```ts
function isManager(employee: Manager | DogOwner | Person): employee is Manager {
	if ("managePeople" in employee) {
		return true;
	}
	return false;
}
```

## Difference between type aliases and interfaces

- Interfaces are used to define shape of an object.
- Type aliased can be used to represent primitive types, union types, intersection types, ets.

```ts
// literal type
type Theme = "dark" | "light";
// primitive type
type age = number | string;
```

- Interfaces can be implemented using classes, while type aliases cannot.
- Interfaces can be merged using declaration merging while type aliases cannot be merged like this.

## tuples

tuples are a special type of array that allow us to define an array with a fixed number of elements, where each element can have a different.

tuples are special types of arrays with fixed types and lengths at the time of declaration. However, once created, tuples can grow dynamically using methods like push().

```ts
let info: [string, number] = ["Ayaan", 24];
console.log(info);
```

Although TypeScript doesn't prevent adding more elements to a tuple via push(), the types of the added elements must still match one of the declared types in the tuple (in this case, number | string).

#### readonly

```ts
let numbers: [number, string, number] = [1, "2", 3];
numbers.push(100);
numbers.push(100);
numbers.push(100);
numbers.push("100");
numbers.push(false); // TS will complain as boolean type is not mentioned while initializing the tuple
console.log(numbers); // [1, '2', 3, 100, 100, 100, '100']
```

If we don't add the readonly property, elements can be added or removed.

```ts
let numbers: readonly [number, string, number] = [1, "2", 3];
// The below operations are not allowed as it is read only.
numbers.push(100);
numbers.push("100");
numbers.push(false);
console.log(numbers);
```

## enums

an enum (short for "enumeration") is a way to define a set of named constants. It allows us to define a collection of related values that can be numbers or strings, making the code more readable and easier to maintain.

#### There are two main types of enums in TypeScript:

- Numeric Enums
- String Enums

##### 1. Numeric Enums

By default, enums in TypeScript are numeric and start from 0. You can override the starting value if needed.

First example

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

Second example:

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

Example

```ts
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
```

## Assertion

If we know about the type of our objects more than typescript, lets help typescript.

The keyword that helps typescript is `as`.

```ts
let king: any = "Abullah";
const lenghtOfString: number = (king as string).length;
console.log(lenghtOfString);
```

###### JSON.parse()

a method that converts a JSON string into a JavaScript object.

## Unknown

unknown is a type that represents any value but is safer to work with compared to any.

#### Key Characteristics of unknown

###### Type Safety:

You cannot directly perform operations on a value of type unknown without first asserting its type or narrowing it down. This prevents potential runtime errors that might occur with any.

###### Type Checking:

Before using a value of type unknown, you must check its type or use type assertions to tell TypeScript what type it should be treated as.

```ts
let randomValue: unknown;

randomValue = 10;
randomValue = "The emperror Ayaan Ali and the regional king Ramprabudh induri.";
console.log(randomValue);

// Once we do some operation, we need check the type.
// console.log(randomValue.length); // Error

if (typeof randomValue === "string") {
	console.log("Length after checking its type", randomValue.length);
}
```

#### Usage

```ts
function runCode() {
	const x = 100;
	if (x > 10) {
		throw new Error(`${x} is > 10`);
	} else {
		throw "Some unknown error";
	}
}

try {
	runCode();
} catch (error) {
	// error is type unknown and we don't know if it has the message property. that is why we have to check if it is an instance of type error.
	if (error instanceof Error) {
		console.log(error.message);
	} else {
		console.log(error);
	}
}
```

## never

never is a type that represents the type of values that never occur, we cannot assign any value to a variable of type never.

```ts
let x: never = 10; // Error, we cannot assign any value here.
```

One other use case is when we handle all the conditions.

## ES-6 Modules

Everything we put in a file, by default it will be placed in global scope and we cannot use it in any other place.

For instance if we define a variable in one file, we cannot use the same variable name in any other file.

```ts
first.ts;
let x = 10;
```

```ts
second.ts;
let x = 12;
```

#### Two solutions

1. If we add `import` or `export` in our file, then type script will treat it as modules.

2. Add the `moduleDetection": "force",` in `tsconfige.json`.

```json
{
	"compilerOptions": {
		"target": "ES2020",
		"useDefineForClassFields": true,
		"module": "ESNext",
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
		"skipLibCheck": true,

		/* Bundler mode */
		"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"isolatedModules": true,
		"moduleDetection": "force",
		"noEmit": true,

		/* Linting */
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noFallthroughCasesInSwitch": true
	},
	"include": ["src"]
}
```
