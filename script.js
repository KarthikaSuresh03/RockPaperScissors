let startScreen = document.getElementById("start-screen");
let playScreen = document.getElementById("play-screen");

let gameButtons = document.getElementById("game-buttons");
let gameoverScreen = document.getElementById("gameover-screen");

let number = document.getElementById("max-score");
let playerScoreText = document.getElementById("player-score");
let computerScoreText = document.getElementById("computer-score");
let roundDescriptionText = document.getElementById("round-description");
let roundResultText = document.getElementById("round-result");
let winText = document.getElementById("win-text");

let maxScore;
let playerScore;
let computerScore;

let choices = ["Rock", "Paper", "Scissors"];
let playerChoice;
let computerChoice;

function startGame() {
  playerScore = 0;
  computerScore = 0;
  startScreen.style.display = "none";
  playScreen.style.display = "flex";
  maxScore = number.value;
  console.log(maxScore);
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function setComputerChoice() {
  let choice = choices[Math.floor(Math.random() *3)];
  return choice;
}

let text;

function getResult(choice1, choice2) {
  if(choice1 === choice2) {
    text = "It's a tie. Both chose " + choice1;
    console.log(text);
    roundResultText.textContent = "";
    return 0;
  }
  else if(((choice1 === "Rock" && choice2 === "Scissors") || (choice1 === "Paper" && choice2 === "Rock")) || (choice1 === "Scissors" && choice2 === "Paper")) {
    text = choice1 + " beats " + choice2;
    console.log(text);
    return choice1;
  }
  else {
    text = choice2 + " beats " + choice1;
    console.log(text);
    return choice2;
  }
}

function gameoverCheck() {
  if(playerScore == maxScore || computerScore == maxScore) {
    gameButtons.style.display = "none";
    gameoverScreen.style.display = "flex";
    if(playerScore == maxScore)
      winText.textContent = "Player Wins!";
    else
      winText.textContent = "Computer Wins!";
  }
}

function playRound() {
  computerChoice = setComputerChoice();
  let res = getResult(playerChoice, computerChoice);
  if(res === playerChoice) {
    playerScore++;
    console.log(playerScore);
    playerScoreText.textContent = playerScore;
    roundResultText.textContent = "Player scores a point!";
  }
  else if(res === computerChoice) {
    computerScore++;
    console.log(computerScore);
    computerScoreText.textContent = computerScore;
    roundResultText.textContent = "Computer scores a point!";
  }
  roundDescriptionText.textContent = text;
  gameoverCheck();
}

function setRock() {
  playerChoice = "Rock";
  playRound();
}
function setPaper() {
  playerChoice = "Paper";
  playRound();
}
function setScissors() {
  playerChoice = "Scissors";
  playRound();
}

function reset() {
  playScreen.style.display = "none";
  startScreen.style.display = "block";
  gameButtons.style.display = "flex";
  gameoverScreen.style.display = "none";
  roundDescriptionText.textContent = "";
  roundResultText.textContent = "";
}
