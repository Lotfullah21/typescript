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
			// default case, when we have additional action.type that we did not handle in action.type, we will be assigning a value to never type variable.
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
