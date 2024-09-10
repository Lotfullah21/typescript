import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
	id: z.string(),
	image: z.string(),
	name: z.string(),
	info: z.string(),
	price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const rawData: Tour[] = await response.json();
		// Adding some checks at run time.
		const result = tourSchema.array().safeParse(rawData);
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

const tours = await fetchData(url);
const toursData = tours.map((tour) => {
	console.log(tour.image);
});
console.log(toursData);
