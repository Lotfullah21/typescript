interface Book {
	isbn: number;
	readonly title: string;
	author: string;
	genera?: string;
	printTitle(): void;
	printMessage(message: string): void;
	printSomething: (someValue: number) => number;
}

const python: Book = {
	isbn: 123,
	title: "Deep learning with python",
	author: " François Chollet",
	genera: "Artificial Intelligence",
	printTitle() {
		console.log(this.title);
	},
	printMessage(message) {
		console.log(`${message} Enjoy reading ${this.title} by ${this.author}`);
	},
	printSomething: (x) => {
		return x;
	},
};

console.log(python);
python.printTitle();
python.printMessage("Happy reading!!!!");
console.log(python.printSomething(120));
