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
