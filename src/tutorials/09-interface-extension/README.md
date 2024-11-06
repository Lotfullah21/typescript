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
