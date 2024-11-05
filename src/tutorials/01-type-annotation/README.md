## Type annotation

before hand, the types are specified for a variable to avoid assigning a value from different data type than the specified type.

we will get the value in console, but overall it is not allowed and when building the products, it is going to through errors.

```ts
var_name: type = value;
```

```ts
let greeting: string = "Hello Word!!!";
greeting = "Salam Jahan!!!";
console.log(greeting);
```

Now, for greeting we cannot assign a value other than a string.

The bellow snippet will throw an error

```ts
let greeting: string = "Hello Word!!!";
greeting = 12;
```

## Boolean

Same goes with boolean.

```ts
let visited: boolean = false;
visited = true;
// visited = 12;
console.log(visited);
```

## Type Inference

Type script can infer the type of the variable based on provided value.

Now, in the following snippet it TS infer that type of visited is boolean.

```ts
let visited = false;
console.log(visited);
```
