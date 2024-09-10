type valueType = string | null | undefined;

function printLength(input: valueType) {
	if (input) {
		console.log(input.length);
	} else {
		console.log("No string available");
	}
}

printLength(undefined); // No string available"
printLength("Hello Joseph"); // 12
printLength(""); //No string available"
