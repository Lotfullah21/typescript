class Book {
	title: string;
	readonly author: string;
	private checkedOut = false;
	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
	}
	checkout() {
		this.checkedOut = true;
	}
}

const book = new Book("machine learning", "chollet");
book.checkout();
console.log(book);
