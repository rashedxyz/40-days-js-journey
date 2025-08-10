// task 1
for (i = 1; i <= 5; i++) {
  let star = "";
  for (j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// task 2
const num = 5;

for (i = 1; i <= 10; i++) {
  console.log(num + " " + "x" + " " + i + " " + "=" + " " + num * i);
}

// task 3
let sumOfOddNumbers = 0;

for (i = 1; i <= 500; i++) {
  if (i % 2 !== 0) sumOfOddNumbers += i;
}

console.log(sumOfOddNumbers);

// task 4
for (i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

//task 5
let inputNumber = 6789;
let reversedNumber = 0;

while (inputNumber > 0) {
  const lastDigit = inputNumber % 10;
  reversedNumber = reversedNumber * 10 + lastDigit;
  inputNumber = Math.floor(inputNumber / 10);
}

console.log(reversedNumber);

// task 6

/*
for loop - When we know the number of iteration, we should use for loop
while loop - When the number of iteration is not specific, we should use while loop
do while loop - When at least one iteration is confirmed, we should use the do-while loop
*/
