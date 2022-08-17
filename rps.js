//define 3 possible choice variables
let choices = ['rock', 'paper', 'scissors'];

//variables to keep scores
 let playerScore = 0
 let computerScore = 0

//make a way to generate random  computerChoice
  var getComputerChoice = choices[Math.floor(Math.random() * choices.length)];

//if else statement to determine winner
  function playround(playerSelection, computerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'paper') { return playerScore++, console.log("You win")}
    else if (computerSelection === 'rock' && playerSelection === 'scissors') { return computerScore++, console.log("You lose")}
    else if (computerSelection === 'rock' && playerSelection === 'rock') { return console.log("Draw" )}
    else if (computerSelection === 'scissors' && playerSelection === 'paper') { return computerScore++, console.log("You lose")}
    else if (computerSelection === 'scissors' && playerSelection === 'rock') { return playerScore++, console.log("You win")}
    else if (computerSelection === 'scissors' && playerSelection === 'scissors') { return console.log("Draw") }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') { return playerScore++, console.log("You win")}
    else if (computerSelection === 'paper' && playerSelection === 'rock') { return computerScore++, console.log("You lose")}
    else if (computerSelection === 'paper' && playerSelection === 'paper') { return console.log('Draw') }
    else { return 'invalid' };
  }

let game = () => {
  for (let i=0; i < 5; i++)
{ var getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
  let computerSelection = getComputerChoice
  let playerSelection = prompt("Choose Paper, Rock, or Scissors", "Paper, rock, or scissors").toLowerCase()
  console.log(`Player chose ${playerSelection}`)
  console.log(`Computer chose ${computerSelection}`)
  playround(playerSelection, computerSelection);
}
if (playerScore > computerScore) {return "Player wins"}
else if (playerScore < computerScore) {return "Computer wins"}
else {return "There was a tie"}
}

console.log(game())