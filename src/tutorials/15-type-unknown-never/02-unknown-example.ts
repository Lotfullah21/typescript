function runCode() {
	const x = 100;
	if (x > 10) {
		throw new Error(`${x} is > 10`);
	} else {
		throw "Some unknown error";
	}
}

try {
	runCode();
} catch (error) {
	// error is type unknown and we don't know if it has the message property. that is why we have to check if it is an instance of type error.
	if (error instanceof Error) {
		console.log(error.message);
	} else {
		console.log(error);
	}
}
