class Book {
	title: string;
	readonly author: string;
	private checkedOut = false;
	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
	}
	// Getter
	get info() {
		return `${this.title} by ${this.author}`;
	}
	// Setter
	set checkOut(input: boolean) {
		this.checkedOut = input;
	}
}

const book = new Book("machine learning", "chollet");
console.log(book.info);
book.checkOut = true;
console.log(book);
