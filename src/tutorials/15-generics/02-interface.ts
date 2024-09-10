interface genericInterface<T> {
	value: T;
	getSomething: () => T;
}

const stringValue: genericInterface<string> = {
	value: "12",
	getSomething() {
		return this.value;
	},
};
console.log(stringValue);
