/*
  Temporal Dead Zone (TDZ)
  The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the period from the start of a block until a variable is declared and initialized within that block. During this time, any attempt to access the variable will result in a ReferenceError.
  TDZ applies only to variables declared with let and const. Variables declared with var are not subject to TDZ.
*/

// {
//   console.log(a); // ReferenceError: a is not defined
//   let a = 10;
//   console.log(a); // 10

//   console.log(b); // ReferenceError: b is not defined
//   const b = 20;
//   console.log(b); // 20

//   console.log(c); // ReferenceError: c is not defined
//   let c = 30;
//   console.log(c); // 30
// }

/* 
variable and function hoisting 

Hoisting

Hoisting is JavaScript's behavior of moving declarations (variables and functions) to the top of their containing scope during the creation phase, so they are accessible before their textual location, with var bindings initialized to undefined and let/const in the TDZ.

GEC:
  CP:
    a = undefined
  EP:
    undefined
    a = 10
    10

    FEC: for sayHello function
      CP:
        
      EP:
        Hello!
        
*/
console.log(a); // undefined
var a = 10;
console.log(a);

sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}
