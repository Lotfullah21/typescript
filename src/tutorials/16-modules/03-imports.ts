import { name } from "./02-exports";
import mark from "./02-exports";
import { greeting } from "./02-exports";
// a good practice to add `type` before the name of the type
import { type Themes } from "./02-exports";

// import mark, { name, greeting } from "./02-exports";

console.log(name);
greeting(name);
console.log(mark);

const dark: Themes = "dark";
console.log(dark);
