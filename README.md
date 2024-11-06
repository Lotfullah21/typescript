## Installation

### 1. Commands to an an app

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

## Sources

[vite-type-script](https://vite.dev/guide/)

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

## Type guarding

```ts
type valueType = string | Number | boolean;

function checkValue(input: valueType): valueType {
	if (typeof input === "string") {
		const newInput = input.toLowerCase();
		return newInput;
	} else if (typeof input === "number") {
		return input.toFixed(2);
	} else {
		return `boolean: ${input}`;
	}
}

const randomValue = Math.random();
const input =
	randomValue < 0.33 ? "Hello world" : randomValue < 0.66 ? 123.2323 : false;
const result: valueType = checkValue(input);
console.log(result);
```

### Equality Narrowing

It is a type of type narrowing that occurs when we use equality checks like === or !== in our code.

```ts
type Apple = { type: "apple"; price: number; saySomeThing(): void };
type Dell = { type: "dell lnc"; price: number; saySomeThing(): void };
type Computer = Apple | Dell;
function giveInfo(computer: Computer): void {
	if (computer.type === "apple") {
		computer.saySomeThing = () => {
			console.log("Made for special people");
		};
	} else if (computer.type === "dell lnc") {
		computer.saySomeThing = () => {
			console.log("Made for all people");
		};
	}
	computer.saySomeThing();
}

const m1: Apple = { type: "apple", price: 10000, saySomeThing() {} };
const xps: Dell = { type: "dell lnc", price: 100, saySomeThing() {} };

giveInfo(m1);
```

### Truthy falsy

We will check if it is truthy or falsy and add some functionality based on the type.

```ts
type valueType = string | null | undefined;

function printLength(input: valueType) {
	if (input) {
		console.log(input.length);
	} else if (typeof input === "undefined" || input === null) {
		console.log("No string available");
	}
}

printLength(undefined); // No string available"
printLength("Hello Joseph"); // 12
printLength(""); //
```

typeof input === undefined and typeof input === null are not valid because typeof returns strings like "undefined" and "object" for null.
We have to simply use `input===undefine or type===null`.

An empty string "" is falsy but still has a valid .length of 0, so it is handled correctly in the first if block.

A more general check for all falsy values would be

```ts
type valueType = string | null | undefined;

function printLength(input: valueType) {
	if (input) {
		console.log(input.length);
	} else {
		console.log("No string available");
	}
}

printLength(undefined); // No string available"
printLength("Hello Joseph"); // 12
printLength(""); //No string available"
```

## instance of

It is a way to check the constructor of an object.

```ts
try {
	throw `Hello king`;
} catch (error) {
	if (error instanceof Error) {
		console.log(`Hello from error type: ${error.message}`);
	} else {
		console.log(`Some unknown error.`);
	}
}
// Console
Some unknown error.
```

```ts
try {
	throw new Error(`From error type`)
} catch (error) {
	if (error instanceof Error) {
		console.log(`Hello from error type: ${error.message}`);
	} else {
		console.log(`Some unknown error.`);
	}
}
// Console
Hello from error type: Hello king2
```

## Predicate

In your current setup, person is either a Student (with a coding() method) or a User (with a login() method). However, you're attempting to directly log person.coding, which may not exist if person happens to be a User. This can result in undefined being logged when person is a User.

```ts
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

// console

The TypeError: person.coding is not a function
```

To fix this

The TypeError: person.coding is not a function occurs because we`` trying to log person.coding() before checking if coding is actually a method on the person object. This will cause an error if person is a User, as coding doesn't exist on User.

```ts
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

// Check if `person` has a `coding` method before trying to log it
if ("coding" in person) {
	console.log("This person is a Student.");
	person.coding(); // Call the `coding()` method if it's a Student
} else {
	console.log("This person is a User.");
	person.login(); // Call the `login()` method if it's a User
}
```

## Assertion

In TypeScript, type assertions are a way to override the TypeScript compiler's inferred types, allowing you to manually tell the compiler how to treat a specific value. Type assertions are essentially a way to say: "Trust me, I know the type of this value better than you do."

Type assertions allow you to tell the TypeScript compiler to treat a value as a specific type.
They are used to give more specific type information when TypeScript’s type inference is too general or when you know more about the type than the compiler does.
Type assertions don't perform any runtime checks, so it's up to you to ensure that your assertions are correct.

```ts
let value: any = 42;
let strValue = value as string; // Incorrect: value is not a string

console.log(strValue.length); // Runtime error: Cannot read property 'length' of a number
```

```ts
function isStudent(person: Person): person is Student {
	// person is a student if coding is not undefined.
	return (person as Student).coding != undefined;
}
```

## Type predicate

In TypeScript, the function signature function isStudent(person: Person): person is Student is called a type predicate. This signature means that the function will act as a type guard—if it returns true, TypeScript will understand that the type of person is Student.

The part person is Student in the function signature is a type predicate. It tells TypeScript that if the function returns true, the person parameter is of type Student.

```ts
function isStudent(person: Person): person is Student {
	// It means if it returns true, then person is a student.
	return "coding" in person;
}
```

#### 1.Function Return Type (person is Student):

This special return type tells TypeScript that when the isStudent function returns true, the argument person can safely be treated as a Student. This is helpful because Person is a union of two types (Student | User), and you need a way to distinguish between them.

#### 2.Type Guard in Action:

If isStudent(person) returns true, TypeScript will allow you to safely call person.coding() within the if block because it now knows that person is a Student.
If isStudent(person) returns false, TypeScript knows that person must be a User, so you can safely call person.login().

## Discriminated Unions and exhaustive check using the never type.

### Discriminated Unions

A discriminated union (also called tagged union or algebraic data type) is a pattern where all the types in a union have a common field (the discriminant) that allows TypeScript to distinguish between them. This is useful when you have a union of multiple object types and want to switch between them based on a common property.

```ts
type IncrementAction = {
	amount: number;
	timeStamp: number;
	user: string;
};
type DecrementAction = {
	amount: number;
	timeStamp: number;
	user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {}

const newStaet = reducer(15, { user: "king", timeStamp: 123456, amount: 12 });
```

We have two actions and they are the same, we should have a unique identifier to differentiate between the two.

### Exhaustive Check with the never Type

In your reducer function, the default case in the switch statement works by leveraging TypeScript’s never type to enforce exhaustive checks. This ensures that if you forget to handle a particular action.type, TypeScript will throw a compile-time error, helping prevent bugs due to unhandled cases.

```ts
type IncrementAction = {
	type: "increment";
	amount: number;
	timeStamp: number;
	user: string;
};
type DecrementAction = {
	type: "decrement";
	amount: number;
	timeStamp: number;
	user: string;
};
type WDecrementAction = {
	type: "wdecrement";
	amount: number;
	timeStamp: number;
	user: string;
};

type Action = IncrementAction | DecrementAction | WDecrementAction;

function reducer(state: number, action: Action) {
	switch (action.type) {
		case "increment":
			action.amount = action.amount + state;
			return action;
		case "decrement":
			action.amount = action.amount - state;
			return action;
		default:
			// default case, when we have additional action.type that we did not handle in action.type, we will be assigning a value to never type variable.
			const unexpectedAction: never = action;
			throw new Error(`Unexpected Action ${action}`);
	}
}

const newState = reducer(15, {
	type: "increment",
	user: "king",
	timeStamp: 123456,
	amount: 12,
});

console.log(newState);
```

#### Important

In the default case, the code expects that all possible action types should have been handled by the time it reaches this point. The line:

```ts
const unexpectedAction: never = action;
```

assigns action to a variable of type never. The never type expects that action will never be assigned a value, because all action types should have already been handled by the previous case statements.

If a new action type is added to the Action union (e.g., WDecrementAction), but you forget to handle it in the switch, the assignment of action to unexpectedAction will trigger a compile-time error. This is because TypeScript will realize that action is not of type never—there’s an unhandled case.

### Error Handling:

If the reducer function is called with an unrecognized action.type at runtime (which should never happen in a fully typed TypeScript codebase), the default case throws an error:

```ts
throw new Error(`Unexpected Action ${action}`);
```

# Generics

Generics in TypeScript allow you to write reusable, type-safe code by creating components that can work with a variety of types, rather than being limited to a single type. Generics are used in functions, classes, interfaces, and other structures to enable flexibility while preserving strong type-checking.

We don't want to create interface for every possible type, if we just set for a generic type, that can be used bu other types as well.

## 2. Function

For each kind of values, we have to write a separate function, but if we use generic it makes it much it much simple

```ts
function stringValue(arg: string): string {
	return arg;
}
function numberValue(arg: number): number {
	return arg;
}
function booleanValue(arg: boolean): boolean {
	return arg;
}
```

```ts
function genericValue<T>(arg: T): T {
	return arg;
}

const numValue = genericValue(12);
const stringValue = genericValue("ahmad");
const boolValue = genericValue(false);

console.log(numValue, stringValue, boolValue);
```

### Generic Array

Regular function with specific type

```ts
function generateArray(length: number, value: string): string[] {
	let result: string[] = [];
	result = Array(length).fill(value);
	return result;
}
```

Adding generic type to the function

```ts
function genericArray<T>(length: number, value: T): T[] {
	let result: T[] = [];
	result = Array(length).fill(value);
	return result;
}
console.log(genericArray<string>(4, "hello"));
```

More than one type also can be added.

```ts
function pair<T, U>(param1: T, param2: U): [T, U] {
	return [param1, param2];
}

let newPairs = pair<string, number>("hello 12", 90);
console.log(newPairs);
```

#### Extend

In TypeScript, when we use the `extends` keyword with a generic type, it constrains the type T to a certain type or set of types
In the given example, T can be either number or string.

```ts
// Extends in ts
function add<T extends string | number>(num: T): T {
	console.log(num);
	return num;
}
add("12");
```

Additional example

```ts
type Computer = {
	name: string;
	year: number;
};

type Car = {
	name: string;
	model: string;
};

type Student = {
	name: string;
	age: number;
};

let ahmad: Student = {
	name: "ahmad",
	age: 90,
};

function getInfo<T extends Student>(input: T) {
	console.log(input.name);
}

getInfo(ahmad);
```

```ts
It is going to complain, because ts does not know if the object has name property, we have to specify which object.
console.log(input.name);
```

```ts
// Narrowing it down to the shape we are expecting.
function getInfo<T extends Student | Car>(input: T) {
	console.log(input.name);
}
```

A more generic case would be to tell grab the name property from the object.

#### Default type

We can pass the default type to the interface and if we don't pass the type while using, the interface will use that default type.

```ts
interface StoreData<T = any> {
	data: T[];
}

const storeRandomData: StoreData = {
	data: [1, 2, 3],
};

console.log(storeNumbers);
```

# Fetch

It does not treat `404` as errors, it only treats network errors as error.

```ts
type Tours = {
	id: string;
	image: string;
	name: string;
	info: string;
	saySomething: () => {};
};
```

Even though we do not have `saySomething` property in our data property, it won't be checked at the run time, we have to find a way to check if the type is exactly matched with our response data.
We have two options, set our own or use an external library for validation. `zod` is a good library to use for validation.

[Zod](https://zod.dev/

## How to validate the data

```ts
const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string): Promise<Tours[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const data: Tours[] = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "some unknown error in the universe.";
		console.log(errorMessage);
		return [];
	}
}

type Tours = {
	id: string;
	image: string;
	name: string;
	info: string;
	map: () => {};
};

const tours = await fetchData(url);
const toursData = tours.map((tour) => {
	console.log(tour.image);
});
console.log(toursData);
```

## classes

It defines a blue print for the objects we want to create.
When we use classes in typescript, we need to define the type of values beforehand.

```ts
class Book {
	title: string;
	author: string;

	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
	}
}

const book = new Book("machine learning", "chollet");
console.log(book);
```

#### Default Property

We can pass default property and methods.

#### readonly

If we add `readonly` to any of the properties, we cannot change that property once the object is initiated.

```ts
class Book {
	title: string;
	readonly author: string;
	checkedOut = false;
	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
	}
}

const book = new Book("machine learning", "chollet");
book.checkedOut = true;
console.log(book);
```

#### Public vs Private

By default all properties are public, but if we add private in front of property, that property cannot be accessed from outside the class.

```ts
class Book {
	title: string;
	readonly author: string;
	private checkedOut = false;
	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
	}
	checkout() {
		this.checkedOut = true;
	}
}

const book = new Book("machine learning", "chollet");
book.checkout();
console.log(book);
```

## Interface

we using an interface called Asia, which defines the structure that a class should follow. Specifically, the Asia interface enforces that any class implementing it must have:

A name property of type string.
A location property of type string.
A method info() that returns void (no return value).
the class world can have additional properties, but these three are the must.

```ts
interface Asia {
	name: string;
	location: string;
	info(): void;
}

class World implements Asia {
	constructor(public name: string, public location: string) {}
	info() {
		console.log(`${this.name} is located in ${this.location}`);
	}
}

const afg = new World("Afghanistan", "Asia");
console.log(afg.info());
```
