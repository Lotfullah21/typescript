function pair<T, U>(param1: T, param2: U): [T, U] {
	return [param1, param2];
}

let newPairs = pair<string, number>("hello 12", 90);
console.log(newPairs);
