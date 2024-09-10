function checkInput(input: Date | string): void {
	if (input instanceof Date) {
		console.log(input.getFullYear().toString());
	} else {
		console.log(input);
	}
}

checkInput(new Date());
checkInput("2024-10-9");
// try {
// 	throw new Error(`Hello king`);
// } catch (error) {
// 	if (error instanceof Error) {
// 		console.log(`Hello from error type: ${error.message}`);
// 	} else {
// 		console.log(`Some unknown error.`);
// 	}
// }
