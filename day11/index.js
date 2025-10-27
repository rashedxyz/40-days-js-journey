/*
1. What will be the output of the following code and why?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

output 
1
2

Because closure has access to the outer function's variables. It remembers the value of the outer function's variable even after the outer function has finished executing. So, each time the inner function is called, it has access to the updated value of the count variable.

*/

/*
2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

Output: 100

Because inner function has access to the lexical environment of the outer function. So, it has access to the x variable.

*/

/*
3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
*/

function buttonClickHandle() {
  const btnElem = document.createElement("button");
  btnElem.id = "myBtn";
  btnElem.textContent = "Click me!";

  document.body.appendChild(btnElem);

  let count = 0;
  const btnElement = document.getElementById("myBtn");

  btnElement.addEventListener("click", () => {
    count++;
    console.log("count", count);
  });
}

// buttonClickHandle();

/* 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers. */

function createMultiplier(multiplier) {
  return function (number) {
    console.log(number * multiplier);
  };
}

const doubleTheNumber = createMultiplier(2);

// doubleTheNumber(300);

/* 5. What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists
- 3) The object is automatically cloned
- 4) None of the Above.

Answer: 2

*/

/* 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions. */

function counterFactory() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log("incremented", count);
    },
    decrement: function () {
      count--;
      console.log("decremented", count);
    },
    reset: function () {
      count = 0;
      console.log("reset count", 0);
    }
  };
}

const count1 = counterFactory();
count1.increment();
count1.increment();
count1.increment();
count1.decrement();
count1.reset();
