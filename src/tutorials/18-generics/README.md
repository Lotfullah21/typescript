## Generics

Generics in TypeScript allow us to create flexible, reusable functions, interfaces, and classes that can work with a variety of types instead of just one. This is useful when we want to write a component or function that works with multiple types but still enforce some type safety.

```ts
function generateString(arg: string): string {
	return arg;
}

function generateNumber(arg: number): number {
	return arg;
}

function generateBoolean(arg: boolean): boolean {
	return arg;
}

console.log(
	generateBoolean(true),
	generateNumber(1),
	generateString("Hello world")
);
```

Can you see a repetitive pattern up there, the thing that is changing in the type of the argument and the returned value.
Generics can help us here.

### Generic Function

A generic function can accept the parameters that is specified by the caller of the function.

#### Syntax

```ts
function function_name<Identifier>(arg: Identifier): Identifier {}
```

```ts
function generate<T>(arg: T): T {
	console.log(arg);
	return arg;
}

generate(12);
generate(false);
generate("Hello world");
```

## Constraint type

For a generic, we can specify to which type, it should be constraints.
constraints can be added using `Generic_name extends type_name`.

##### Syntax

```ts

function function_name<Generic_name extends type_name>(){}`
```

```ts
// Extends in ts
function add<T extends string | number>(num: T): T {
	console.log(num);
	return num;
}
add("12");
```

Now, add function can take only strings or numbers as their type.

#### Second example

Now, let's print a property,

```ts
type Computer = {
	model: string;
	year: number;
};

type Car = {
	age: number;
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
```

With the following snippet, TS is going to complain, because with the generic type TS does not know whether the given type have a property of name or not.

```ts
function getInfo<T>(input: T) {
	console.log(input.name);
}
getInfo(ahmad);
```

Hence, to ensure it uses a specific object where it has `name` property, we use `extend` to constrain the object type.

```ts
<T extends Student>:
```

The `<T extends Student>` syntax means that T is a generic type parameter constrained to Student or any subtype of Student.
This ensures that input (the function parameter) has at least the same properties as Student, namely name: string and age: number. Therefore, we cannot pass an object that doesn’t have at least these properties.

```ts
getInfo<T extends { name: string }>{}
```

The function getInfo<T extends { name: string }>(input: T) accepts any type `T` as long as `T` has at least a name property of type string.

## Default Type

If we do not provide a type to a generic, generic will use that default type.

```ts
generic_name<T = any>
```

when `T=any`, it means if no generic type is provided, use any

```ts
interface StoreData<T = any> {
	data: T[];
}

const storeRandomData: StoreData = {
	data: [1, 2, 3],
};

console.log(storeRandomData);
```
