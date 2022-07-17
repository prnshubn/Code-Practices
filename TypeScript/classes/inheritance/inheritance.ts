class Car {
	color: string;
	constructor(color: string) {
		this.color = color;
	}
}
class Audi extends Car {
	price: number;
	constructor(color: string, price: number) {
		super(color);
		this.price = price;
	}
	display(): void {
		console.log("Color of Audi car: " + this.color);
		console.log("Price of Audi car: " + this.price);
	}
}
let obj = new Audi("Black", 8500000);
obj.display();
