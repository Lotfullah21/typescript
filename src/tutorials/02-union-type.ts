let age: number | string = 20;
age = 26;
console.log(age);
age: "twenty six";
console.log(age);

let requestStatues: "pending" | "success" | "error" = "pending";
requestStatues = "success";
requestStatues = "error";
requestStatues = "error";
console.log(requestStatues);

// Type any
let newNumber: any = 24;
newNumber = "any number";
console.log(newNumber);
newNumber = 23;
console.log(newNumber);

// undefined property

const books = ["Deep learning with python", "shoe dog", "sapiens"];
let foundBook: string | undefined;
for (let subject of books) {
	if (subject === "shoe dog") {
		foundBook = subject;
		break;
	}
}
console.log(foundBook?.length);
