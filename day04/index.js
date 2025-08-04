//1

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

/*
  The output will be "It's a normal day."
  This is because the case "monday" does not match "Monday" due to case sensitivity. So the default case is executed.
*/

//2
const withdrawalAmount = 500;

if (withdrawalAmount >= 100 && withdrawalAmount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

//3

const num1 = 30;
const num2 = 10;

const operator = "%";

switch (operator) {
  case "+":
    console.log(num1 + " " + operator + " " + num2 + " = ", num1 + num2);
    break;
  case "-":
    console.log(num1 + " " + operator + " " + num2 + " = ", num1 - num2);
    break;
  case "*":
    console.log(num1 + " " + operator + " " + num2 + " = ", num1 * num2);
    break;
  case "/":
    console.log(num1 + " " + operator + " " + num2 + " = ", num1 / num2);
    break;
  case "%":
    console.log(num1 + " " + operator + " " + num2 + " = ", num1 % num2);
    break;
  default:
    console.log("Invalid input");
}

// 4

const age = 61;

if (age < 18) {
  console.log("Ticket price: $3");
} else if (age >= 18 && age <= 60) {
  console.log("Ticket price: $10");
} else if (age > 60) {
  console.log("Ticket price: $8");
}

// 5
const side1 = 30;
const side2 = 30;
const side3 = 30;

if (side1 === side2 && side1 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
