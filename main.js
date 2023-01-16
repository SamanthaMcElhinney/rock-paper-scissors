var currentGame;
var classicGameSelector = document.querySelector("#classic-game-selector");
var difficultGameSelector = document.querySelector("#Difficult-game-selector");
var userInstructions = document.querySelector(".user-instructions");
var catIcon = document.querySelector(".cat-img");
var cupIcon = document.querySelector(".cup-img");
var waterIcon = document.querySelector(".water-img");
var yarnIcon = document.querySelector(".yarn-img");
var dogIcon = document.querySelector(".dog-img");
var changeGameButton = document.querySelector(".change-game");
var winsCounterHuman = document.querySelector("#wins-counter-human");
var winsCounterCat = document.querySelector("#wins-counter-cat");
var images = document.querySelector(".icons");
var resultSection = document.querySelector(".player-results");

window.addEventListener("load", startGame);
classicGameSelector.addEventListener("click", displayClassicGameIcons);
difficultGameSelector.addEventListener("click", displayDifficultGameIcons);
images.addEventListener("click", function () {
    if(currentGame.gameType === "easy"){
         humanClassicSelection(event);
    } else if(currentGame.gameType === "hard") {
        humanClassicSelectionHard(event);
    }
 resultsSection()
 updateScore()
 updateMessage()
 resetGame();
})
changeGameButton.addEventListener("click", displayMainMenu);

function startGame() {
  currentGame = new Game();
}

function runGame() {}

function hideImages() {
  catIcon.classList.add("hidden");
  cupIcon.classList.add("hidden");
  waterIcon.classList.add("hidden");
  yarnIcon.classList.add("hidden");
  dogIcon.classList.add("hidden");
}

function resetGame() {
  if (currentGame.gameType === "easy") {
    console.log("currentGame.gameType", currentGame.gameType)
    setTimeout(displayClassicGameIcons, 2000);
  } else if (currentGame.gameType === "hard") {
    console.log("currentGame.gameType", currentGame.gameType)
    setTimeout(displayDifficultGameIcons, 2000);
  }
}

function displayMainMenu() {
  userInstructions.innerText = "Choose your game!";
  classicGameSelector.classList.remove("hidden");
  difficultGameSelector.classList.remove("hidden");
  changeGameButton.classList.add("hidden");
  hideImages();
}

function displayClassicGameIcons() {
  currentGame.gameMode("easy");
  currentGame.gameType = "easy";
  userInstructions.innerText = "Choose your fighter!";
  catIcon.classList.remove("hidden");
  cupIcon.classList.remove("hidden");
  waterIcon.classList.remove("hidden");
  classicGameSelector.classList.add("hidden");
  difficultGameSelector.classList.add("hidden");
  resultSection.classList.add("hidden");
}

function displayDifficultGameIcons() {
  currentGame.gameMode("hard");
  userInstructions.innerText = "Choose your fighter!";
  catIcon.classList.remove("hidden");
  cupIcon.classList.remove("hidden");
  waterIcon.classList.remove("hidden");
  yarnIcon.classList.remove("hidden");
  dogIcon.classList.remove("hidden");
  classicGameSelector.classList.add("hidden");
  difficultGameSelector.classList.add("hidden");
  resultSection.classList.add("hidden");
}

function humanClassicSelection(event) {
  if (event.target.classList.contains("cat-img")) {
    currentGame.humanPlayer.choice = "catPaw";
    currentGame.catChoice();
    hideImages();
  } else if (event.target.classList.contains("water-img")) {
    currentGame.humanPlayer.choice = "water";
    currentGame.catChoice();
    hideImages();
  } else if (event.target.classList.contains("cup-img")) {
    currentGame.humanPlayer.choice = "cup";
    currentGame.catChoice();
    hideImages();
  }
  currentGame.playEasyGame();
}

function checkPlayerChoice(choice) {
  if (choice === "catPaw") {
    return "src/crop-Shutterstock-a-cute-calico-cat-raises-its-paw-against-a-blue-background (2).png";
  } else if (choice === "cup") {
    return "src/cup image.png";
  } else if (choice === "water") {
    return "src/water image.png";
  } else if (choice === "yarn") {
    return "src/alien yarn.png";
  } else if (choice === "dog") {
    return "src/dog smiling.png";
  }
}

function resultsSection() {
  resultSection.innerHTML = "";
  hideImages();
  resultSection.classList.remove("hidden");
  resultSection.innerHTML = ` 
      <section class="icons">
      <img class="results-icons" src="${checkPlayerChoice(
        currentGame.humanPlayer.choice
      )}" alt="${currentGame.humanPlayer.choice}">
      <img class="results-icons" src="${checkPlayerChoice(
        currentGame.catPlayer.choice
      )}" alt="${currentGame.catPlayer.choice}">;
      </section>`;
  resetGame();
}

function updateScore() {
  winsCounterHuman.innerText = currentGame.humanPlayer.wins;
  winsCounterCat.innerText = currentGame.catPlayer.wins;
}

function updateMessage() {
  userInstructions.innerText = currentGame.message;
  changeGameButton.classList.remove("hidden");
}

function humanClassicSelectionHard(event) {
  if (event.target.classList.contains("cat-img")) {
    currentGame.humanPlayer.choice = "catPaw";
    currentGame.gameType = "hard";
    currentGame.catChoice();
  } else if (event.target.classList.contains("water-img")) {
    currentGame.humanPlayer.choice = "water";
    currentGame.gameType = "hard";
    currentGame.catChoice();
  } else if (event.target.classList.contains("cup-img")) {
    currentGame.humanPlayer.choice = "cup";
    currentGame.gameType = "hard";
    currentGame.catChoice();
  } else if (event.target.classList.contains("yarn-img")) {
    currentGame.humanPlayer.choice = "yarn";
    currentGame.gameType = "hard";
    currentGame.catChoice();
  } else if (event.target.classList.contains("dog-img")) {
    currentGame.humanPlayer.choice = "dog";
    currentGame.gameType = "hard";
    currentGame.catChoice();
  }
  currentGame.playDifficultGame();
}
