// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

/* output will be "Bob" because JavaScript will find the variable "user" in the inner function first.
If it doesn't find it there, it will move up to the outer function.
If it doesn't find it there either, it will move up to the global scope.
*/

// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
/*
Total is declared glibally, so any function can access and modify it.
output will be 15 here
*/

// 3. Create a function with a nested function and log a variable from the parent function.
function outer() {
  const outerVar = "I am a variable from outer function";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function foo() {
  for (let i = 0; i < 5; i++) {
    let innerVar = "I am from inside the loop";
    console.log(innerVar);
  }
}
foo();

console.log(innerVar); // Cannot access because variables are either block scoped or function scoped

// 5. Write a function that tries to access a variable declared inside another function.
function foo() {
  const varFromFoo = "I am from foo function";
}

function bar() {
  console.log(varFromFoo); // Cannot access 'varFromFoo' because it is not defined here and it is block scoped
}
bar();

// 6. What will be the output and why?
console.log(a);
let a = 10;

/* output will be reference error because a is on Temporal Dead Zone (TDZ) */

// 7. Where is the age variable accessible? -> B

// 8. What will be the output and explain the output?
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

/*
Output will be "Hi" because JavaScript will find the variable "message" in the inner function first.
If it doesn't find it there, it will move up to the outer function.
If it doesn't find it there either, it will move up to the global scope.
*/

// 9. What will be the output and explain the output?

let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();

/*
Output will be "Inner" because JavaScript will find the variable "x" in the inner function first.
If it doesn't find it there, it will move up to the outer function.
If it doesn't find it there either, it will move up to the global scope.
*/

// 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();

/*
Output will be -1 and -2 respectively because the inner function has access to the count variable in the outer function.
*/
