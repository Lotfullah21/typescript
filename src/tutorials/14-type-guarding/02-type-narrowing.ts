type Apple = { type: "apple"; price: number; saySomeThing(): void };
type Dell = { type: "dell lnc"; price: number; saySomeThing(): void };
type Computer = Apple | Dell;
function giveInfo(computer: Computer): void {
	if (computer.type === "apple") {
		computer.saySomeThing = () => {
			console.log("Made for special people");
		};
	} else if (computer.type === "dell lnc") {
		computer.saySomeThing = () => {
			console.log("Made for all people");
		};
	}
	computer.saySomeThing();
}

const m1: Apple = { type: "apple", price: 10000, saySomeThing() {} };
const xps: Dell = { type: "dell lnc", price: 100, saySomeThing() {} };

giveInfo(m1);
