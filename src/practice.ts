import { boolean, z } from "zod";

const url = "http://127.0.0.1:8000/courses/";

const courseSchema = z.object({
	id: z.number(),
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
