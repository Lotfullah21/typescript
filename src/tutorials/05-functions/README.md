## Types in function

## Parameters

```ts
function functionName(param: type) {
	// function body
}
```

For parameters while creating the function, we have to add the type of the function to the expected argument.
If we do not add the type,unlike a simple variable, `any` cannot help us here.

## Return

Even though TS will infer what we returning from the function, but we have to explicitly mention what type of value we are expecting to be returned from this function.

```ts
function functionName(param: type) {
	// function body
}
```

```ts
function functionName(param: type): number {
	// function body
}
```

```ts
function addTwo(number: number): number {
	return 2 + number;
}
console.log(addTwo(3));
```

Now, the following snippet will throw an error, because we have explicitly mentioned what we are expecting to be returned from this function.

```ts
function addTwo(number: number): number {
	return "Greeting";
}
console.log(addTwo(3));
```

## Optional parameters

If we are using params value inside the function and we want that to be optional, we need to provide a fall back value, other wise it will through an error.

```ts
function calcPrice(price: number, discount: number): number {
	return price - discount;
}
const finalPrice = calcPrice(100, 20);
console.log(finalPrice);
```

Now, lets say some of the products might not have the discount, what is the solution?
Add the `?` in front of the params we want to be optional (`price`).

Try this

```ts
function calcPrice(price: number, discount?: number): number {
	return price - discount;
}
const finalPrice = calcPrice(100, 20);
console.log(finalPrice);
```

### Issue

Since, in some cases the values might not be present and the optional param will be undefined, but a function with optional parameter must work if the values is not provided, that is where the `fallback` value comes into picture.
`fallback value`: a value that is used in the absence of optional parameter

```ts
(optional parameter || fallback value);
```

The `||` operator will assign `optional parameter` value 0 if `optional parameter` is null, undefined, or any other falsy value (like "" or 0).

```ts
function calcPrice(price: number, discount?: number): number {
	return price - (discount || 0);
}
const finalPrice = calcPrice(100, 20);
console.log(finalPrice);
```

Another method to use if the value is not provided is using `default` parameter.

```ts
function calcPrice(price: number, discount: number = 0): number {
	return price - discount;
}

const finalPrice = calcPrice(100, 20);
console.log(finalPrice);
```

## rest parameter

by using rest operator `(...)`, we the items inside an array.

```ts
function total(message: string, ...numbers: number[]): string {
	const e = 2.71;
	const exponential = numbers.map((num) => e ** num);
	const total = numbers.reduce((accumulator, currentValue) => {
		accumulator = accumulator + currentValue;
		return accumulator;
	}, 0);
	console.log(exponential);
	return `${message} ${total}`;
}
const result = total("the total values is", 1, 2, 3, 4, 5);
console.log(result);
```

From `reduce` method, always return a value, otherwise it does not work.

## void

It is a special type that represents the absence of a value, if added in a function, it means we are not expecting a return from the function and anything is returned, an error will be thrown.

```ts
function greeting() {
	console.log("Hello world");
}
```

```ts
function greeting1(): void {
	console.log("Hello world");
}
greeting1();
```

Both of the above function returns void, but in the later version, we explicitly added the function should return `void` or nothing and in the first example, it can return anything.

## type guarding

type guarding is a technique used to restrict the type of a variable within a specific code block.
basically, we are making sure that if we want to run a string method on a parameter, we have to make sure that the param is a string or if we want to run a number method, we have to make sure that the param is a number.

```ts

```

#### How Type Guards Work

```ts
function printLength(param: number | string): void {
	if (typeof param === "string") {
		console.log(param.length); // param is treated as a string here
	} else {
		console.log(param * 2); // param is treated as a number here
	}
}
```

Type guards use certain constructs (like typeof, instanceof, or custom predicates) to determine the variable's type at runtime and give the TypeScript compiler more precise information for type-checking purposes.

## object parameters

Objects also can be passed as a parameter to a function, but we have to annotated the type of values it is going to have.

```ts
function greeting(student: { name: string; age: number }) {
	console.log(`Welcome ${student.name}`);
}
greeting({ name: "Ahmad", age: 30 });
```

#### Directly getting a property

we can directly unpack the object param from an object and annotate its type.

```ts
function greeting({ name, age }: { name: string; age: number }) {
	console.log(`Welcome ${name}`);
}
greeting({ name: "Ahmad", age: 30 });
```

We are saying that we expect an object that will be having `name and age` as its property and their types are `string` and `number` respectively.

```ts
greeting({ name, age }: { name: string; age: number })
```
