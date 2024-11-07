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
	map: () => {};
};

const courses = await fetchData(url);
const courseData = courses.map((course) => {
	return course.thumbnail;
});
console.log("Course data", courseData);
