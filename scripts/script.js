let computerGuess = Math.floor(Math.random() * 100) + 1;
let userGuess;
let attempts = 0;
let guessInfo = document.querySelector(".guess-info");
let startButton = document.querySelector(".guess-button");
let restartButton = document.querySelector(".restart-button");

console.log(computerGuess);
document.querySelector(".guess-input").select();

startButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (document.querySelector(".restart-button").style.display !== "block") {
      document.querySelector(".guess-button").click();
    } else {
      document.querySelector(".restart-button").click();
    }
  }
});

function checkGuess() {
  attempts++;
  userGuess = parseInt(document.querySelector(".guess-input").value);
  if (userGuess < computerGuess) {
    guessInfo.innerHTML = "Dit gæt er for lavt!";
  } else if (userGuess > computerGuess) {
    guessInfo.innerHTML = "Dit gæt er for højt!";
  } else if (isNaN(userGuess)) {
    guessInfo.innerHTML = "Dit gæt er ikke et tal!";
  } else {
    guessInfo.innerHTML = `Tillykke! Du gættede rigtigt! Du brugte ${attempts} forsøg.`;
    restartButton.style.display = "block";
    document.querySelector("body").style.animation =
      "rainbowBG 5s linear infinite";
    guessInfo.style.animation = "blink 0.5s linear infinite";
    document.querySelector("h1").style.animation = "none";
  }
  document.querySelector(".guess-input").select();
}

function restartGame() {
  computerGuess = Math.floor(Math.random() * 100) + 1;
  console.log(computerGuess);
  attempts = 0;
  guessInfo.innerHTML = "";
  restartButton.style.display = "none";
  document.querySelector(".guess-input").value = "";
  document.querySelector("h1").style.animation = "";
  document.querySelector("body").style.animation = "";
  guessInfo.style.animation = "";
}

function validateInput(input) {
  if (input.value.length > 3) {
    input.value = input.value.slice(0, 3);
  }
  if (input.value > 100) {
    input.value = 100;
  }
  if (input.value < 0) {
    input.value = 0;
  }
}
