interface myInterface {
	firstName: string;
	lastName: string;
	roll: number;
	display(): void;
}
class myClass implements myInterface {
	firstName: string;
	lastName: string;
	roll: number;
	constructor(firstName: string, lastName: string, roll: number) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.roll = roll;
	}
	display(): void {
		console.log("First name is: " + this.firstName);
		console.log("Last name is: " + this.lastName);
		console.log("Roll number is: " + this.roll);
	}
}
let myObj = new myClass("Priyanshu", "B", 14);
myObj.display();
