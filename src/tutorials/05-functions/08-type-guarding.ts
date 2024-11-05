function guard(param: number | string) {
	if (typeof param === "number") {
		console.log(2 * param);
	} else {
		console.log(param.toUpperCase());
	}
}

const result = guard(12);
const ans = guard("ahmad");
