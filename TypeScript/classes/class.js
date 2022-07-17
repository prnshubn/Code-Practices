var myClass = /** @class */ (function () {
    function myClass(x) {
        this.x = x;
    }
    myClass.prototype.value = function (x) {
        return "The value of x is " + this.x;
    };
    return myClass;
}());
var myObj = new myClass(30);
console.log(myObj.value);
