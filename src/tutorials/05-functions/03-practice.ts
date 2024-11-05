function checkName(name: string, names: string[]): boolean {
	for (name of names) {
		if (name === name) {
			return true;
		}
	}
	return false;
}
let res = checkName("ahmad", ["ahmad", "ali", "king"]);
console.log(res);
