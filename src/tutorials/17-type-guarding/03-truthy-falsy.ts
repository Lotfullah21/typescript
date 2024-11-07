type valueType = string | null | undefined;

function printLength(input: valueType) {
	if (input) {
		console.log(input.length);
	} else {
		console.log("not a string");
	}
}

printLength(undefined);
printLength("Hello Joseph");
printLength("");
