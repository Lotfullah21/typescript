function processData(
	input: string | number,
	config: { reverse: boolean } = { reverse: false }
) {
	if (typeof input === "number") {
		return input * input;
	}

	if (typeof input === "string" && config.reverse === true) {
		return input.split("").reverse().join("").toUpperCase();
	}
	if (typeof input === "string") {
		return input.toUpperCase();
	}
}

const sq = processData(10);
const name = processData("Ahmad");
const newData = processData("Ahmad", { reverse: true });
console.log(sq);
console.log(name);
console.log(newData);
