let randomValue: unknown;

randomValue = 10;
randomValue = "The emperor Ayaan Ali and the regional king Ramprabudh induri.";
console.log(randomValue);

// Once we do some operation, we need check the type.
// console.log(randomValue.length); //  Error

if (typeof randomValue === "string") {
	console.log("Length after checking its type", randomValue.length);
}
