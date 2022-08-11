//define 3 possible choice variables
let choices = ['rock', 'paper', 'scissors'];

//make a way to generate random  computerChoice
var getComputerChoice = choices[Math.floor(Math.random()*choices.length)];

//define parameter for playround function using randomly generated computerChoice
let computerSelection = getComputerChoice

//debug
console.log(computerSelection)

let playerSelection = 'paper'

console.log(playerSelection)

function playround(playerSelection, computerSelection) {
  if (computerSelection === 'rock' && playerSelection === 'paper')
   {return "You lose"}
   else if (computerSelection === 'rock' && playerSelection === 'scissors') {return "You win"}
   else {return "Draw"}
}
console.log(playround('paper', 'rock'))