function greeting(name: string) {
	console.log(`Hello ${name}`);
}
greeting("Ahmad");

function mul(message: string, ...nums: number[]): string {
	const doubled = nums.map((num) => num * 2);
	const total = doubled.reduce((accumulator, currentNumber) => {
		return accumulator * currentNumber;
	}, 1);
	return `The total number is ${total}`;
}

console.log(mul("Hello", 1, 2, 2, 3));

// Type guarding
function multiply(input: string | number) {
	if (typeof input === "number") {
		console.log(input * 10);
	}
	console.log(`Hello ${input}`);
}

multiply(12);
multiply("Ahmad");
