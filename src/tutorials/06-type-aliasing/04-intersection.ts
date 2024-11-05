type Company = { name: string; goal: string };
type Intersection = Company & { ceo: string };
let apple: Company = {
	name: "apple",
	goal: "get the best product.",
};
console.log(apple);

let nvidia: Intersection = {
	name: "Nvidia",
	goal: "to provide the gpus",
	ceo: "Jensen Huang ",
};
console.log(nvidia);
