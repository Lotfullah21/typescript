## Type assertion

type assertions are used to tell the compiler to treat a variable as a specific type, even if TypeScript doesn’t infer it that way. They’re especially useful when working with variables of type `any`, as assertions allow you to specify the intended type and gain access to methods specific to that type.

```ts
let someValue: any = "Abullah";
// asserting that the variable definitely is of string type.
const strLength: number = (someValue as string).length;
console.log("length of the string =", strLength);
```

While type assertions are powerful, they should only be used when you're certain of the type. Using assertions incorrectly can lead to runtime errors or unexpected behavior, especially when working with any.

###### JSON.parse()

a method that converts a JSON string into a JavaScript object.
