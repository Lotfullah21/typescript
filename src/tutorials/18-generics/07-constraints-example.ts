type Computer = {
	model: string;
	year: number;
};

type Car = {
	age: number;
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
