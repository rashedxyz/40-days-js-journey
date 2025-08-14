// task 1
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(30));

// task 2

function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(findMax(10, 20));

// task 3
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome("racecar"));

// task 4
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

// task 5
function countVowels(str) {
  let countVowels = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        countVowels++;
        break;
    }
  }
  return countVowels;
}

console.log(countVowels("elephant"));

// task 6
function capitalizeWords(sentence) {
  let capitalizeSentence = "";
  let shouldCapitalize = false;
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0 || shouldCapitalize) {
      shouldCapitalize = false;
      capitalizeSentence += sentence[i].toUpperCase();
    } else {
      capitalizeSentence += sentence[i];
    }
    if (sentence[i] === " ") {
      shouldCapitalize = true;
    }
  }
  return capitalizeSentence;
}

console.log(capitalizeWords("my name is rashed"));

// task 7
(function (language) {
  console.log("Hello, " + language + "!");
})("JavaScript");

// task 8
function greet(name, callback) {
  callback(name);
}

greet("Rashed", function (name) {
  console.log("Welcome, " + name);
});
