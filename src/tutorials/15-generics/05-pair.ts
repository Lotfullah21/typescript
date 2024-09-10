function pair<T, U>(param1: T, param2: U): [T, U] {
	return [param1, param2];
}

let newPairs = pair<string, number>("hello 12", 90);
console.log(newPairs);

// Extends in ts
function add<T extends string | number>(num: T): T {
	console.log(num);
	return num;
}
add("12");

// More example

type Computer = {
	name: string;
	year: number;
};

type Car = {
	name: string;
	model: string;
};

type Student = {
	name: string;
	age: number;
};

let ahmad: Student = {
	name: "ahmad",
	age: 90,
};

function getInfo<T extends { name: string }>(input: T) {
	console.log(input.name);
}

getInfo(ahmad);
