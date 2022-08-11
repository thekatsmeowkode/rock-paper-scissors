//define 3 possible choice variables
let choices = ['rock', 'paper', 'scissors'];

//make a way to generate random  computerChoice
var getComputerChoice = choices[Math.floor(Math.random()*choices.length)];

//define parameter for playround function using randomly generated computerChoice
let computerSelection = getComputerChoice

//debug helper
console.log(computerSelection)

//debug helper
let playerSelection = 'paper'

//debug helper
console.log(playerSelection)

//if else statement 
function playround(playerSelection, computerSelection) {
  if (computerSelection === 'rock' && playerSelection === 'paper') {return "You win"}
   else if (computerSelection === 'rock' && playerSelection === 'scissors') {return "You lose"}
   else if (computerSelection === 'rock' && playerSelection === 'rock') {return "Draw"}
   else if (computerSelection === 'scissors' && playerSelection === 'paper') {return "You lose"}
   else if (computerSelection === 'scissors' && playerSelection === 'rock') {return "You win"}
   else if (computerSelection === 'scissors' && playerSelection === 'scissors') {return "Draw"}
   else if (computerSelection === 'paper' && playerSelection === 'scissors') {return "You win"}
   else if (computerSelection === 'paper' && playerSelection === 'rock') {return "You lose"}
   else if (computerSelection === 'paper' && playerSelection === 'paper') {return 'Draw'}
   else {return 'invalid'}
}

console.log(playround(playerSelection, computerSelection))