// Extends in ts
function add<T extends string | number>(num: T): T {
	console.log(num);
	return num;
}
add("12");
