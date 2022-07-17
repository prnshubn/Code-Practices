/*
Data Types
number, boolean, string, array, tuple, any, undefined, void, null, enum, object, never

Ways of variable declaration
1) var [identifier] : [type-annotation] = value;
2) var [identifier] : [type-annotation];
3) var [identifier] = value;
4) var [identifier];
*/
var flag = false;
console.log("flag is " + typeof flag + " and value is " + flag);
var num = 10;
console.log("num is " + typeof num + " and value is " + num);
var firstName = "Priyanshu";
console.log("firstName is " + typeof firstName + " and value is " + firstName);
//array declaration #1
var names1 = ["Priyanshu", "Sayan", "Akashdeep"];
console.log("names1 is " + typeof names1 + " and value is " + names1);
//array declaration #2
var names2 = ["Priyanshu", "Sayan", "Akashdeep"];
console.log("names2 is " + typeof names2 + " and value is " + names2);
//Tuple declaration
var tup1 = [14, "Priyanshu"];
console.log("tup1 is " + typeof tup1 + " and value is " + tup1);
//any declaration
var id;
id = 1;
console.log("id is " + typeof id + " and value is " + id);
id = "One";
console.log("id is " + typeof id + " and value is " + id);
//enum declaration
var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 0] = "apple";
    fruits[fruits["mango"] = 1] = "mango";
    fruits[fruits["banana"] = 2] = "banana";
    fruits[fruits["orange"] = 3] = "orange";
})(fruits || (fruits = {}));
var fruit = fruits[2];
console.log("fruits 2 is " + fruit);
