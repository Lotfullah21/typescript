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

when we define few specific types, then the variable cannot take any other value other than those.
We say, the type can be any of them.

```ts
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
requestStatus = "error";
console.log(requestStatus);
```

Now, `requestStatus` can take only one of the three types(` "pending" | "success" | "error"`)

## Any

by using `any` keyword, we can assign any type of value to a variable.

```ts
// Type any
let newNumber: any = 24;
newNumber = "any number";
console.log(newNumber);
newNumber = 23;
console.log(newNumber);
```

Now, `newNumber` variable can take any kind of values.

## Undefined

When we are not sure what will be the type of our value, we can use `undefined`.
For instance, when we run a loop and based on the value of the loop, the type of the variable is going to be determined.

```ts
const books = ["Deep learning with python", "shoe dog", "sapiens"];
let foundBook: string | undefined;
for (let subject of books) {
	if (subject === "shoe dog") {
		foundBook = subject;
		break;
	}
}
console.log(foundBook?.length);
```

Why not use `any` if we are not sure?
The whole purpose of TS is to add types to our variable and type `any` a way to escape from this purpose which we don't want.
