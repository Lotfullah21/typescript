## fetch url

```ts
const url = "http://127.0.0.1:8000/courses/";
async function fetchData(url: string) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "some unknown error in the universe.";
		console.log(errorMessage);
		return [];
	}
}
fetchData(url);
```

Once we assign the returned data to a variable and map on it, TS is going to complain that I don't know what i am getting, how can i do an operation on them.

```ts
const url = "http://127.0.0.1:8000/courses/";
async function fetchData(url: string) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "some unknown error in the universe.";
		console.log(errorMessage);
		return [];
	}
}
const data = await fetchData(url);
// Error, ts does not know what it's getting.
const newData = data.map((data)=>return data.id)
```

### How to provide a type to our response.

```ts
const url = "http://127.0.0.1:8000/courses/";

async function fetchData(url: string): Promise<Course[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const data: Course[] = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "some unknown error in the universe.";
		console.log(errorMessage);
		return [];
	}
}

type Course = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
};

const courses = await fetchData(url);
const courseData = courses.map((course) => {
	return course.thumbnail;
});
console.log("Course data", courseData);
```

### What is the issue here?

Let's say we added

```ts
type Course = {
	title: string;
	description: string;
	thumbnail: string;
	info: number;
	id: boolean;
};
```

TS cannot check whether the given prop with this type exist or not, we can add whatever we want still we won't get an error.

#### What is the solution?

We can do the runtime check with the help of a library called `zod`.

```bash
npm install zod
```

```ts
import { boolean, z } from "zod";

const url = "http://127.0.0.1:8000/courses/";

const courseSchema = z.object({
	id: z.string(),
	description: z.string(),
	level: z.string(),
	language: z.string(),
	is_published: boolean(),
});

type Course = z.infer<typeof courseSchema>;

async function fetchData(url: string): Promise<Course[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const rawData: Course[] = await response.json();
		// Adding some checks at run time.
		const result = courseSchema.array().safeParse(rawData);
		console.log(result);
		if (!result.success) {
			throw new Error(`Invalid data types: ${result.error}`);
		}
		return result.data;
	} catch (error) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "some unknown error in the universe.";
		console.log(errorMessage);
		return [];
	}
}

const courses = await fetchData(url);
const courseData = courses.map((course) => {
	console.log(course);
});
console.log(courseData);
```

### Checking at runtime

It is crucial to add the given snippet to enable checking at run time.

```ts
const rawData: Course[] = await response.json();
// Adding some checks at run time.
const result = courseSchema.array().safeParse(rawData);
```

`courseSchema.array().safeParse(rawData)` validates the fetched data, but it does not automatically throw an error if the data doesn’t match the schema. Instead, safeParse returns an object with two properties:

`success`: A boolean indicating if the data matched the schema.
`data or error`: If success is true, data contains the validated data. If success is false, error provides detailed information about what part of the data didn’t match the schema.

`const result = courseSchema.array().safeParse(rawData)`; is doing several things at once with the help of `zod:

`Creating an Array Schema`: `courseSchema.array()` creates a new zod schema that represents an array of objects following the structure defined by courseSchema. This tells zod that we expect rawData to be an array where each item should match the courseSchema.

`Parsing and Validating the Data`: `safeParse(rawData)` then takes rawData (the array of data fetched from the API) and tries to validate it against this array schema. safeParse does both parsing (checking that rawData is indeed an array) and validation (confirming that each item in the array matches courseSchema).
