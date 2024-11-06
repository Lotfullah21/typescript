## tuples

tuples are special types of arrays with fixed types and length at the time of declaration. However, once created, tuples can grow dynamically using methods like push().

```ts
let info: [string, number] = ["Ayaan", 24];
console.log(info);
```

Although TypeScript doesn't prevent adding more elements to a tuple via push(), the types of the added elements must still match one of the declared types in the tuple (in this case, number | string).

#### Adding elements

```ts
let numbers: [number, string, number] = [1, "2", 3];
numbers.push(100);
numbers.push(100);
numbers.push(100);
numbers.push("100");
numbers.push(false); // TS will complain as boolean type is not mentioned while initializing the tuple
console.log(numbers); // [1, '2', 3, 100, 100, 100, '100']
```

### read only

By adding `readonly` before the `[]`, elements cannot be added or removed.

```ts
let numbers: readonly [number, string, number] = [1, "2", 3];
// The below operations are not allowed as it is read only.
numbers.push(100);
numbers.push("100");
numbers.push(false);
console.log(numbers);
```

##### Optional parameter

We can optional type as well and if we do not provide a value, no problem.

```ts
// adding an optional param
let ahmad: [string, number, string?] = ["ahmad", 24];
console.log(ahmad);
```
