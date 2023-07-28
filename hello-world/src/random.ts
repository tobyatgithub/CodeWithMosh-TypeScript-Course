
console.log("Hello World");
let age: number = 30;

if (age < 50) age += 10;

console.log(age);

let sales: number = 123_456_789;
let course: string = "typescript";
let is_published: boolean = true;
let level; // any

// specify any to bypass the error
function render(document: any) {
  console.log(document);
}

// use const will give you a shorter js file and more optimization
// check the difference in dist/index.js
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
} // default to 0, 1, 2 if not specified

enum StringSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Medium;
console.log(mySize); // 2

// Function default value
function calculateTax(income: number, taxYear = 2022): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  if (taxYear < 2022) {
    return income * 1.3;
  }
  return income * 1.4;
}
