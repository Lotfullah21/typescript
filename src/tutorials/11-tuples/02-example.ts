// tuples can be of multiple type
let info: [string, number] = ["Ayaan", 24];
console.log(info);
// adding readonly to make the tuple fixed length
let numbers: readonly [number, string, number] = [1, "2", 3];
console.log(numbers);
// adding an optional param
let ahmad: [string, number, string?] = ["ahmad", 24];
console.log(ahmad);
