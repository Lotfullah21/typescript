interface Book {
	isbn: number;
	readonly title: string;
	author: string;
	genera?: string;
}

const python: Book = {
	isbn: 123,
	title: "Deep learning with python",
	author: " François Chollet",
	genera: "Artificial Intelligence",
};

console.log(python);
