let choices = ['rock', 'paper', 'scissors'];

let playerScore = 0
let computerScore = 0

var getComputerChoice = choices[Math.floor(Math.random() * choices.length)];


let ChangeTextRock = () => {
  let  rockDisplayChoice = document.querySelector('.pChoiceOutput'); 
  rockDisplayChoice.textContent = "Rock";
  playerSelection = "rock"}
  //pChoiceOutput.textContent="rock"}
  
let ChangeTextPaper = () => {
    let paperDisplayChoice = document.querySelector('.pChoiceOutput'); 
    paperDisplayChoice.textContent = "Paper";
    playerSelection= "paper";}
    //pChoiceOutput.textContent="paper"}
  
let ChangeTextScissors = () => {
    let scissorsDisplayChoice = document.querySelector('.pChoiceOutput'); 
    scissorsDisplayChoice.textContent = "Scissors";
    playerSelection = "scissors"}
    //pChoiceOutput.textContent="scissors"}

const rockButton = document.querySelector('.rockbutton');
rockButton.addEventListener('click', ChangeTextRock)

const paperButton = document.querySelector('.paperbutton');
paperButton.addEventListener('click', ChangeTextPaper)

const scissorButton = document.querySelector('.scissorbutton');
scissorButton.addEventListener('click', ChangeTextScissors)

let game = () => {
while (playerScore<5 && computerScore<5)
{ let i=0
  var getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
  let computerSelection = getComputerChoice;
 
  var paragraph = document.getElementsByClassName("cChoiceOutput")
  paragraph.textContent = (`${computerSelection}`)

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


playround(playerSelection, computerSelection);
i++;
}}

game();