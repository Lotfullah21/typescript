function generateArray(length: number, value: string): string[] {
	let result: string[] = [];
	result = Array(length).fill(value);
	return result;
}

console.log(generateArray(4, "hello"));

function createArray<T>(length: number, value: T): T[] {
	let result: T[] = [];
	result = Array(length).fill(value);
	return result;
}
console.log(createArray<string>(4, "hello"));

let stringsArray = createArray<string>(12, "hi");
let numbersArray = createArray<number>(12, 10);
let booleanArray = createArray<boolean>(12, false);

console.log(stringsArray, numbersArray, booleanArray);
