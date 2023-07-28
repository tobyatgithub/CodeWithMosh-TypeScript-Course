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

// intersection type
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

// Literal *exact, specific value
type Quantity = 50 | 100;
type Metric = "cm" | "inch";
let quantity: Quantity = 100; // can only be 50 or 100

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);
