/*
Data Types
number, boolean, string, array, tuple, any, undefined, void, null, enum, object, never

Ways of variable declaration
1) var [identifier] : [type-annotation] = value;
2) var [identifier] : [type-annotation];
3) var [identifier] = value;
4) var [identifier];
*/

let flag: boolean = false;
console.log("flag is " + typeof flag + " and value is " + flag);

let num: number = 10;
console.log("num is " + typeof num + " and value is " + num);

let firstName: string = "Priyanshu";
console.log("firstName is " + typeof firstName + " and value is " + firstName);

//array declaration #1
let names1: string[] = ["Priyanshu", "Sayan", "Akashdeep"];
console.log("names1 is " + typeof names1 + " and value is " + names1);

//array declaration #2
let names2: Array<string> = ["Priyanshu", "Sayan", "Akashdeep"];
console.log("names2 is " + typeof names2 + " and value is " + names2);

//Tuple declaration
let tup1: [number, string] = [14, "Priyanshu"];
console.log("tup1 is " + typeof tup1 + " and value is " + tup1);

//any declaration
let id: any;
id = 1;
console.log("id is " + typeof id + " and value is " + id);
id = "One";
console.log("id is " + typeof id + " and value is " + id);

//enum declaration
enum fruits {
	apple,
	mango,
	banana,
	orange,
}
let fruit: string = fruits[2];
console.log("fruits 2 is " + fruit);

//object declaration
let obj: Object;
