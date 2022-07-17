var myClass = /** @class */ (function () {
    function myClass(firstName, lastName, roll) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roll = roll;
    }
    myClass.prototype.display = function () {
        console.log("First name is: " + this.firstName);
        console.log("Last name is: " + this.lastName);
        console.log("Roll number is: " + this.roll);
    };
    return myClass;
}());
var myObj = new myClass("Priyanshu", "B", 14);
myObj.display();
