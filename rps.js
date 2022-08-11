//define 3 possible choice variables
let choices = ['rock', 'paper', 'scissors'];

/*let playerSelection = prompt('Choose paper, rock, or scissors', 'default').toUpperCase();*/

/*let playerSelection = 'paper'*/

//debug helper
/*console.log(playerSelection)*/

//beginning of game loop
for (let i = 1; i < 6; i++) {
  //variables to keep scores
  let playerScore = 0
  let computerScore = 0
  //make a way to generate random  computerChoice
  var getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
  //define parameter for playround function using randomly generated computerChoice
  let computerSelection = getComputerChoice
  console.log(`Computer chose ${computerSelection}`)
  let playerSelection = 'paper'
  console.log(`Player chose paper`)
  //if else statement to determine winner
  function playround(playerSelection, computerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'paper') { return playerScore++; console.log("You win") }
    else if (computerSelection === 'rock' && playerSelection === 'scissors') { return computerScore++; console.log("You lose") }
    else if (computerSelection === 'rock' && playerSelection === 'rock') { return "Draw" }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') { return computerScore++; console.log("You lose") }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') { return playerScore++; console.log("You win") }
    else if (computerSelection === 'scissors' && playerSelection === 'scissors') { return "Draw" }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') { return playerScore++; console.log("You win") }
    else if (computerSelection === 'paper' && playerSelection === 'rock') { return computerScore++; console.log("You lose") }
    else if (computerSelection === 'paper' && playerSelection === 'paper') { return 'Draw' }
    else { return 'invalid' };
  }
  //call playround function
  playround(playerSelection, computerSelection);

  console.log(`Player score: ${playerScore}`)

  console.log(`Computer score: ${computerScore}`)
  }