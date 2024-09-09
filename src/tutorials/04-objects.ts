let apple: { name: string; year: number } = { name: "apple", year: 1983 };
console.log(apple);

let mouse = { name: "dell", cost: 23 };
let mic = { name: "sony", cost: 40 };
let coffee = { name: "david off" };

let items: { readonly name: string; cost?: number }[] = [mouse, mic, coffee];
console.log(items);
