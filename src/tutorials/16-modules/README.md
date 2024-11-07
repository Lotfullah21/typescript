## Module

In TypeScript, files are not treated as modules by default unless they have some form of import or export statement. When TypeScript files are not considered modules, their top-level declarations (like variables, functions, and classes) are in the global scope. This means if you define a variable named x in one file, it can conflict with an x variable in another file.

```ts

project/
│
├── dir1/
│   └── file1.ts
│
└── dir2/
    └── file2.ts

```

```ts
// file1.ts
const x = 12;
```

```ts
// file2.ts
file2.ts;
const x = 10;
```

Now, TS is going to complain, because we have used same variable name (`x`) in two files.

## What is the solution?

## 1.

To prevent variables from being in the global scope, ensure each file is treated as a module. You can do this by adding an export or import statement to each file, even if they are not actually exporting or importing anything meaningful. This forces TypeScript to treat each file as a module, isolating its scope.

```ts
// file1.ts
export {}; // Makes this file a module
const x = 12;
```

```ts
// file2.ts
export {}; // Makes this file a module
const x = 10;
```

Regardless of directory structure, you need to add an export or import statement in each file to treat it as a module.

By adding export {}; at the top of each file, you signal to TypeScript to treat each as a module. This approach avoids conflicts in variable names across files because each file will now have its own scope.

## 2. fix tsconfig.json

```json
{
	"compilerOptions": {
		"target": "ES2020",
		"useDefineForClassFields": true,
		"module": "ESNext",
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
		"skipLibCheck": true,

		/* Bundler mode */
		"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"isolatedModules": true,
		// this line if not preset in the `tsconfig.json`
		"moduleDetection": "force",
		"noEmit": true,

		/* Linting */
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noFallthroughCasesInSwitch": true
	},
	"include": ["src"]
}
```

## file vs module

### 1. File

A file in TypeScript is simply any .ts file. It can contain any TypeScript code: variables, functions, classes, etc. However, by itself, a file doesn’t automatically define its own scope, which is why TypeScript treats any top-level declarations in a file as part of the global scope unless certain conditions are met.

### 2. Module

A module in TypeScript (or JavaScript) is a file that has either an import or export statement. By adding one of these, TypeScript considers the file to be a module, which means:

Its scope is isolated from other modules/files. Variables, functions, and classes declared at the top level in a module are private to that module unless explicitly exported.
Imports and exports allow code to be shared between modules. Anything declared as export can be imported into other modules.

##### what if x in module1 imported into module2 with an already defined x.

Two solutions

## 1. Import with Alias

If you have two variables with the same name in different modules and want to use both in a single module, you can use an import alias. This allows you to rename x when importing it, so you avoid conflicts in the scope of the importing file.

```ts
// file1.ts
export const x = 12;
```

```ts
// file2.ts
export const x = 10;
```

```ts
// file3.ts
import { x as xFromFile1 } from "./file1";
import { x as xFromFile2 } from "./file2";

console.log(xFromFile1); // 12
console.log(xFromFile2); // 10
```

## 2. Using a Namespace for Imports

If you’re working with a large number of exports, you might prefer to import the entire module under a namespace to avoid multiple aliases. This way, you can refer to x using the module’s namespace.

```ts
// file3.ts
import * as File1 from "./file1";
import * as File2 from "./file2";

console.log(File1.x); // 12
console.log(File2.x); // 10
```
