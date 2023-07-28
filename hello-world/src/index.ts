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
