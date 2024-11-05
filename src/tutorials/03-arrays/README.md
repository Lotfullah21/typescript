## array type

When having an array of values and to define a type for them, we use the following syntax.

```ts
var_type var_name: array_type[]=[values]
```

`numbers` can take an array of numbers

```ts
let numbers: number[] = [2, 4, 6, 8, 10];
console.log(numbers);
```

The moment we try to add any other value, it will raise an error.

```ts
let numbers: number[] = [2, 4, 6, 8, 10, "new number"];
console.log(numbers);
```

`new number` which is a string cannot be added here.

### Important

If we create without any expected values, it is going to raise an `error` when we add a value to it. Because TS will assume that it is always going to be an array.

```ts
let nums: [] = [];
```

```ts
let kings: [] = ["king"];
console.log(kings);
```

## Union types in arrays

A unions of types can be used when there are different types of values in an array.

```ts
const fruits: (boolean | number | string)[] = ["apples", "peaches", 12, false];
fruits.push("almond");
console.log(fruits);
```

#### Note

Now, only the operations that are specific to the types we have added can be applied to the array.
We won't be able to push number 12 since it it not a string `newFruits.push(12);

```ts
const newFruits: string[] = ["apples", "peaches"];
console.log(newFruits);
```
