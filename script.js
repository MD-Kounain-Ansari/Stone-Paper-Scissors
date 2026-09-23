let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const reset = document.querySelector(".reset-btn");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#bot");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again ";
  msg.style.backgroundColor = "#F3E4C9";
  msg.style.color = "#42220b";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "wheat";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost !  ${compChoice} beats  Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "wheat";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp Choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#F3E4C9";
  msg.style.color = "#42220b";
});

