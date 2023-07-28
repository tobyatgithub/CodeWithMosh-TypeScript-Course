"use strict";
console.log("Hello World");
let age = 30;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "typescript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
var StringSize;
(function (StringSize) {
    StringSize["Small"] = "s";
    StringSize["Medium"] = "m";
    StringSize["Large"] = "l";
})(StringSize || (StringSize = {}));
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (income < 50000) {
        return income * 1.2;
    }
    if (taxYear < 2022) {
        return income * 1.3;
    }
    return income * 1.4;
}
//# sourceMappingURL=random.js.map