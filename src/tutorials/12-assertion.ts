// Assertion

// let king: any = "Abullah";
// const lenghtOfString: number = (king as string).length;
// console.log(lenghtOfString);

// Unknown

// function runCode() {
// 	const x = 100;
// 	if (x > 10) {
// 		throw new Error(`${x} is > 10`);
// 	} else {
// 		throw "Some unknown error";
// 	}
// }

// try {
// 	runCode();
// } catch (error) {
// 	// error is type unknown and we don't know if it has the message property. that is why we have to check if it is an instance of type error.
// 	if (error instanceof Error) {
// 		console.log(error.message);
// 	} else {
// 		console.log(error);
// 	}
// }

// never

// let x: never = 10;

type Direction = "north" | "south" | "west";

function checkDirections(direction: Direction): void {
	if (direction === "north") {
		console.log("north direction");
		return;
	}
	if (direction === "south") {
		console.log("south direction");
		return;
	}
	if (direction === "west") {
		console.log("west direction");
		return;
	}
	// after exhausting all the possibilities, the type will be never.
	direction;
}

checkDirections("north");

enum Color {
	Red,
	Blue,
	Yellow,
}

function getColor(color: Color) {
	switch (color) {
		case Color.Red:
			return "Red";

		case Color.Blue:
			return "Blue";
		case Color.Yellow:
			return "Yellow";
		default:
			// at build time
			let unexpecteColor: never = color;
			throw new Error(`Unexpected color value at ${color}`);
	}
}
