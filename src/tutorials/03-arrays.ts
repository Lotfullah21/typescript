let number: number[] = [2, 4, 6, 8, 10];
console.log(number);

let names: string[] = ["ahmad", "ayaan"];
console.log(names);

// Error
// let kings: [] = ["king"];
// console.log(kings);

const fruits: (boolean | number | string)[] = ["apples", "peaches", 12];
fruits.push("almond");
console.log(fruits);

const newFruits: string[] = ["apples", "peaches"];
// We won't be able to push number 12 since it it not a string
// newFruits.push(12);
console.log(newFruits);
