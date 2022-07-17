function product1(x, y) {
	return x * y;
}
console.log(product1(5, 6));

//anonymous function or nameless function
let product2 = function (x, y) {
	return x * y;
};
console.log(product2(5, 6));

//arrow functions or lambda functions
let product3 = (x: number, y: number) => x * y;
console.log(product3(5, 6));
