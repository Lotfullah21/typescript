## Unknown

unknown is a type that represents any value but is safer to work with compared to any.

The unknown type is useful when we need a type that could be anything but want TypeScript to enforce type checking before you operate on it

### Key Characteristics of unknown

- #### Type Safety:

You cannot directly perform operations on a value of type unknown without first asserting its type or narrowing it down. This prevents potential runtime errors that might occur with any.

- #### Type Checking:

Before using a value of type unknown, you must check its type or use type assertions to tell TypeScript what type it should be treated as.

##### Example

```ts
let randomValue: unknown;
randomValue = 10;
randomValue = "The emperor Ayaan Ali and the regional king Ramprabudh induri.";
console.log(randomValue);
```

```ts
console.log(randomValue.length); //  Error
```

When the type of a variable is unknown, we cannot use any method unless we do a type checking.

```ts
let randomValue: unknown;

randomValue = 10;
randomValue = "The emperor Ayaan Ali and the regional king Ramprabudh induri.";
console.log(randomValue);
// type checking before using a method.
if (typeof randomValue === "string") {
	console.log("Length after checking its type", randomValue.length);
}
```

## never

never is a type that represents the type of values that never occur, we cannot assign any value to a variable of type `never`.

```ts
let x: never = 10; // Error, we cannot assign any value here.
```

TS, by default assign type `never` to our variable if we checked all the conditions or exhausted all the conditions.

One other use case is when we handle all the conditions.
