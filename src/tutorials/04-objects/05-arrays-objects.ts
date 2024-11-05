let gpt = { name: "Open AI", founded_year: 2015 };
let deepMind = { name: "Deep Mind", founded_year: 2010 };
let hgface = {
	name: "Hugging face",
	founded_year: 2016,
	importance: "Crucial",
};

let AICompanies: { name: string; founded_year: number; importance?: string }[] =
	[gpt, deepMind, hgface];

console.log(AICompanies);
