## Interface

interface is used to define shape of an object, it specifies the properties and types of values an object should have.

#### Benefits of Using Interfaces

- Type safety: Ensures objects meet the required structure, reducing errors.
- Readability and maintainability: Clearly defines what shape data should have.
- Supports structural typing: Compatible with other objects of the same shape, even if they don’t explicitly implement the interface.

- ##### Syntax

```ts
interface interface_name {
	object_property: object_property_type;
}
```

- ##### Examples

```ts
interface Student {
	id: number;
	name: string;
	email: string;
}

const Ahmad: Student = {
	name: "ahmad",
	email: "ahmad@gmail.com",
	id: 1,
};
```

## Methods

```ts
interface Book {
	isbn: number;
	readonly title: string;
	author: string;
	genera?: string;
	printTitle(): void;
	printMessage(message: string): void;
}

const python: Book = {
	isbn: 123,
	title: "Deep learning with python",
	author: " François Chollet",
	genera: "Artificial Intelligence",
	printTitle() {
		console.log(this.title);
	},
	printMessage(message) {
		console.log(`${message} Enjoy reading ${this.title} by ${this.author}`);
	},
};

console.log(python);
python.printTitle();
python.printMessage("Happy reading!!!!");
```

## Arrow functions

unlike regular function, we cannot access to the current object's property using `this` in arrow function, because `this` points to a global object rather than the local object we are currently working on in an arrow function.

```ts
interface Book {
	isbn: number;
	readonly title: string;
	printSomething: (someValue: number) => number;
}

const python: Book = {
	isbn: 123,
	title: "Deep learning with python",
	printSomething: (x) => {
		return x;
	},
};

console.log(python);
console.log(python.printSomething(120));
```
