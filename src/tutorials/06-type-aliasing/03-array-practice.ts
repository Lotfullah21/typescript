type Student = { name: string; id: number };
type Manager = { name: string; id: number; employees: Student[] };
type Union = Student | Manager;

function checkInfo(info: Union) {
	if ("employees" in info) {
		console.log(`${info.name} manages ${info.employees.length} people`);
	} else {
		console.log("the info belongs to a student");
	}
}

const ahmad: Student = { name: "ahmad", id: 1 };
const joseph: Student = { name: "joseph", id: 2 };
const ayaan: Manager = { name: "Ayaan", id: 1, employees: [ahmad, joseph] };

checkInfo(ahmad);
checkInfo(joseph);
checkInfo(ayaan);
