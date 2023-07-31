# CodeWithMosh-TypeScript-Course

## Unit 2: Getting started with typescript

### 2 - what is typescript?

A language built on top of javascript - technically, any js are valid ts.

Benefits of ts:

1. statically typed
2. code completion
3. refactoring
4. shorthand notations

Drawbacks of ts:

1. compliation (transpilation)
2. discipline in coding

### 3 - setting up the development env.

1. node (download via node.js.org)
2. `npm i -g typescript` install ts globally
3. `tsc -v` check ts version (4.6.3 in the tutoral video)

### 4 - your first ts program.

find in folder `/hello-world`.
and we can run `tsc index.ts` to complie and translate it into js

### 5 - configuring ts compiler

`tsc --init` to generate the tsconfig.json from template,
in the json file, we can modify:

- the source dir from `./` to `./src`
- the emit dir from `./` to `./dist`
- edit "removeComments" to true (so that our output js will be shorter)
- edit "noEmitOnError" to true so that no js will be generated if error exists

and then, simply run `tsc` to complie everything inside our root directory.

### 6 - debugging ts application

1. go to ts config, turn "sourceMap" to true.
   (which will generate a index.js.map in `./dist`, for machine to read)
2. add some logic...
3. add a break point to a line.
4. go to the debug panel of vscode, and click "create a launch.json file", select "node.js" from dropdown.
5. add `"preLaunchTask": "tsc: build - hello-world/tsconfig.json"` to the `launch.json` file.

## Unit 3: Fundamentals

### 5 - Arrays

```typescript
let numbers: number[] = [1, 2, 3];

// once we know the type, we have all the auto completion
numbers.forEach(n => n.)
```

### 6 - Tuple

Similar to array but usually comes in lenght of 2 (could be longer but cost readability)

```typescript
let user: [number, string] = [1, "Toby"];
```

### 7 - Enums

```typescript
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
} // default to 0, 1, 2 if not specified

enum StringSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Medium
console.log(mySize) // 2
```


## Unit 4 - Advanced Types
Most notes are in the `hello-world/src/index.ts` file.

### 10 - unknown type
It is recommended to use `unknown` type instead of `any` type.
The reason being that `unknown` type require us to do type check where `any` type will allow anything (unsafe).

### 11 - the never type
It is recommended to add `never` to function returns if it will never return (such as a `while (true` loop or a `throw new error` method).
And if we turn `// "allowUnreachableCode": true,` to false, the compilor will help us find all unreachable code (with the help of this `never` type hint.)