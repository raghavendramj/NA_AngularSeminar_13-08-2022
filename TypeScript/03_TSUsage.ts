let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const num: number = obj;

let myName: string = "Adam Gill"; //Explicit Type
let myNameWithoutExplicitType = "Adam Gil"; //Implicit Type

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// greet(40);
greet("Ricky!");
