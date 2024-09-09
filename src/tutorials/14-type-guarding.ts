type Random = string | Number | boolean;

function checkValue(input: Random): Random {
	if (typeof input === "string") {
		const newInput = input.toLowerCase();
		return newInput;
	} else if (typeof input === "number") {
		return input.toFixed(2);
	} else {
		return `boolean: ${input}`;
	}
}

const randomValue = Math.random();
const input =
	randomValue < 0.33 ? "Hello world" : randomValue < 0.66 ? 123.2323 : false;
const result: Random = checkValue(input);
console.log(result);
