interface Book {
	isbn: number;
	readonly title: string;
	author: string;
	genera?: string;
	printSomething: (someValue: number) => number;
}

const python: Book = {
	isbn: 123,
	title: "Deep learning with python",
	author: " François Chollet",
	genera: "Artificial Intelligence",
	printSomething: (x) => {
		return x;
	},
};

console.log(python);
console.log(python.printSomething(120));
