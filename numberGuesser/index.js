/* Write a guessing game where the user has to guess a secret number. 
After every guess the program tells the user whether their number was too large or too small.
At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. 
If the user provides an guess which isn't a number, print an error message and do not 
count this as a try. */


let prompt = require("prompt-sync")();

let guessArr = [];

let answer = Math.floor(Math.random() * 100);

function promptGuess() {

  let guess = prompt("Guess a number: ");
  guess = Number(guess);
 

  if (isNaN(guess)){
    console.log("Not a number! Try again!");
    return promptGuess();
  }
 
  if (guessArr.length === 0) {
    guessArr[0] = guess;
  } else if (guessArr.indexOf(guess) === -1){
    guessArr.push(guess);
  }
   else {
     console.log("Already Guessed!");
     return promptGuess();
  }
 
  if (guess > answer) {
    console.log("Too High!");
    promptGuess();
  } else if (guess < answer) {
    console.log("Too Low");
    promptGuess();
  } else {console.log("You got it! You took " + guessArr.length + " attempts!")}
}

promptGuess();


//Guess a number:
//> 12
//Too Low!
//Guess a number:
//> 65
//Too High!
//Guess a number:
//> 65
//Already Guessed!
//Guess a number:
//> asdf
//Not a number! Try again!
//Guess a number:
//> 42
//You got it! You took 3 attempts!