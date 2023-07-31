// 2- Type aliases
type Employee = {
  readonly id: number; // prevent us from modify it
  name: string;
  fax?: number; // optional
  retire: (date: Date) => void;
};

// Object
let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "mosh";
// employee.id = 2; // -> error

// 3 - Union type
// weight : number | string is a "Union type"
function kgToLbs(weight: number | string): number {
  // we can narrow the type for compilor here
  if (typeof weight === "number") {
    // inside this block, the compilor will know weight is num
    return weight * 2.2;
  } else {
    // inside this block, the compilor will know weight is str
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// 4 - Intersection type
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;
let textBox: UIWidget = {
  // here, the compilor will know both drag() and resize() are required
  drag: () => {},
  resize: () => {},
};

// 5 - Literal types: *exact, specific value
type Quantity = 50 | 100;
type Metric = "cm" | "inch";
let quantity: Quantity = 100; // can only be 50 or 100

// 6 - nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

// 7 - Optional chaining
type Customer = { birthday?: Date };
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday); // need ? bcz customer can be null
// identical to with if(customer !== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear);

// Optional element access operator (for array)
// customerArray?.[0]

// Optional call
let log: any = null;
// log("a"); // will crash
log?.("a");

// 8 - Nullish coaelscing operator ??
let speed: number | null = null;
let ride = {
  // falsy (undefined, null, '', false, 0)
  // speed: speed || 30 // <- not good bcz a valid 0 will be overwritten
  // speed: speed !== null ? speed : 30, // this is ok but the next link is equal and shorter
  speed: speed ?? 30, // === if null or undefined use 30
};

// 9 - type assertions, as
// 'as' is saying that Im certain about the return type of a variable
// so to allow better access to the properties, we tell the compilor
// that this element is a more specific type (instead of a more general one)

// e.g. here, without this as, the compilor only know phone is a general
// HTML element. And we wont be able to access the value (error warning)
// However, if we specify HTMLInputElmenet, then we will get access
// to all the method and properties of HTMLInput Element
let phone = document.getElementById("phone") as HTMLInputElement;
let phone2 = <HTMLInputElement>document.getElementById("phone"); //same as above

// notice that the 'as' doesnt do any type conversion, so if
// the return value of phone is NOT HTMLInputElement, aka, if phone
// doesnt have value. Next line will crash.
phone.value;


// 10 - unknown type
// // unknown type is better than any type
// function unknownType(document: any) {
//   document.move()
//   ...
// }
// function unknownType(document: unknown){
//   document.move()
// }