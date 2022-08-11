//define 3 possible choice variables
let choices = ['rock', 'paper', 'scissors'];

//make a way to generate random  computerChoice
var getComputerChoice = choices[Math.floor(Math.random()*choices.length)];

//define parameter for playround function using randomly generated computerChoice
let computerSelection = getComputerChoice

//debug helper
console.log(computerSelection)

/*let playerSelection = prompt('Choose paper, rock, or scissors', 'default').toUpperCase();*/

let playerSelection = 'paper'

//debug helper
console.log(playerSelection)

//beginning of game loop
for (let i = 1; i < 5; i++) {
//variables to keep scores
let playerScore = 0
let computerScore = 0
//if else statement to determine winner
function playround(playerSelection, computerSelection) {
  if (computerSelection === 'rock' && playerSelection === 'paper') {return playerScore++, console.log("You win")}
   else if (computerSelection === 'rock' && playerSelection === 'scissors') {return "You lose"}
   else if (computerSelection === 'rock' && playerSelection === 'rock') {return "Draw"}
   else if (computerSelection === 'scissors' && playerSelection === 'paper') {return "You lose"}
   else if (computerSelection === 'scissors' && playerSelection === 'rock') {return "You win"}
   else if (computerSelection === 'scissors' && playerSelection === 'scissors') {return "Draw"}
   else if (computerSelection === 'paper' && playerSelection === 'scissors') {return "You win"}
   else if (computerSelection === 'paper' && playerSelection === 'rock') {return "You lose"}
   else if (computerSelection === 'paper' && playerSelection === 'paper') {return 'Draw'}
   else {return 'invalid'}; }
//log result for player to see
function game(playround) {
  if (playround === "You win") {return (playerScore++)}
  else if (playround === "You lose") {return (computerScore++)}
  else if (playround === "Draw") {return (playerScore + 0, computerScore + 0)}
  else {return "oopsie"}}

playround(playerSelection, computerSelection)

console.log(playerScore)

console.log(computerScore)}