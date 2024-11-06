## Interface merging

When we import an interface from other files, we can add our own property in our file, it is called merging.

```ts
interface Country {
	name: string;
	location: string;
}

interface City {
	name: string;
	population: number;
}
// merging
interface Country {
	population: number;
}
```
