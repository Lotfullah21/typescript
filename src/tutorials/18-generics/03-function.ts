function genericValue<T>(arg: T): T {
	return arg;
}

const numValue = genericValue<number>(12);
const stringValue = genericValue<string>("ahmad");
const boolValue = genericValue<boolean>(false);

console.log(numValue, stringValue, boolValue);
