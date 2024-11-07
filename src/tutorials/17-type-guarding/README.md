## Discriminated Union

```ts
type IncrementAction = {
	amount: number;
	timeStamp: number;
	user: string;
};
type DecrementAction = {
	amount: number;
	timeStamp: number;
	user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {}

const newState = reducer(15, {
	type: "increment",
	user: "king",
	timeStamp: 123456,
	amount: 12,
});
console.log(newState);
```

##### Based on the above snippet, based on what criteria we can differentiate between them?

we can add a a property that is going to be differentiator here, let's add a type.

```ts
type IncrementAction = {
	type: "increment";
	amount: number;
	timeStamp: number;
	user: string;
};
type DecrementAction = {
	type: "decrement";
	amount: number;
	timeStamp: number;
	user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
	switch (action.type) {
		case "increment":
			action.amount = action.amount + state;
			return action;
		case "decrement":
			action.amount = action.amount - state;
			return action;
		default:
			// default case, when we have additional action.type that we did not handle in action.type, we will be assigning type never to the action.
			const unexpectedAction: never = action;
			throw new Error(`Unexpected Action ${action}`);
	}
}

const newState = reducer(15, {
	type: "increment",
	user: "king",
	timeStamp: 123456,
	amount: 12,
});

console.log(newState);
```

#### Why Use never in the Default Case?

Type Exhaustiveness Check: In TypeScript, never represents a type that has no possible value. When you assign action to a variable of type never, it ensures that all possible values for action.type have been handled. If any new types are added to Action later (for example, "reset"), TypeScript will raise an error in the default case because the never assignment would fail. This reminds you to handle any new action types.

Error Handling: If an unrecognized action type is encountered, the function throws an error. The never type ensures that TypeScript will prompt you to add new cases to the switch if any new action types are added to the Action union.

The const unexpectedAction: never = action; line checks if there are any unhandled cases for the action.type. If Action had a type other than "increment" or "decrement", TypeScript would raise an error because action could not be assigned to never.

This technique is especially useful in larger applications to ensure that no cases are accidentally missed, making the code more robust and less error-prone.
