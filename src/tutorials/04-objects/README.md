## Types for objects

To add a type for objects, we add the type for each object property before hand.

```ts
var_type {property:type, property1:type} = {property:value, property1:value}
```

For instance,

```ts
let computer: { name: string; founded_year: number } = {
	name: "apple",
	founded_year: 2024,
};
```

Now, we cannot assign to its name a different data type.

```ts
// Error
computer.founded_year = "2024";
```

## Note

Notice that when annotating the type of the object inside `{}`, we have used `;` to separate the params unlike the real object where instead of `;`, we use `,`.

- Annotating the object

```ts
let computer: { name: string; founded_year: number };
```

- creating a real object

```ts
computer = {
	name: "apple",
	founded_year: 2024,
};
```

## Array of objects

We might be having an array of objects, we add the type object properties we expect and also add an `[]` at the end of the object.

```ts
var_type: {property:type, property1:type}[] = [obj1, obj2]
```

We are saying we expect an array of objects with object having `property and property1` or object having this particular shape with the following values.

If we want some object property to be optional, we add `property?:type`

```ts
import { number, string } from "zod";

let company: { name: string; founded_year: number } = {
	name: "apple",
	founded_year: 2024,
};

let gpt = { name: "Open AI", founded_year: 2015 };
let deepMind = { name: "Deep Mind", founded_year: 2010 };*
let hgface = {
	name: "Hugging face",
	founded_year: 2016,
	importance: "Crucial",
};
```

## read only

by adding `read only` before a property, only the read option is available and the value of that property cannot be changed.

```ts
let AICompanies: {
	readonly name: string;
	founded_year: number;
	importance?: string;
}[] = [gpt, deepMind, hgface];
AICompanies[0].name = "Apple"; // Error
```
