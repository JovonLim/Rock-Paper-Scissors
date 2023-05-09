const rockBtn = document.querySelector('#rockBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const paperBtn = document.querySelector('#paperBtn');
const resetBtn = document.querySelector('#resetBtn');
const displayOutcome = document.querySelector('#Outcome');
const displayScore = document.querySelector('#Score');
let prevTimeoutId, curTimeoutId;
let playerScore = 0, computerScore = 0;

updateScore();

rockBtn.addEventListener('click', () => {
  game("rock");
});

scissorsBtn.addEventListener('click', () => {
  game("scissors");
});

paperBtn.addEventListener('click', () => {
  game("paper"); 
});

resetBtn.addEventListener('click', () => {
  playerScore = 0, computerScore = 0;
  updateDisplay("reset");
  updateScore();
})

function getComputerChoice() {
  let choices = ["rock", "scissors", "paper"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "scissors" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "rock")) {
    playerScore++;
    updateDisplay("win");
  } else if ((playerSelection == "rock" && computerSelection == "paper")
    || (playerSelection == "scissors" && computerSelection == "rock")
    || (playerSelection == "paper" && computerSelection == "scissors")) {
    computerScore++;
    updateDisplay("lose");
  } else {
    updateDisplay("draw");
  }
  return;
}

function game(playerSelection) {
  playRound(playerSelection, getComputerChoice());
  updateScore();
}

function updateScore() {
  displayScore.textContent = playerScore + "-" + computerScore;
}

function updateDisplay(Outcome) {
  displayOutcome.style.visibility = "visible";
  switch (Outcome) {
    case "win" :
      displayOutcome.textContent = "Congrats, You Have Won this round!";
      hideDisplay();
      break;
    case "lose" :
      displayOutcome.textContent = "Unfortunately, You Have Lost this round!";
      hideDisplay();
      break;
    case "draw" :
      displayOutcome.textContent = "Unlucky, it was a Draw!";
      hideDisplay();
      break;
    case "reset" :
      displayOutcome.textContent = "The scores have been resetted!";
      hideDisplay();
      break;
  }
  return;
}

function hideDisplay() {
  prevTimeoutId = curTimeoutId;
  clearTimeout(prevTimeoutId);
  curTimeoutId = setTimeout(() => { displayOutcome.style.visibility = "hidden" }, 2000);
}