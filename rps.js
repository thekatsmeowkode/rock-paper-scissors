let playerScore = 0
let computerScore = 0

let rockButton = document.querySelector('.rockbutton')
let paperButton = document.querySelector('.paperbutton')
let scissorButton = document.querySelector('.scissorbutton')
let pChoiceBox = document.querySelector('.pChoiceOutput')
let cChoiceBox = document.querySelector('.cChoiceOutput')
let pScoreBox = document.querySelector('.pScoreOutput')
let cScoreBox = document.querySelector('.cScoreOutput')

function makeComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice]}

function clickEvent() {
  rockButton.addEventListener('click', function() {runGame('rock')})
  paperButton.addEventListener('click', function () {runGame('paper')});
  scissorButton.addEventListener('click', function () {runGame('scissors')})
}

clickEvent();

function runGame(playerSelection) {
    const computerSelection = makeComputerChoice();
    pChoiceBox.innerHTML = playerSelection;
    cChoiceBox.innerHTML = computerSelection;
    if (computerSelection == 'rock' && playerSelection == 'paper') {return winnerOutput()}
    else if (computerSelection === 'rock' && playerSelection === 'scissors') {return loserOutput() }
    else if (computerSelection === 'rock' && playerSelection === 'rock') {return drawOutput()}
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {return loserOutput()}
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {return winnerOutput() }
    else if (computerSelection === 'scissors' && playerSelection === 'scissors') {return drawOutput()}
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {return winnerOutput() }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {return loserOutput()}
    else if (computerSelection === 'paper' && playerSelection === 'paper') {return drawOutput()}
    else { return 'invalid' };
}

function winnerOutput() {
  playerScore++;
  checkScore(playerScore, computerScore);
  pScoreBox.innerHTML = playerScore;
  cScoreBox.innerHTML = computerScore}
function loserOutput() {
  computerScore++;
  checkScore(playerScore, computerScore);
  pScoreBox.innerHTML = playerScore;
  cScoreBox.innerHTML = computerScore;}
  
function drawOutput() {
  checkScore(playerScore, computerScore);
  pScoreBox.innerHTML = playerScore;
  cScoreBox.innerHTML = computerScore;
}

function checkScore(playerScore, computerScore) {
  if (playerScore == 5) {window.confirm('congratulations, you win!'); location.reload()}
  else if (computerScore == 5) {window.confirm('If at first you don"t succeed, try, try again.  You lost.'); location.reload();}
  else {}}


// let ChangeTextRock = () => {
//   let rockDisplayChoice = document.querySelector('.pChoiceOutput');
//   rockDisplayChoice.textContent = "Rock";
//   let playerSelection = "rock"
//   let computerSelection = choices[Math.floor(Math.random() * choices.length)];
//   let computerDisplayChoice = document.querySelector(".cChoiceOutput")
//   computerDisplayChoice.textContent = (`${computerSelection}`)
//   playround();
// }

// let ChangeTextPaper = () => {
//   let paperDisplayChoice = document.querySelector('.pChoiceOutput');
//   paperDisplayChoice.textContent = "Paper";
//   let playerSelection = "paper";
//   let getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
//   let computerSelection = getComputerChoice;
//   let computerDisplayChoice = document.querySelector(".cChoiceOutput")
//   computerDisplayChoice.textContent = (`${computerSelection}`)
//   playround();
// }
// //pChoiceOutput.textContent="paper"}

// let ChangeTextScissors = () => {
//   let scissorsDisplayChoice = document.querySelector('.pChoiceOutput');
//   scissorsDisplayChoice.textContent = "Scissors";
//   let playerSelection = "scissors";
//   let computerSelection = choices[Math.floor(Math.random() * choices.length)];
//   let computerDisplayChoice = document.querySelector(".cChoiceOutput")
//   computerDisplayChoice.textContent = (`${computerSelection}`)
//   playround();
// }
// //pChoiceOutput.textContent="scissors"}

// const rockButton = document.querySelector('.rockbutton');
// rockButton.addEventListener('click', ChangeTextRock)

// const paperButton = document.querySelector('.paperbutton');
// paperButton.addEventListener('click', ChangeTextPaper)

// const scissorButton = document.querySelector('.scissorbutton');
// scissorButton.addEventListener('click', ChangeTextScissors)

// function playround(playerSelection, computerSelection) {
//   if (computerSelection === 'rock' && playerSelection === 'paper') { return playerScore++, console.log("You win") }
//   else if (computerSelection === 'rock' && playerSelection === 'scissors') { return computerScore++, console.log("You lose") }
//   else if (computerSelection === 'rock' && playerSelection === 'rock') { return console.log("Draw") }
//   else if (computerSelection === 'scissors' && playerSelection === 'paper') { return computerScore++, console.log("You lose") }
//   else if (computerSelection === 'scissors' && playerSelection === 'rock') { return playerScore++, console.log("You win") }
//   else if (computerSelection === 'scissors' && playerSelection === 'scissors') { return console.log("Draw") }
//   else if (computerSelection === 'paper' && playerSelection === 'scissors') { return playerScore++, console.log("You win") }
//   else if (computerSelection === 'paper' && playerSelection === 'rock') { return computerScore++, console.log("You lose") }
//   else if (computerSelection === 'paper' && playerSelection === 'paper') { return console.log('Draw') }
//   else { return 'invalid' };

// }

// let game = () => {
//   while (playerScore<5 && computerScore<5)
// i++;}