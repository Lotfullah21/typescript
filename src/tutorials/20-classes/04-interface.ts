interface Asia {
	name: string;
	location: string;
	info(): void;
}

class World implements Asia {
	constructor(public name: string, public location: string) {}
	info() {
		console.log(`${this.name} is located in ${this.location}`);
	}
}

const afg = new World("Afghanistan", "Asia");
console.log(afg.info());
