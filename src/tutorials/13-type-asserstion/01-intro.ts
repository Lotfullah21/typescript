let someValue: any = "Abullah";
// asserting that the variable definitely is of string type.
const strLength: number = (someValue as string).length;
console.log("length of the string =", strLength);
