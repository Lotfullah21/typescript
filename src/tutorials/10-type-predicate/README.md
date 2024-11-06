## type predicate

a type predicate is a special return type used in functions to assert the type of a parameter. It allows TypeScript to narrow down types based on custom logic, helping it infer a specific type after a type check.

A type predicate function returns a boolean but also includes a type assertion that refines the type within the function's scope.

```ts
function isType(arg: any): arg is Type {
	return /* some condition */;
}
```

```ts
interface Cat {
	name: string;
	meow: () => void;
}

function isCat(obj: any): obj is Cat {
	return obj && typeof obj.name === "string" && typeof obj.meow === "function";
}
```

### Example of a Type Predicate

Suppose you have an interface Cat and you want to create a function that checks if an object is a Cat.

```ts
interface Cat {
	name: string;
	meow: () => void;
}

function isCat(obj: any): obj is Cat {
	return obj && typeof obj.name === "string" && typeof obj.meow === "function";
}
```

```ts
const pet: any = { name: "Whiskers", meow: () => console.log("Meow!") };

if (isCat(pet)) {
	// TypeScript now knows pet is a Cat
	pet.meow(); // Valid, because `pet` is now considered a `Cat`
} else {
	console.log("Not a cat.");
}
```
