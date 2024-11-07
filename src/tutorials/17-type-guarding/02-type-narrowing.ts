type Apple = { company: "apple lnc"; price: number; saySomeThing(): void };
type Dell = { company: "dell lnc"; price: number; saySomeThing(): void };
type Computer = Apple | Dell;

function giveInfo(computer: Computer): void {
	if (computer.company === "apple lnc") {
		computer.saySomeThing = () => {
			console.log("Made for special people");
		};
	} else if (computer.company === "dell lnc") {
		computer.saySomeThing = () => {
			console.log("Made for all people");
		};
	}
	computer.saySomeThing();
}

const m1: Apple = { company: "apple lnc", price: 10000, saySomeThing() {} };
const xps: Dell = { company: "dell lnc", price: 100, saySomeThing() {} };

giveInfo(m1);
giveInfo(xps);
