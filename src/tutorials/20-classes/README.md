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

when using an interface called `Asia`, which defines the structure that a class should follow. Specifically, the `Asia` interface enforces that any class implementing this must have:

- A name property of type string.
- A location property of type string.
- A method info() that returns void (no return value).
- the class world can have additional properties, but these three are the must.

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
