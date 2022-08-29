let playerScore = 0
let computerScore = 0

let rockButton = document.querySelector('.rockbutton')
let paperButton = document.querySelector('.paperbutton')
let scissorButton = document.querySelector('.scissorbutton')
let pChoiceBox = document.querySelector('.pChoiceOutput')
let cChoiceBox = document.querySelector('.cChoiceOutput')
let pScoreBox = document.querySelector('.pScoreOutput')
let cScoreBox = document.querySelector('.cScoreOutput')
let quoteOutput = document.querySelector('#quoteBox')

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
  cScoreBox.innerHTML = computerScore;
  quoteOutput.textContent= 'WIN! Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill'}
function loserOutput() {
  computerScore++;
  checkScore(playerScore, computerScore);
  pScoreBox.innerHTML = playerScore;
  cScoreBox.innerHTML = computerScore;
  quoteOutput.textContent= 'LOSE! Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. —Dale Carnegie'}
  
function drawOutput() {
  checkScore(playerScore, computerScore);
  pScoreBox.innerHTML = playerScore;
  cScoreBox.innerHTML = computerScore;
  quoteOutput.textContent= "TIE! Don\'t settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had. —Angela Bassett"
}

function checkScore(playerScore, computerScore) {
  if (playerScore == 5) {window.confirm('Congratulations, you win! Remember: "In life, winning and losing will both happen.  What is never acceptable is quitting. -Magic Johnson"'); location.reload()}
  else if (computerScore == 5) {window.confirm('Sorry, you lost. "Yesterday is not ours to recover, but tomorrow is ours to win or lose. -Lyndon B Johnson"'); location.reload();}
  else {}}

