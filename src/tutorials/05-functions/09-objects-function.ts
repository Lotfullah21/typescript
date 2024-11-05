function greeting(student: { name: string; age: number }) {
	console.log(`Welcome ${student.name}`);
}
greeting({ name: "Ahmad", age: 30 });
