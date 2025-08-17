/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again

function secretNumberGame() {
  const minNumber = 1;
  const maxNumber = 10;

  const secretNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );

  let numberOfAttempts = 0;
  let userInput = null;

  while (Number(userInput) !== secretNumber) {
    userInput = prompt("Enter a number of your choice");
    if (isNaN(userInput) || userInput < minNumber || userInput > maxNumber) {
      console.log(
        `Invalid input! Please enter a number between ${minNumber} and ${maxNumber}.`
      );
      continue;
    }
    numberOfAttempts++;
    if (userInput > secretNumber) {
      console.log("Your guessed number is too high");
    } else {
      console.log("Your guessed number is too low");
    }
  }

  console.log("Congratulations! you have guessed the correct number.");
  console.log(`You have tried ${numberOfAttempts} times`);
  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    secretNumberGame();
  } else {
    console.log("See you again. Bye!");
  }
}

secretNumberGame();
