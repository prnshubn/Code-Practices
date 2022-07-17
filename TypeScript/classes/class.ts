class myClass {
	x: number;
	constructor(x: number) {
		this.x = x;
	}
	value(x: number) {
		return "The value of x is " + this.x;
	}
}
let myObj = new myClass(30);
console.log(myObj.value);
