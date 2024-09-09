type Employees = { name: string; department: string; id: number };
type Manager = { name: string; id: number; department: string; salary: number };
type Union = Employees & { salary: number };

let dhi: Employees = {
	name: "Ahmad",
	department: "Technology",
	id: 1,
};
let manager: Union = {
	name: "John",
	id: 2,
	department: "Gen AI",
	salary: 1203223,
};
