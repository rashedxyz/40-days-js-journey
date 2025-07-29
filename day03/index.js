// task 01
const number = 5;
const taskOneResult = number % 2 === 0 ? "even" : "odd";
console.log("The number is", taskOneResult);

// task 02
const age = 17;
const taskTwoResult =
  age >= 18
    ? "You are eligible for driving license"
    : "You are not eligible for driving license";
console.log(taskTwoResult);

// task 03
const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const bonusOnAnnualSalary = annualSalary * 0.2;
const annualIncome = annualSalary + bonusOnAnnualSalary;
console.log("Your annual income as a CTC is", annualIncome, "rupees");

// task 04
const color = "gren";
const taskFourResult =
  color === "red" ? "STOP" : color === "yellow" ? "SLOW DOWN" : "GO";
console.log(taskFourResult);

// task 05
const units = 5;
const monthlyCost = units * 150 * 30;
const yearlycost = monthlyCost * 12;
const annualPaymentDiscountAmount = yearlycost * 0.2;

const annualPayment = yearlycost - annualPaymentDiscountAmount;

console.log("The annual payment is", annualPayment, "rupees");

// task 06
const year = 2024;
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(year, "is", isLeapYear ? "a leap year" : "not a leap year");

// task 07
const p = 5;
const q = 17;
const r = 9;

const maximumNumber = p > q && p > r ? p : q > r ? q : r;

console.log("The maximum number is", maximumNumber);

// task 08
const count = 5;
const doubleCountUsingShift = 5 << 1;

console.log("The result is", doubleCountUsingShift);
