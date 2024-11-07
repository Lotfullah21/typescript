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

// Union type for Action
type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
	switch (action.type) {
		case "increment":
			// Handle increment action
			action.amount = action.amount + state;
			return action;

		case "decrement":
			// Handle decrement action
			action.amount = action.amount - state;
			return action;

		default:
			// Exhaustiveness check: if any other action type is added to Action,
			// TypeScript will catch it here
			const unexpectedAction: never = action;
			throw new Error(`Unexpected Action ${action}`);
	}
}

// Call the reducer function with a sample state and action
const newState = reducer(15, {
	type: "increment",
	user: "king",
	timeStamp: 123456,
	amount: 12,
});

console.log(newState);
