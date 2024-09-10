const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string): Promise<Tours[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const data: Tours[] = await response.json();
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

type Tours = {
	id: string;
	image: string;
	name: string;
	info: string;
	map: () => {};
};

const tours = await fetchData(url);
const toursData = tours.map((tour) => {
	console.log(tour.image);
});
console.log(toursData);
