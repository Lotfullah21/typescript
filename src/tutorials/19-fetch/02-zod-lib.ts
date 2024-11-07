import { z, boolean } from "zod";

// define your schema using zod
const courseSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	thumbnail: z.string(),
	level: z.string(),
	language: z.string(),
	is_published: boolean(),
});

// use zod to infer the TypeScript type from the schema
type Course = z.infer<typeof courseSchema>;

const url = "http://127.0.0.1:8000/courses/";

async function fetchData(url: string): Promise<Course[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}

		// fetch the raw data
		const rawData: any[] = await response.json();

		// validate the raw data using zod
		const result = courseSchema.array().safeParse(rawData);

		// if validation fails, throw an error
		if (!result.success) {
			throw new Error(`Invalid data types: ${result.error}`);
		}

		// return the validated data
		return result.data;
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error";
		console.log(errorMessage);
		return [];
	}
}

const courses = await fetchData(url);
const courseData = courses.map((course) => course.thumbnail);
console.log(courseData);
