enum Directions {
	UP,
	RIGHT,
	DOWN,
	LEFT,
}

const up: Directions = Directions.UP;
console.log("right enum value ", up); // 0

// adding custom integer values

enum CustomDirections {
	UP = 10,
	RIGHT = 20,
	DOWN = 30,
	LEFT = 40,
}

const left: CustomDirections = CustomDirections.LEFT;
console.log("left enum value =", left); // 40
