## Interface

interface is used to define shape of an object, it specifies the properties and types of values an object should have.

#### Benefits of Using Interfaces

- Type safety: Ensures objects meet the required structure, reducing errors.
- Readability and maintainability: Clearly defines what shape data should have.
- Supports structural typing: Compatible with other objects of the same shape, even if they don’t explicitly implement the interface.

- ##### Syntax

```ts
interface var_name {
	object_property: object_property_type;
}
```

- ##### Examples

```ts
interface Student {
	id: number;
	name: string;
	email: string;
}

const Ahmad: Student = {
	name: "ahmad",
	email: "ahmad@gmail.com",
	id: 1,
};
```
